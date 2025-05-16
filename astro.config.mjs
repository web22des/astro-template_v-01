// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://web22des.github.io", // Ваш URL на GitHub Pages
    //base: "/astro-template_v-01/", // Если репозиторий НЕ username.github.io
    base: process.env.NODE_ENV === "production" ? "/astro-template_v-01/" : "/",
    outDir: "dist", // Должно быть именно 'dist'
});
