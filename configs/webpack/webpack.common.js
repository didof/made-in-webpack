const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack demo',
		}),
	],
};
