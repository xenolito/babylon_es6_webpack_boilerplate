const path = require("path");
const outputDir = path.resolve(__dirname, "build");
const TerserPlugin = require("terser-webpack-plugin");

console.log("==> WEBPACK CONFIG: PRODUCTION");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "app/src"),
    output: {
        path: outputDir + "/js/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
                loader: "babel-loader",
                query: {
                    compact: true,
                    presets: [["es2015", { modules: false }]]
                }
            }
        ]
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
};
