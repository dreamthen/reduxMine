/**
 * Created by yinwk on 2017/5/30.
 */
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "..");
const APP_DIR = path.resolve(__dirname, "../scripts");
const DLL_DIR = path.resolve(__dirname, "../dll");
const BUILD_DIR = path.resolve(__dirname, "../build");
const MANIFEST = require(path.resolve(__dirname, DLL_DIR + "/vendor_manifest.dll.json"));

const PORT = "9030";

const AUTO_PREFIXER_BROWSERS = [
    "Android >= 4",
    "iOS >= 7",
    "Chrome >= 35",
    "Firefox >= 31",
    "Explorer >= 9",
    "Opera >= 12",
    "Safari >= 7.1"
];

const reduxMine_dev_config = {
    devtool: "eval",
    entry: {
        index: APP_DIR + "/index.js"
    },
    output: {
        publicPath: "/",
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                include: [
                    APP_DIR,
                    DLL_DIR
                ],
                loaders: ["react-hot", "babel"]
            },
            {
                test: /\.css$/,
                loaders: ["style", "css", "postcss"]
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                loader: "url-loader?limit=10000"
            }
        ]
    },
    postcss: [autoprefixer({
        browsers: AUTO_PREFIXER_BROWSERS
    })],
    resolve: {
        root: ROOT_DIR
    },
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DllReferencePlugin({
            manifest: MANIFEST,
            context: ROOT_DIR
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            comments: false
        }),
        new HtmlWebpackPlugin({
            publicPath: "/",
            filename: "index.html",
            template: ROOT_DIR + "/index.html",
            chunks: ["index"]
        })
    ],
    devServer: {
        host: "0.0.0.0",
        port: PORT,
        proxy: {
            "/reduxMine/": {
                target: "http://",
                secure: false,
                pathRewrite: {"/reduxMine/": ""}
            }
        }
    }
};

module.exports = reduxMine_dev_config;

