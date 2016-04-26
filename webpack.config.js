var path = require("path");

module.exports = {
    entry:  ['babel-polyfill', './src/timeInput.jsx'],
    include: [path.resolve(__dirname, 'src')],
    output: {
        filename:'index.js',
        libraryTarget: 'umd',
        library: 'react-time-input',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['', '.js'],
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