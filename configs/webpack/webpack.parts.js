exports.devServer = ({ host, port } = { host: 'localhost', port: '8080' }) => ({
	compress: true, // gzip compression for everything served
	open: 'chrome', // open the browser once server has been started :false|true|chrome
	historyApiFallback: true,
	stats: 'errors-only', // :none|errors-only|minimal|normal|verbose
	overlay: {
		warnings: true,
		errors: true,
	}, // shows full-screen overlay with errors or warnings :true|object
});
