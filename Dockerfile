ARG PORT
# just the necessary to build
FROM rust:slim-buster as build

# initialize a new project
RUN USER=root cargo new --bin buyrust
WORKDIR /buyrust

# copy info about the dependencies
COPY ./.env ./.env
COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml

# build target and remove source code - this will cache the deps
RUN cargo build --release && rm src/*.rs

# this will cache the code
COPY ./src ./src
RUN rm ./target/release/deps/buyrust* && cargo build --release

# building with the smallest debian image
FROM debian:buster-slim

# from the previous stage
COPY --from=build /buyrust/target/release/buyrust /usr/src/buyrust

# :)
CMD ["/usr/src/buyrust"]