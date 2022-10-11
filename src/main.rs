use std::net::SocketAddr;
mod routes;

#[tokio::main]
async fn main() {
    let routes = routes::app_routes();

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();
}
