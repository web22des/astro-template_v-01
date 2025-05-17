// config/vite/vite.config.js
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    css: {
        postcss: path.resolve(__dirname, "../../config/postcss.config.js"),
    },
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                // Добавляем хеш для cache busting
                assetFileNames: "assets/[name]-[hash][extname]",
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",
            },
        },
    },
    plugins: [
        {
            name: "cache-headers",
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (/\.(js|css|png|jpg|jpeg|gif|webp|svg|woff2?)$/.test(req.url)) {
                        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
                    }
                    next();
                });
            },
            // Добавляем обработку для production
            transformIndexHtml(html) {
                return html.replace(/(<link[^>]+\.css"|<script[^>]+\.js"|<img[^>]+\.(png|jpg|jpeg|gif|webp|svg)")/g, '$& crossorigin="anonymous"');
            },
        },
    ],
};
