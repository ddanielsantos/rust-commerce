use std::{error::Error, net::SocketAddr};
mod routes;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let addr = SocketAddr::from(([0, 0, 0, 0], 2000));

    println!("listening on {}", addr);

    let routes = routes::app_routes();

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();

    Ok(())
}
