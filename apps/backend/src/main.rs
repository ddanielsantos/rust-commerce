mod config;
mod cors;
mod error;
mod routes;

use std::error::Error;

use axum::{Extension, Router};
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

use sqlx::{postgres::PgPoolOptions, PgPool};

use routes::{app_routes, ApiDoc};

use crate::config::ServerConfig;

pub fn app(db: PgPool) -> Router {
    Router::new()
        .merge(app_routes())
        .merge(SwaggerUi::new("/swagger-ui").url("/api-doc/openapi.json", ApiDoc::openapi()))
        .layer(Extension(db))
        .layer(cors::cors_layer())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let config = ServerConfig::new();

    let db = PgPoolOptions::new()
        .max_connections(20)
        .connect(&config.database_url)
        .await
        .expect("could not connect to database");

    // todo!: maybe a function?
    sqlx::migrate!("./src/migrations").run(&db).await?;

    // todo!: logging
    println!("migrations up to date!");
    println!("listening on {}", config.address);

    axum::Server::bind(&config.address)
        .serve(app(db).into_make_service())
        .await
        .unwrap();

    Ok(())
}
