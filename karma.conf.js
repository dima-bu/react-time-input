module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: ['tests/builder.js'],
        browsers: ['PhantomJS'],
       // browsers: ['chrome'],
        preprocessors: {
            // add webpack as preprocessor
            'tests/builder.js': ['webpack']
        },
        webpack: {
            entry: ['babel-polyfill'],
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
        },
        plugins: [
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
        ],
    })
};