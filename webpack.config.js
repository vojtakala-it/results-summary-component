const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        open: true,
        host: "localhost"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html"
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset"
            },
/*            {
                test: /\.json$/i,
                type: 'javascript/auto',
                use: 'json-loader'
            },*/
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ]
    }
};

module.exports = () => {
    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'img' },
            ]
        })
    )

    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new MiniCssExtractPlugin());


    } else {
        config.mode = "development";
    }
    return config;
};
