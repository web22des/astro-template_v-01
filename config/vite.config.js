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
};
