const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/public/js/script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Procesar archivos JS con Babel
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/, // Procesar archivos CSS
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ],
    mode: "development",

    // 🔥 Servidor de desarrollo con recarga automática 🔥
    devServer: {
        static: "./dist", // Carpeta desde donde se sirven los archivos
        hot: true, // Habilita Hot Module Replacement (HMR)
        open: true, // Abre el navegador automáticamente
        port: 3000 // Usa el puerto 3000
    }
};
