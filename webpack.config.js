const babelMinify = require('babel-minify-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        main: './src/main.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // new babelMinify()
    ],
    mode: "development"
};