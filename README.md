# Tap Room 
#### By: Nitun Datta
_July 10, 2020_

## Description
_This app allows a user to add kegs to the keg list and see the master list. A user can also "sell a pint" and reduce the quantity of a keg._

## Component Tree
![Diagram](./public/tapRoomRedux.png)

## Setup/Installation
_Setup assumes use of Git version control_

In terminal, navigate to desktop or other directory and clone the repository by typing:
  * git clone https://github.com/nitundatta8/redux-tap-room.git

## Available Scripts

In the project directory, run `npm install` to install all dependencies.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Specification
   * As user cab add a new keg to a keg list.
   * A user can see a list/menu of all available kegs including name, brand, price and      alcoholContent .
   * A user can click on a keg to see its detail page.
   * As can see how many pints are left in a keg.
   * A user able to click a button next to a keg to sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.

## Technologies Used
  * Git
  * React
  * Javascript
  * npm
  * Webpack
  * JSX
  * Html
  * CSS

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
