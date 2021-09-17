module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "./src/assets/scss/_variables.scss";
            @import "./src/assets/scss/main.scss";
            `,
      },
    },
  },
};
