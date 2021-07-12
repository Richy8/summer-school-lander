module.exports = {
    lintOnSave: false,
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "../~gradely_asset_store/src/basic_scss/_colors.scss"; @import "../~gradely_asset_store/src/basic_scss/_breakpoints.scss"; @import "../~gradely_asset_store/src/basic_scss/_mixins.scss";`,
        },
      },
    },
  };
  