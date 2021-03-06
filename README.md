# Handy App Frontend

# Handy-App

You can find the deployed project at [https://handyapp.netlify.com].

## Contributors

🚫Add contributor info below, make sure add images and edit the social links for each member. Add to or delete these place-holders as needed

|                                       [Student 1](https://github.com/)                                        |                                       [Student 2](https://github.com/)                                        |                                       [Student 3](https://github.com/)                                        |                                       [Student 4](https://github.com/)                                        |               
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/guillsav)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/tjforeman)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/sharanjitsandhu)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/Spencer-M24)                       |            
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/guillsav)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tjforeman)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/sharanjitsandhu)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Spencer-M24)           |            
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ 

<br>
<br>

🚫 4️⃣ Optional examples of using images with links for your tech stack, make sure to change these to fit your project

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

🚫 more info on using badges [here](https://github.com/badges/shields)

## Project Overview

 [Trello Board] https://trello.com/b/hLXT2CaQ/labs-13-handy-app

 [Product Canvas] https://docs.google.com/document/d/1LNHkSy6CoIkgM2C1SoIKxNyv6pDoZZJVjeMRSrfh7Qo/edit#heading=h.1jaf6eug9n0k

 [UX Design files] https://invis.io/8FRGN9J6CK5


Handy App allows homeowners to quickly and easily find home service professionals, (i.e: contractors, plumbers, electricians), to perform household repairs and maintenance


###  Key Features

-    The ablity for a Homeowner to add a project.
-    The ablity for a Service Provider to see a list of projects related to their skills and place a bid
-    The ability for a Homeowner to view a list of bids, and accept the one they like the best.
-    The ablity for a Homeowner to pay via stripe, for the project.
-    The ability for a Service Provider to collect payment via stripe connect. 


### Front end built using:

- Auth0
- Axios
- Cloudinary-React
- Jquery
- Js-Convert-Case
- material-ui-core
- material-ui-icons
- material-ui-styles
- Moment
- React
- React-Image-Lightbox
- React-Loader-Spinner
- React-Number-Format
- React-Redux
- React-Router
- React-Router-Modal
- React-Select
- React-Stripe-Checkout
- Redux
- Redux-Logger
- Redux-Thunk


-    React and all dependencies that go with it were used to make a scalable single page application that loads and displays content in a reactive manner. With syntax and functionality better than alterntives such as Angular or Vue. 

-    Material UI was used to style and help make our application responsive. It's styles were cleaner and gave a better look than others such as react-strap and bootstrap.

-    Redux was used as a state management tool. Making it so the DOM always had the correct content rendering at the correct time for seamless transtions between database calls. 

-   Axios was used to make API calls. We chose it over the alternatives such as fetch because Axios has a built in ablity to translate JSON data into javascript objects. Making the data easier to work with on our React application.


#### Front end deployed to Netlify

#### [Back end] https://github.com/labs13-handy-app/Backend built using:

- cloudinary
- cors
- cross-env
- dotenv
- express
- express-jwt
- helmet
- jsonwebtoken
- jwks-rsa
- jwt-decode
- knex
- knex-cleaner
- morgan
- multer
- pg
- sqlite3
- stripe

-    The Internal API was built using Express. Express allowed us to build a fully functional Node.js API with greater speed and functionality then some of the alternatives. 

-    Our Database was built using Knex. This allowed us to build our SQL queries in a safe and secure manner. It allowed us to migrate, seed, and maintain data with both Postgres while in production and sqlite3 while in development and testing.

-    JSONWebToken was used to decode and help put users in our database based on the tokens sent from the front-end via auth0. This helped us build out our API as well as restrict our endpoints. 


# APIs

## Auth0

Auth0 provides authentication and authorization as a service, You can connect any application (written in any language or on any stack) to Auth0 and define the identity providers you want to use (how you want your users to log in). hook it up to your app. Now each time a user tries to authenticate, Auth0 will verify their identity and send the required information back to your app.

## Stripe & Stripe-Connect

Stripe is a technology company based in San Francisco, California. Its software allows individuals and businesses to make and receive payments over the Internet. Stripe provides the technical, fraud prevention, and banking infrastructure required to operate online payment systems.

## Cloudinary

 Cloudinary provides a cloud-based image and video management solution. It enables users to upload, store manage, manipulate and deliver images and video for websites and apps



Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:


REACT_APP_API_URL=http://localhost:5000
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000/callback
REACT_APP_AUTH0_DOMAIN=dev-t67d1inm.auth0.com
REACT_APP_AUTH0_CLIENTID=C2qEif6X9XtPtOJEgwUbPLG3E3Tmgaro
REACT_APP_CLOUDINARY_NAME=sandhu
REACT_APP_CLOUDINARY_PRESET=clyrl6ow
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_WrFQYte9DKhuIhdOUaiKxcW100UafZVNWY

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |


# 4️⃣ Installation Instructions

🚫explain how to install the required dependencies to get this project up and running with yarn and NPM

## Other Scripts

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](🚫_link to your backend readme here_) for details on the backend of our project.
