const webpack = require('webpack')
const path = require('path')

module.exports = {
	mode: 'development',
	entry: [
		__dirname + '/index.jsx' // Your appʼs entry point
	],
	output: {
		publicPath: '/',
		filename: 'example-bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		open: true,
		static: path.join(__dirname),
		compress: true,
		liveReload: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						"presets": [
							"@babel/preset-env",
							"@babel/preset-react"
						],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};
