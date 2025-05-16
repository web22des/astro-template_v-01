/* Далее настройка минификации и добавление автопрефиксов */
// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://web22des.github.io",
    base: process.env.NODE_ENV === "production" ? "/astro-template_v-01/" : "/",
    outDir: "dist",
    vite: {
        css: {
            devSourcemap: true,
            postcss: {
                // Встроенные плагины PostCSS, доступные через Vite
                plugins: [
                    // Автопрефиксы через встроенный обработчик
                    {
                        postcssPlugin: "autoprefixer",
                        prepare() {
                            return {
                                Once(root) {
                                    root.walkDecls((decl) => {
                                        // Простейший автопрефиксер для основных свойств
                                        if (decl.prop === "display" && decl.value === "flex") {
                                            decl.cloneBefore({ prop: "display", value: "-webkit-box" });
                                            decl.cloneBefore({ prop: "display", value: "-ms-flexbox" });
                                        }
                                        if (decl.prop.includes("transition")) {
                                            decl.cloneBefore({ prop: "-webkit-" + decl.prop });
                                        }
                                    });
                                },
                            };
                        },
                    },
                    // Базовая минификация через Vite
                    {
                        postcssPlugin: "cssnano",
                        Once(root) {
                            root.walkDecls((decl) => {
                                // Удаление пробелов
                                decl.value = decl.value.replace(/\s+/g, " ");
                            });
                        },
                    },
                ],
            },
        },
        build: {
            cssMinify: true, // Основная минификация через esbuild
            minify: "terser",
        },
    },
});
