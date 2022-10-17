use axum::Router;

mod product;

pub fn app_routes() -> Router {
    let product_routes = product::product_routes();

    Router::new().nest("/product", product_routes)
}
