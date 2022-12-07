use utoipa::OpenApi;

use axum::Router;

use crate::error;

#[derive(OpenApi)]
#[openapi(
    paths(customer::create_customer,),
    components(schemas(customer::Customer, error::Error))
)]
pub struct ApiDoc;

mod customer;

pub fn app_routes() -> Router {
    let customer_routes = customer::customer_routes();

    Router::new().nest("/customer", customer_routes)
}
