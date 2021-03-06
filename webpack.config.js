const path = require("path");
const outputDir = path.resolve(__dirname, "build");

console.log("==> WEBPACK CONFIG: DEVELOPMENT");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "app/src"),
    devtool: "inline-source-map",
    output: {
        path: outputDir + "/js/",
        filename: "main.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.js|jsx$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    }
};
