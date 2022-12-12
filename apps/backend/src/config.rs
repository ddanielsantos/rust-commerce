use std::net::{Ipv4Addr, SocketAddr};

pub struct ServerConfig {
    pub database_url: String,
    pub address: SocketAddr,
}

impl ServerConfig {
    pub fn new() -> Self {
        // todo! better way to get from env and parse
        let host: Result<Ipv4Addr, _> = dotenvy::var("HOST").expect("HOST must be set").parse();
        let host = host.unwrap_or(Ipv4Addr::new(127, 0, 0, 1));
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
