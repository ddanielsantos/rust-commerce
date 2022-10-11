use axum::{routing::get, Router};

async fn product() -> &'static str {
    "Hello, World!"
}

async fn products() -> &'static str {
    "Hello, World!"
}

pub fn app_routes() -> Router {
    let product_routes = Router::new()
        .route("/product/:id", get(product))
        .route("/products", get(products));

    Router::new().merge(product_routes)
}
