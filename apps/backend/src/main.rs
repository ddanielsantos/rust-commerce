mod routes;

use std::{error::Error, net::SocketAddr};

use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

use routes::ApiDoc;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let addr = SocketAddr::from(([127, 0, 0, 1], 8000));

    let routes = routes::app_routes()
        .merge(SwaggerUi::new("/swagger-ui").url("/api-doc/openapi.json", ApiDoc::openapi()));

    println!("listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();

    Ok(())
}
