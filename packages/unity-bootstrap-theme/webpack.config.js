const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const pkg = require("./package.json");

const env = process.env.NODE_ENV || "development";
const mode = env === "production" ? "production" : "development";

const paths = {
  js: path.resolve(__dirname, "src/js"),
  css: path.resolve(__dirname, "dist/css"),
  img: path.resolve(__dirname, "dist/img"),
  imgsrc: path.resolve(__dirname, "src/img"),
  sass: path.resolve(__dirname, "src/scss"),
  node: path.resolve(__dirname, "node_modules"),
  distJS: path.resolve(__dirname, "dist/js"),
};

const devtool = "source-map";

/* */
const jsConfig = {
  name: "JS",
  mode,
  devtool,
  entry: {
    "bootstrap-asu": [path.resolve(paths.js, "index.js")],
    "googleAnalytics": path.resolve(paths.js, "googleAnalytics.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js",
    library: "bootstrapASU",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
    pathinfo: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals(), "commonjs sharp"],
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: env,
      BUNDLE_NAME: pkg.name.substr(1),
      BUNDLE_VERSION: pkg.version,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: paths.imgsrc, to: paths.img },
        {
          from: path.resolve(
            paths.node,
            "bootstrap",
            "dist",
            "js",
            "bootstrap.bundle.min.js"
          ),
          to: paths.distJS,
        },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimize: env === "production",
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: true,
        },
      }),
    ],
  },
};

const cssConfig = {
  name: "CSS and Images",
  mode,
  devtool,
  entry: [path.resolve(paths.sass, "unity-bootstrap-theme.scss")],
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext][query]",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("..", "dist", "css", "unity-bootstrap-theme.css"),
    }),

    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //       autoprefixer()
    //     ]
    //   }
    // }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              // importLoaders: 1,
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          /* There is an issue with Sass changing image urls
            .bg.morse-code-white {
              background-image: url(../../.tmp/1fbe75652170f51c1e1d.png);
            }
          */
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ].filter(Boolean),
  },
};
module.exports = [jsConfig, cssConfig];
