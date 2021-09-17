const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    entry: "./src/index",
    mode: "development",
    devtool: "hidden-source-map",
    output: {
        publicPath: "http://localhost:3003/",
        clean: true
    },
    resolve: {
        extensions: [
            ".jsx",
            ".js",
            ".json",
            ".css",
            ".scss",
            ".jpg",
            "jpeg",
            "png"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: "url-loader"
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"]
                }
            },
            {
              test: /\.less$/,
              use: [{
                loader: "style-loader" // creates style nodes from JS strings
              }, {
                loader: "css-loader" // translates CSS into CommonJS
              }, {
                loader: "less-loader" // compiles Less to CSS
              }]
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "new_app",
            filename: "remoteEntry.js",
            exposes: {
				"./Layout": "./src/components/Layout/index.jsx",
            },
            shared: {
                react: {
                    singleton: true
                },
                moment: {
                    singleton: true
                },
                antd: {
                  singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}