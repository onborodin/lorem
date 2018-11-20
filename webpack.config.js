
'use strict'

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')


module.exports = {
    plugins: [
        new ProgressBarPlugin({
            width: 60
        }),
        new FriendlyErrorsPlugin({
             clearConsole: false
        }),
        new WriteFilePlugin()
    ]
}

