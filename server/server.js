const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 5000;
const BoxSDK = require('box-node-sdk');

// Process Box credentials
const sdkConfig = require('../config_from_box.json');
const sdk = BoxSDK.getPreconfiguredInstance(sdkConfig);
const serviceAccountClient = sdk.getAppAuthClient('enterprise');

// Set up express
app.use(express.static(publicPath));

// Return index.html at the root
app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

// Provide an endpoint which returns a token
app.get('/token', (req, res) => {
	let accessToken = serviceAccountClient.exchangeToken(['base_explorer', 'item_upload'])
		.then((tokenInfo) => { res.send({
			token: tokenInfo.accessToken
		})
	});
})

// Print some text when server is up successfully
app.listen(port, () => {
	console.log('Server is up!');
});
