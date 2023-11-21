
# REST Rant AWS

## Description

REST Rant AWS is a platform built to manage and deploy RESTful APIs on AWS efficiently. This application simplifies the process of creating, configuring, and deploying REST APIs using AWS services. It provides a user-friendly interface to manage API endpoints, configure AWS resources, and monitor API usage.

This project is of a website to create/update/delete favorite or not so favorite restaurants as well as create/update/delete reviews/

## Technologies

- Node.js
- Express.js
- Postres
- AWS Beanstock
- AWS API Gateway

## Demo

The depolment of this project has been deleted and therefore and demo is not feasible.

## Technical Information

PORT=5000
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=rest_rant

- Follow the Airbnb JavaScript Style Guide for consistency.
- Use ES6+ syntax for JavaScript code.
- Comment code sections effectively.

### API (http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /places                              | Places index page                         |
| POST   | /places                              | Create new place                          |
| GET    | /places/:placeId                     | Details about a particular place          |
| PUT    | /places/:placeId                     | Update a particular place                 |
| DELETE | /places/:placeId                     | Delete a particular place                 |
| POST   | /places/:placeId/comments            | Create a comment about a particular place |
| DELETE | /places/:placeId/comments/:commentId | Delete a comment about a particular place |

#### Frontend

1. Clone the repository: `git clone https://github.com/ACGreve/rest-rant-aws.git`
2. Change directory to the frontend folder: `cd frontend`
3. Install dependencies: `npm install`
4. Start the application: `npm start`

#### Backend

1. Clone the repository: `git clone https://github.com/ACGreve/rest-rant-aws.git`
2. Change directory to the backend folder: `cd backend`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Issues

- CSS visablilty unsuccessful upon deplyment
