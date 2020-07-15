const path = require("path");
const outputDir = path.resolve(__dirname, "build");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "app/src"),
    devtool: "inline-source-map",
    output: {
        path: outputDir + "/js/",
        filename: "bundle.js"
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
