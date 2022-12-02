use axum::{http::StatusCode, response::IntoResponse, routing::post, Json, Router};
use serde::Deserialize;
use utoipa::ToSchema;

#[derive(Deserialize, ToSchema)]
pub struct MyInput {
    name: String,
}

pub fn product_routes() -> Router {
    Router::new().route("/:id", post(post_endpoint))
}

#[utoipa::path(
    post,
    path = "/product/:id",
    request_body = MyInput,
    responses(
        (status = 200, description = "List all todos successfully", body = [MyInput])
    )
)]

pub async fn post_endpoint(Json(payload): Json<MyInput>) -> impl IntoResponse {
    (StatusCode::OK, format!("welcome, {}", payload.name))
}

#[cfg(test)]
mod tests {
    use axum::{http::StatusCode, response::IntoResponse, Json};

    use super::{post_endpoint, MyInput};

    #[tokio::test]
    async fn post_endpoint_happy_path() {
        let input: MyInput = MyInput {
            name: "banana".to_string(),
        };

        let expected = StatusCode::OK;
        let got = post_endpoint(Json(input)).await.into_response().status();

        assert_eq!(expected, got)
    }
}
