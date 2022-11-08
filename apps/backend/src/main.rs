use std::{error::Error, net::SocketAddr};

mod routes;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let addr = SocketAddr::from(([0, 0, 0, 1], 2000));

    let routes = routes::app_routes();

    println!("listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();

    Ok(())
}
