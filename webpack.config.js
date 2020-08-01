const { merge } = require('webpack-merge');

const commonConfig = require('./configs/webpack/webpack.common');

module.exports = (mode) => {
	const config = require('./configs/webpack/webpack.' + mode);
	return merge(commonConfig, config, {
		mode,
	});
};
