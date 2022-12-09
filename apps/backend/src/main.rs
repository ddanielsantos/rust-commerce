mod cors;
mod error;
mod routes;

use std::{error::Error, net::SocketAddr};

use axum::{Extension, Router};
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

use sqlx::{postgres::PgPoolOptions, PgPool};

use routes::{app_routes, ApiDoc};

pub fn app(db: PgPool) -> Router {
    Router::new()
        .merge(app_routes())
        .merge(SwaggerUi::new("/swagger-ui").url("/api-doc/openapi.json", ApiDoc::openapi()))
        .layer(Extension(db))
        .layer(cors::cors_layer())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // todo!: host and port from env
    let addr = SocketAddr::from(([127, 0, 0, 1], 8000));

    let database_url = dotenvy::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let db = PgPoolOptions::new()
        .max_connections(20)
        .connect(&database_url)
        .await
        .expect("could not connect to database");

    // todo!: maybe a function?
    sqlx::migrate!("./src/migrations").run(&db).await?;

    // todo!: logging
    println!("migrations up to date!");
    println!("listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(app(db).into_make_service())
        .await
        .unwrap();

    Ok(())
}
