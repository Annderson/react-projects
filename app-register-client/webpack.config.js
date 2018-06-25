const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                loader: 'file-loader'
            }
            /*,
                        {
                            test: /\.png|jpg$/,
                            include: __dirname + '/img',
                            loader: ['file-loader']
                        }*/
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.gif', '.png', 'jpg']
    },
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin('app.css')
    ],
    devServer: {
        port: 8585,
        contentBase: './public',
        hot: true
    }
};