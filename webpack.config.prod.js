const path = require("path");
const outputDir = path.resolve(__dirname, "build");
const TerserPlugin = require("terser-webpack-plugin");

console.log("==> WEBPACK CONFIG: PRODUCTION");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "app/src"),
    output: {
        path: outputDir + "/js/",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, "node_modules"),
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
};
