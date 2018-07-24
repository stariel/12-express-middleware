[![Build Status](https://travis-ci.com/stariel/12-express-middleware.svg?branch=master)](https://travis-ci.com/stariel/12-express-middleware) 12: Express Middleware
======

## Lab 11 - Express Server with Cats and Dogs

This server uses a model for cats to accomodate the following endpoints:

* **`/api/vi/cats`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new cat
* `GET` request
 * pass `/:id` as a route parameter to **GET** a specific cat (as JSON)
* `DELETE` request
 * pass `/:id` as a route parameter to **DELETE** a specific cat (as JSON)
 * this should return a 204 status code with no content in the body

This server uses a model for dogs to accomodate the following endpoints:

* **`/api/vi/dogs`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new dog
* `GET` request
 * pass `/:id` as a route parameter to **GET** a specific dog (as JSON)
* `DELETE` request
 * pass `/:id` as a route parameter to **DELETE** a specific dog (as JSON)
 * this should return a 204 status code with no content in the body