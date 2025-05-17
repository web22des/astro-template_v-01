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
                assetFileNames: "assets/[name][extname]",
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
        },
    ],
};
