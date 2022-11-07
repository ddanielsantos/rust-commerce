use std::{error::Error, net::SocketAddr};

mod routes;

// fn connect_to_db() -> PgConnection {
//     dotenvy::dotenv().ok();

//     let database_url = env::var("DATABASE_URL").expect("db url not found");

//     PgConnection::establish(&database_url)
//         .unwrap_or_else(|_| panic!("err connecting to {}", &database_url))
// }

// pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!();

// fn run_migrations<DB: diesel::backend::Backend>(
//     connection: &mut impl MigrationHarness<DB>,
// ) -> Result<(), Box<dyn Error + Send + Sync + 'static>> {
//     connection.run_pending_migrations(MIGRATIONS)?;

//     Ok(())
// }

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let addr = SocketAddr::from(([127, 0, 0, 1], 2000));

    let routes = routes::app_routes();

    println!("listening on {}", addr);
    // TODO: how to run migrations on prod

    // let connection = connect_to_db();

    // run_migrations(&connection);

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();

    Ok(())
}
