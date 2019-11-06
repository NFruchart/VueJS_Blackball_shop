module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: []
    }
  },
  devServer: {
    proxy: "http://localhost:8080"
  }
};
