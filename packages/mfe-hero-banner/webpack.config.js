const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require("dotenv-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "techschool",
    projectName: "mfe-hero-banner",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  const cssModuleRule = defaultConfig.module.rules.find(
    (rule) => rule.test && rule.test.toString() === "/\\.module\\.css$/i"
  );

  if (cssModuleRule) {
    const cssLoaderUseEntry = cssModuleRule.use.find(
      (useEntry) =>
        typeof useEntry === "object" &&
        useEntry.loader &&
        useEntry.loader.includes("css-loader")
    );

    if (cssLoaderUseEntry) {
      cssLoaderUseEntry.options = {
        ...cssLoaderUseEntry.options,
        modules: {
          localIdentName: "[name]__[local]___[hash:base64:5]",
        },
      };
    }
  }

  return merge(defaultConfig, {
    externals: {
      "@techschool/params-shell": "@techschool/params-shell",
    },
    plugins: [new Dotenv()],
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
