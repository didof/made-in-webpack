require('dotenv').config({ path: './configs/.env' });
const { merge } = require('webpack-merge');

const parts = require('./webpack.parts');

module.exports = merge([
	parts.devServer({
		host: process.env.HOST,
		port: process.env.PORT,
	}),
]);
