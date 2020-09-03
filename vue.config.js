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
        teamFightTactics: {
            // 入口文件
            entry: './src/pages/teamFightTactics/main.js',
            // 模版文件
            template: 'public/index.html',
            // 输出文件名
            filename: 'teamFightTactics/index.html',
            chunks: ['teamFightTactics']
        }
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{
                from: /^\/app/, to: '/app/index.html',
            },{
                from: /^\/teamFightTactics/, to: '/teamFightTactics/index.html',
            }]
        }
    }
}
