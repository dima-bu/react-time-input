var path = require("path");

module.exports = {
    entry:  ['./src/timeInput.jsx'],
    output: {
        filename:'index.js',
        libraryTarget: 'umd',
        library: 'react-time-input',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
        noParse: []
    },
    resolveModules: {
        modulesDirectories: ['node_modules'],
    }
};