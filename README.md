# DOGS!

## About

Welcome to the Wehype Dogs Assignment! We have prepared a Dog API for you that lists all our nice dogs, available at `http://localhost:3333/api/dogs`. Your task is to create a frontend that, given a Dog ID, will display all related dogs sorted by how related they are. A dog is related to another if their breeds are the same and their age is no more than 3 years apart. The closer they are in age the more related they are, they are also more related if they share a gender.

### Example

|name|breed|age|gender
|--|--|--|--|
Bob|Labrador|5 years|Male
Duke|Labrador|3 years|Male
McGee|Labrador|1 years|Male
Lassie|Shepherd|2 years|Female
Scoot|Shepherd|4 years|Male

In the example above, `Bob` and `Duke` are related since they are both Labradors, their age difference is only two years (5 - 3). For an added bonus, they are both male so they are a bit more related. `Duke` is also related to `McGee` since they are also both Labradors and their age difference is only one year (2 - 1), however `Bob` and `McGee` aren't related since their age difference is four (5 - 1).

`Lassie` and `Scoot` are also related, since they are both Shepherds and their age difference is 2 (4 - 2), but they would be less related than Lassie and another Female Shepherd.

So, given `Duke` in the example above, the related dogs would be, in order, [`Mcgee`, `Bob`].

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
