// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/styles.scss";',
      },
    },
  },
};
