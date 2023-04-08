# WikiAPI
This is a simple RESTful API built using Node.js, Express, and MongoDB. It provides basic CRUD (Create, Read, Update, Delete) functionality for a Wiki application.

Technologies Used

The following technologies were used to develop this web application:

Node.js

ExpressJS

EJS

Mongoose

MongoDB

Postman


Requirements

To run this application on your local machine, you will need to have the following installed:

Node.js

MongoDB

Postman

API Endpoints

The following API endpoints are available:

GET /articles

Retrieve all articles in the database.

POST /articles

Create a new article. The request body should contain the following fields:

title (string, required): the title of the article

content (string, required): the content of the article

GET /articles/:articleTitle

Retrieve a specific article by its title.

PUT /articles/:articleTitle

Update a specific article by its title. The request body should contain the new values for the following fields:

title (string, optional): the new title of the article

content (string, optional): the new content of the article

PATCH /articles/:articleTitle

Update a specific article by its title. The request body should contain the new values for one or more of the following fields:

title (string, optional): the new title of the article

content (string, optional): the new content of the article

DELETE /articles/:articleTitle

Delete a specific article by its title.
