const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const mode = process.env.NODE_ENV || "development"; // Definir el modo correctamente

module.exports = {
    entry: "./src/public/js/script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true // 💡 Limpia `dist/` antes de cada compilación para evitar archivos viejos
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
                use: [
                    MiniCssExtractPlugin.loader, // ✅ Extraer CSS en un archivo separado
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // borra los archivos en dist antes de compilar
        new HtmlWebpackPlugin({
            template: "./src/views/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css" // ✅ Asegura que `styles.css` se genere en `dist/`
        })
    ],
    mode,

    // 🔥 Servidor de desarrollo con escritura en disco 🔥
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            watch: true // ✅ Observar cambios en `dist/`
        },
        hot: true, // ✅ Reactivar HMR para detectar cambios en CSS sin recargar
        liveReload: true, // 🔥 Forzar recarga si HMR no lo detecta
        open: true, // Abre el navegador automáticamente
        port: 3000, // Usa el puerto 3000
        watchFiles: ["src/public/css/**/*.css", "src/views/**/*.html"], // ✅ Observar cambios en CSS y HTML
        devMiddleware: {
            writeToDisk: true // ✅ Forzar escritura en disco en desarrollo
        }
    }
};
