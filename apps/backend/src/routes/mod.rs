use utoipa::OpenApi;

use axum::Router;

#[derive(OpenApi)]
#[openapi(paths(product::post_endpoint), components(schemas(product::MyInput)))]
pub struct ApiDoc;

mod product;

pub fn app_routes() -> Router {
    let product_routes = product::product_routes();

    Router::new().nest("/product", product_routes)
}
