/**
 * Created by yinwk on 2017/5/30.
 */
const webpack = require("webpack");
const path = require("path");
const DLL_DIR = path.resolve(__dirname, "../dll");
const ROOT_DIR = path.resolve(__dirname, "../..");

const reduxMine_dll_config = {
    entry: {
        vendor: ["react", "react-dom", "react-router", "react-redux", "redux", "babel-polyfill", "whatwg-fetch"]
    },
    output: {
        publicPath: "/",
        path: DLL_DIR,
        filename: "[name].dll.js",
        library: "[name]_[chunkhash]"
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DllPlugin({
            path: path.join(DLL_DIR, "[name]_manifest.dll.json"),
            name: "[name]_[chunkhash]",
            context: ROOT_DIR
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            comments: false
        }),
        new webpack.optimize.DedupePlugin()
    ]
};

module.exports = reduxMine_dll_config;