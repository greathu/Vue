const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack")
var VueloaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        port: 4000,
        contentBase: "src",
        hot: true
    },
    plugins: [new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html"
        }), new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new VueloaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', "less-loader"]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "url-loader?limit=3450&name=[hash:8][name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: "url-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    /* options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    } */
                }
            }, {

                test: /\.(vue)$/,
                use: "vue-loader"
            },
        ]
    },
    resolve: {
        // 起别名  可以设置包导入的别名
        alias: {
            vue$: "vue/dist/vue.js"
        }
    },
    mode: 'development'
}