ARG PORT
ARG DATABASE_URL
# just the necessary to build
FROM rust:slim-buster as build

# initialize a new project
RUN USER=root cargo new --bin buyrust
WORKDIR /buyrust

# copy info about the dependencies
COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml

# build target and remove source code - this will cache the deps
RUN DATABASE_URL=${DATABASE_URL} cargo build --release && rm src/*.rs

# this will cache the code
COPY ./src ./src
RUN rm ./target/release/deps/buyrust* && DATABASE_URL=${DATABASE_URL} cargo build --release

# building with the smallest debian image
FROM debian:buster-slim

# from the previous stage
COPY --from=build /buyrust/target/release/buyrust /usr/src/buyrust

EXPOSE 2000

# :)
CMD ["/usr/src/buyrust"]