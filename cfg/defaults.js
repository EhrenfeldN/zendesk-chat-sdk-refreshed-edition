'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const srcPath = path.join(__dirname, '/../src');
const vendorPath = path.join(__dirname, '/../vendor');
const dfltPort = 8000;

module.exports = {
    rules: [
        {
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            use: [
                {
                    loader: 'url-loader'
                }
            ]
        },
        {
            test: /\.(mp4|ogg|svg)$/,
            loader: 'file-loader'
        }
    ]
};
