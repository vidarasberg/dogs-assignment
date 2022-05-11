# DOGS!

Your task is to create a frontend for our Dogs service. The dogs service is fairly simple. It provides two endpoints, one for getting all dogs and one for getting a specific dog. The API is available on localhost:3333/api

```
GET /api/dogs
GET /api/dogs/:id
```

Two boilerplates have been set up, one using Angular and one using React, however you are free to use any framework you like, and you can scaffold it using [nx](https://nx.dev/)

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/) (Included with Docker Desktop unless you did something funky)
- Node.js
- [Npm](https://docs.npmjs.com/getting-started/installing-node)

## Installation

### Install all the required dependencies

```bash
npm install
```

### Create the database

```bash
cd ./apps/api/
docker-compose up -d
```

**Note: If you are NOT running on Apple M1 chips, comment out the `platform` line in the `docker-compose.yml` file to target your own processor architecture**

### Seed the database

```bash
npm run seed
```

## Running on your machine

In one terminal run `npm start api` and in another serve whatever frontend you want to work on: .e.g `npm start dogs` or `npm start dogs-react`.

## Fetching from the API

The API is available on `localhost:3333/api`, so all requests to that will hit the API.

## Tests

Tests for your application can be ran by running `npm run test --project <app name>`

(You can also run tests for all apps using `npm run test:all`)

If you want to run tests in watch mode you can do:

```bash
npm run test --project dogs -- --watch
npm run test:all -- --watch
```
