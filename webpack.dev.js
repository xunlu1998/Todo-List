// 使用node的path模块
const path = require('path')
// 引入 clean-webpack-plugin 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入 html-webpack-plugin 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 导入webpack
const webpack = require('webpack')


module.exports = {
    //打包模式 development开发模式——方便理解代码 production模式更快
    mode: 'production',
    // 打包的入口
    entry: './src/main.js',
    // 配置 SourceMap 方便定位error
    devtool: 'eval',
    // devServer配置实时更新
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        // 开启模块热加载
        hot: true
    },
    // 打包的出口
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 打包规则    配置以解决npm run build不能加载.vue模块
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
            }
        ]
    },
    plugins: [
        // 实例化插件  请确保引入这个插件
        new VueLoaderPlugin(),
        //以根目录下 index.html 文件为模板在打包后 自动在dist包下创建index.html文件
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}

