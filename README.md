# Basic Login Frontend

## Description
This project is the frontend portion of a basic login application. It calls a local api project [basic-login-backend](https://github.com/mchadds/basic-login-backend)

## Functionality
- Users can login from the main login page
- The login form input fields have error handling for required fields and certain field specifications
- Users are informed of a successful or unsuccessful login

## Tools & Technologies
- [React](https://reactjs.org/) Javascript library for building user interfaces
- [Axios](https://axios-http.com/docs/intro) A promise-based HTTP Client for node.js
- [Material UI](https://mui.com/) React UI Library
- [Formik](https://formik.org/docs/overview) Form UI and state management

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



# Shredata


## Description
Shredata (Snow Intelligence) is a project that allows users to compare recent snowfalls of their favourite mountains. Have you ever wondered which hill to go to based on the best new snow? Checking every single resort website for the snow report is time consuming (and inconvenient). Shredata has all this information in one place (with daily updates) so you can find the most snow with ease! This idea was born out of a passion for being outside and utilizing the data at your fingertips.

## Demo
This brief gif demonstrates the power and simplicity of the Shredata application:

![Demo Video](https://github.com/mchadds/Shredata/blob/master/imgs/DemoApp.gif)


## Functionality
- Users can select a snowfall interval (or base) by clicking the blue interval buttons at the top of the application
- This will cause the snowfall information for the selected interval of each resort to appear in the bar chart
- The circle markers on the map (representing each resort) will render with a radius related to the snowfall from the selected interval
- The circle markers include a tooltip containing the resorts name and the snowfall value for the selected interval

## Tools
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Cloud database instance
- [Node.js](https://nodejs.org/en/) JavaScript runtime environment
- [Express.js](https://expressjs.com/) Framework for API
- [React.js](https://reactjs.org/) Front end design

## Languages
- [TypeScript](https://www.typescriptlang.org/)
- [Python](https://www.python.org/) For webscraping snowfall data


## Happy Shredding!
