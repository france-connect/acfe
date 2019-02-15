module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_index.scss";`
      }
    }
  }
};
