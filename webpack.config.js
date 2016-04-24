var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'./example/index.jsx' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'example/bundle'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	devServer: {
		contentBase: "./example/bundle",
			noInfo: true, //  --no-info option
			hot: false,
			inline: false
		},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
