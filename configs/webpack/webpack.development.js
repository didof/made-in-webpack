require('dotenv').config({ path: './configs/.env' });
const { merge } = require('webpack-merge');

const parts = require('./webpack.parts');

// plugins
const SystemBellPlugin = require('system-bell-webpack-plugin');

module.exports = {
	plugins: [new SystemBellPlugin()],
	devServer: parts.devServer({
		host: process.env.HOST,
		port: process.env.PORT,
	}),
};
