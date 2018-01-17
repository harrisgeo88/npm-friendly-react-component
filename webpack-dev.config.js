var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './app/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader', //This uses url-loader to add small files inlined as DataUrls (<10Kb) or file-loader, each file as separate request
                options: {
                    limit: 10000000,// why it doesn't work with file-loader
                    name: "./assets/[name].[ext]"
                },
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8888
    }
}