use axum::http::Method;
use tower_http::cors::{AllowHeaders, Any, CorsLayer};

pub fn cors_layer() -> CorsLayer {
    CorsLayer::new()
        .allow_methods([Method::GET, Method::POST])
        .allow_headers(AllowHeaders::any())
        .allow_origin(Any)
}
