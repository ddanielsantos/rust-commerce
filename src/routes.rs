use axum::{http::StatusCode, response::IntoResponse, routing::get, Json, Router};
use serde::Deserialize;

async fn get_product(Json(payload): Json<MyInput>) -> impl IntoResponse {
    (StatusCode::BAD_REQUEST, "seila".to_string())
}

#[derive(Deserialize)]
struct MyInput {}

fn product_routes() -> Router {
    Router::new().route("/:id", get(get_product))
}

pub fn app_routes() -> Router {
    let product_routes = product_routes();

    Router::new().nest("/product", product_routes)
}
