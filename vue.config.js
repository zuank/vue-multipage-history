module.exports = {
    pages: {
        app: {
            // 入口文件
            entry: './src/pages/app/main.js',
            // 模版文件
            template: 'public/index.html',
            // 输出文件名
            filename: 'app/index.html',
            chunks: ['app']
        },
        other: {
            // 入口文件
            entry: './src/pages/other/main.js',
            // 模版文件
            template: 'public/index.html',
            // 输出文件名
            filename: 'other/index.html',
            chunks: ['other']
        }
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{
                from: /^\/app/, to: '/app/index.html',
            },{
                from: /^\/other/, to: '/other/index.html',
            }]
        }
    }
}