use std::net::{Ipv4Addr, SocketAddr};

pub struct ServerConfig {
    pub database_url: String,
    pub address: SocketAddr,
}

impl ServerConfig {
    pub fn new() -> Self {
        // todo! better way to get from env and parse

        let host: Ipv4Addr = dotenvy::var("RAILWAY_ENVIRONMENT")
            .map(|env| match env.as_str() {
                "production" => Ipv4Addr::new(0, 0, 0, 0),
                _ => Ipv4Addr::LOCALHOST,
            })
            .unwrap_or(Ipv4Addr::LOCALHOST);

        let port: Result<u16, _> = dotenvy::var("PORT").expect("PORT must be set").parse();
        let port = port.unwrap_or(2000);
        let database_url = dotenvy::var("DATABASE_URL").expect("DATABASE_URL must be set");

        let address = SocketAddr::from((host, port));

        Self {
            database_url,
            address,
        }
    }
}
