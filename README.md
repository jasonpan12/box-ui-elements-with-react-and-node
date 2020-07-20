# Box + React + Node
This app was created to provide a boilerplate example of the Box Content Explorer built within a React.JS app integrated with a Node.JS express server

# How it works
* React app running on localhost:3000
* Express app running on localhost:5000 (or any unused port)
* When the header component mounts, an API call is made to /token, served by Express
* The express app uses a config file provided by the Developer Console to return a token
* Once the state is updated with the token, the UI Element is rendered

# Run this boilerplate
* Clone the repo
* Add a [configuration file](https://developer.box.com/guides/authentication/jwt/with-sdk/) `config_from_box.json` to the application root
* `yarn install`
* `yarn global add nodemon`
* In one tab, `nodemon server/server.js`
* In another tab, `yarn start`

# Create your own Box+React+Node boilerplate
* Run create-react-app
* Import the Content Explorer component, making sure to install the peer dependencies
* Create an Express app, with one route serving index.html and the other route returning a downscoped access token (server/server.js)
* Have the app run on any port not 3000, as create-react-app's `yarn start` automatically uses port 3000
* Configure the React app to make a request to the token route (HeaderAndAuth.js)
* Configure package.json to proxy requests to localhost:$port (package.json)
* Use `nodemon server/server.js` to start the Express server
* Use `yarn start` to start the React app

# Functionality Used
* create-react-app
* ES6 React w/ Hooks (useState and useContext)
* CSS with node-sass
* Node.JS with Express
* [Box Platform](https://developer.box.com)
* [Box UI Elements](https://github.com/box/box-ui-elements)
* [Box Node SDK](https://github.com/box/box-node-sdk)

![boxReactNode](./screenshots/boxReactNode.gif)
