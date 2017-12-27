var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './ES6_Variables/variables.js',
    output: {
        // path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};