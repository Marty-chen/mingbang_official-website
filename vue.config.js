module.exports = {
  devServer: {
    open: true,
    port: 8083,
    // proxy: {
    //   '/api': {// 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，修改配置如下
    //     target: '',
    //     secure: false
    //   }
    // }
  }
}