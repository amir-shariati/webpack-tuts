const babelMinify = require('babel-minify-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        main: './src/main.js',
    },
    output: {
        path:path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 21000,
                            name: 'images/[name].[hash].[ext]'
                        }
                    },
                    "image-webpack-loader"
                    ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        // new babelMinify()
    ],

};