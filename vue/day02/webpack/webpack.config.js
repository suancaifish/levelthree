const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// import img from './image.png';
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 匹配后缀为css的文件
                test: /\.html|htm$/,
                // 用两个加载器style-loader和css-loader
                use: ['html-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             // outputPath: 'img/'
            //         }


            //     }]
            // },
            // {
            //     test: /\.js$/,
            //     // 除了node_modules和bower_components之外
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000000
                        // mimetype: 'image/png',
                        // fallback: 'responsive-loader'
                    }
                }]
            }
        ]
    },
    plugins: [
        // new UglifyJsPlugin(),
        // new HtmlWebpackPlugin({
        //     title: '首页',
        //     minify: true
        // })
    ]

};