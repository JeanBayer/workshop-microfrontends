const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "techschool";
  const projectName = "root-config";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName,
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    output: {
      filename: `${orgName}-${projectName}.js`,
      clean: true,
      path: path.resolve(process.cwd(), `dist`),
      libraryTarget: "system",
      uniqueName: projectName,
      devtoolNamespace: `${projectName}`,
      publicPath: "",
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
         templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "_redirects", to: "", noErrorOnMissing: true },
        ],
      }),
    ],
  });
};
