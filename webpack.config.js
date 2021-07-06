const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
    entry:  ['./src/timeInput.jsx'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        libraryTarget: 'umd',
        library: 'react-time-input',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        port: 1000,
        hot: true,
        open: true,
        historyApiFallback: true
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
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            favicon: false,
            showErrors: true,
            cache: true,
            template: join(__dirname, 'example/index.html')
        })
    ]
};