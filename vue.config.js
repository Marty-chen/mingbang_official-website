module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'? '/mingbang/' : '/',
  devServer: {
    open: true,
    port: 8083,
    // proxy: {
    //   '/api': {// 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，修改配置如下
    //     target: '',
    //     secure: false
    //   }
    // }
  },
  
   // 生产环境是否生成 sourceMap 文件
   productionSourceMap: false //代码可读性
}