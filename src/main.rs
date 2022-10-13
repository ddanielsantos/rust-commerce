use dotenvy::dotenv;
use std::{env, error::Error, net::SocketAddr};
mod routes;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    dotenv().ok();

    let port = env::var("PORT")
        .expect("env variable PORT not found")
        .parse::<u16>()
        .expect("not a valid port");

    let addr = SocketAddr::from(([0, 0, 0, 0], port));

    println!("listening on {}", addr);

    let routes = routes::app_routes();

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();

    Ok(())
}
