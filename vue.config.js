const UglifyPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    lintOnSave: false,
    devServer: {
        hot: true,
        port: 8999, //  端口号的配置
        open: true // 自动打开浏览器
    },
    configureWebpack: config => {
        // eslint-disable-next-line eqeqeq
        if (process.env.NODE_ENV == "production") {
            // 为生产环境修改配置
            config.mode = "production";
            // 将每个依赖包打包成单独的js文件
            const optimization = {
                minimizer: [
                    new UglifyPlugin({
                        uglifyOptions: {
                            warnings: false,
                            compress: {
                                drop_console: true,
                                drop_debugger: false,
                                pure_funcs: ["console.log"]
                            }
                        }
                    })
                ]
            };
            Object.assign(config, {
                optimization
            });
        } else {
            // 为开发环境修改配置
            config.mode = "development";
        }
    }
};
