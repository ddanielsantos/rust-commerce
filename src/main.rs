use dotenvy::dotenv;
use std::{
    env,
    error::Error,
    net::{Ipv4Addr, SocketAddr},
};
mod routes;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    dotenv().ok().expect(".env file not set");
    let url = env::var("URL")
        .expect("env variable URL not found")
        .parse::<Ipv4Addr>()
        .expect("kkk");

    let port = env::var("PORT")
        .expect("env variable PORT not found")
        .parse::<u16>()
        .expect("not a valid port");

    let addr = SocketAddr::from((url, port));

    println!("listening on {}", addr);

    let routes = routes::app_routes();

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();

    Ok(())
}
