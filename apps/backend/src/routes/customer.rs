use axum::{http::StatusCode, response::IntoResponse, routing::post, Extension, Json, Router};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use utoipa::ToSchema;

use crate::error::Error;

// todo! decouple struct from route
#[derive(Deserialize, Serialize, ToSchema, Debug)]
pub struct Customer {
    first_name: String,
    last_name: String,
    email: String,
    password: String,
}

pub fn customer_routes() -> Router {
    Router::new().route("/create", post(create_customer))
}

#[utoipa::path(
    post,
    path = "/customer/create",
    // todo! request body != database model
    request_body = Customer,
    responses(
        // todo! status for email already in use
        (status = 201, description = "Create a new customer", body = Customer),
        (status = 500, description = "Some internal error blocked the customer creation", body = Error)
    )
)]
pub async fn create_customer(
    Extension(pool): Extension<PgPool>,
    Json(payload): Json<Customer>,
) -> impl IntoResponse {
    // todo!: check used email
    // todo!: hash password
    // todo!: send id in the response

    let result = sqlx::query_as!(
        Customer,
        "
            with inserted_customer as (
                insert into customers(first_name, last_name, email, password)
                values ($1, $2, $3, $4)
                returning first_name, last_name, email, password
            )
            select first_name, last_name, email, password
            from inserted_customer
        ",
        payload.first_name,
        payload.last_name,
        payload.email,
        payload.password,
    )
    .fetch_one(&pool)
    .await;

    // todo!: study error handling and then evaluate this again
    match result {
        Ok(customer) => {
            return (StatusCode::CREATED, Json(customer)).into_response();
        }
        _ => {
            return (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(Error {
                    message: "could not find content".to_string(),
                }),
            )
                .into_response();
        }
    };
}

#[cfg(test)]
mod tests {
    use std::borrow::BorrowMut;

    use axum::{
        body::Body,
        http::{self, Request, StatusCode},
    };
    use serde_json::json;
    use tower::ServiceExt;

    use crate::app;

    #[sqlx::test]
    async fn create_customer(pool: sqlx::PgPool) {
        sqlx::migrate!("./src/migrations")
            .run(&pool)
            .await
            .expect("could not run the migrations");

        let mut app = app(pool);

        // todo! create util
        let request_body = json!({
            "email": "mail",
            "first_name": "f name",
            "last_name": "l name",
            "password": "p"
        });

        // todo! create util
        let response = app
            .borrow_mut()
            .oneshot(
                Request::builder()
                    .method(http::Method::POST)
                    .uri("/customer/create")
                    .header(http::header::CONTENT_TYPE, "application/json")
                    .body(Body::from(serde_json::to_vec(&request_body).unwrap()))
                    .unwrap(),
            )
            .await
            .unwrap();

        assert_eq!(response.status(), StatusCode::CREATED);
    }
}
