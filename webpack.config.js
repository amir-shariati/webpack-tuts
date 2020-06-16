module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: "output.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: "development"
};