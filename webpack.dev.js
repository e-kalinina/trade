const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 9000,
        static: path.resolve(__dirname, 'dist'),       
    },
});
