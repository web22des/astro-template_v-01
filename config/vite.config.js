// config/vite/vite.config.js
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    resolve: {
        alias: {
            "@": path.resolve("./src"),
            "@components": path.resolve("./src/components"),
            "@styles": path.resolve("./src/styles"),
            "@assets": path.resolve("./src/assets"),
            "@layouts": path.resolve("./src/layouts"),
            "@fonts": path.resolve("./public/fonts"),
            "@images": path.resolve("./public/images"),
            "@icons": path.resolve("./public/icons"),
        },
    },
    css: {
        postcss: path.resolve(__dirname, "../../config/postcss.config.js"),
        //postcss: path.resolve(__dirname, path.join(process.cwd(), "config", "postcss.config.js")),
        // preprocessorOptions: {
        //     scss: {
        //         additionalData: `
        //         @import "@styles/base/_variables.scss";
        //         @import "@styles/base/mixins.scss";
        //         `,
        //     },
        // },
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
