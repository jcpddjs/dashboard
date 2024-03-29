module.exports = {
  devServer:{
      proxy:{
        "/api":{
          target: "http://localhost:5000",
          ws: true, // 是否启用websockets
          changOrigin: true, //开启代理,
          pathRewrite: { // 重写代理规则，/api开头，代理到/
            '^/api': '/'
            // 例：/api/user/login代理到
            // http://localhost:5000/user/login
          }
        }
      }
  }
}