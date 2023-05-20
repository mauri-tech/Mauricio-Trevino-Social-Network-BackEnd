# Mauricio-Trevino-Social-Network-BackEnd

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Getting Started](#getting-started)
- [Models](#models)
- [API Routes](#api-routes)
- [Installation](#installation)
- [Author](#author)

## Description
This project is a back-end API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. 

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured 

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


## Getting Started
This section provides details about the API structure, including models and routes.

### Models
1. User
2. Thought
3. Reaction

### API Routes
```bash
/api/users
/api/users/:userId/friends/:friendId
/api/thoughts
/api/thoughts/:thoughtId/reactions
```

Full descriptions of models and API routes can be found in the project repository.

## Installation
To install necessary dependencies, run the following command:

```bash
npm install
```


## Author
If you have any questions, please contact the author:

- Github Profile: [mauri-tech](https://github.com/mauri-tech)
- E-mail: Mauricio.trevinon91@gmail.com

For more information and functionality refer to the [GitHub Repo](https://github.com/mauri-tech/Mauricio-Trevino-Social-Network-BackEnd) for this project.
