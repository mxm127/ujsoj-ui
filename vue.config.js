const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  productionSourceMap:false,
  lintOnSave: false,
  chainWebpack(config) {
    config.plugin("monaco").use(new MonacoWebpackPlugin());
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xx.xx.xx.xx:xx',
        changeOrigin: true, // 解决跨域问题
      }
    },
    // historyApiFallback: true // 使用了history默认会把#去掉，刷新还是原页面
  }
});
