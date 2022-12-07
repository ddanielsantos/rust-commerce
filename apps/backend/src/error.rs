use serde::Serialize;
use utoipa::ToSchema;

// todo!: do I need a struct?
#[derive(Serialize, ToSchema)]
pub struct Error {
    pub message: String,
}
