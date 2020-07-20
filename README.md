# Box + React + Node
This app was created to provide a boilerplate example of the Box Content Explorer built within a React.JS app integrated with a Node.JS express server

# Run this boilerplate
* Clone the repo
* `yarn install`
* In one tab, `nodemon server/server.js`
* In another tab, `yarn start`

# Create your own Box+React+Node boilerplate
* Run create-react-app
* Import the Content Explorer component, making sure to install the peer dependencies
* Create an Express app, with one route serving index.html and the other route returning a downscoped access token (server/server.js)
** Have the app run on any port not 3000, as create-react-app's `yarn start` automatically uses port 3000
* Configure the React app to make a request to the token route (HeaderAndAuth.js)
* Configure package.json to proxy requests to localhost:$port (package.json)
* Use `nodemon server/server.js` to start the Express server
* Use `yarn start` to start the React app

# Functionality Used
* create-react-app
* useState and useContext hooks
* CSS with node-sass
* Node.JS with Express
* [Box Platform](https://developer.box.com)
* [Box UI Elements](https://github.com/box/box-ui-elements)
* [Box Node SDK](https://github.com/box/box-node-sdk)

![boxReactNode](./screenshots/boxReactNode.gif)
