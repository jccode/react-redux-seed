
const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: [
        'webpack-hot-middleware/client?reload=true'
    ],

    resolve: {
        modulesDirectories: [path.join(__dirname, '../src/common')]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            },
            __DEVELOPMENT__: true
        })
    ]
};

