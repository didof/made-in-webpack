const { merge } = require('webpack-merge');

const commonConfig = require('./configs/webpack/webpack.common');

module.exports = (mode) => {
	console.log('env: ' + mode);
	return merge(commonConfig, require('./configs/webpack/webpack.' + mode), {
		mode,
	});
};
