module.exports = {
  style: {
    postcss: {
      plugins: [
        require("@tailwindcss/postcss7-compat"),
        require("autoprefixer"),
      ],
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({
          webpackConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths },
        }) => {
          webpackConfig.module.rules.push({
            test: /react-spring/,
            sideEffects: true,
          });

          return webpackConfig;
        },
      },
    },
  ],
};
