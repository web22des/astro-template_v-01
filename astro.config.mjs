import { defineConfig } from "astro/config";

// Умное определение base URL
const getBase = () => {
    if (process.env.NODE_ENV === "development") return "/";
    if (process.argv.includes("preview")) return "/";
    return "/astro-template_v-01/";
};

export default defineConfig({
    site: "https://web22des.github.io",
    base: getBase(),
    outDir: "dist",
    vite: {
        css: {
            devSourcemap: true,
            postcss: {
                plugins: [
                    // Автопрефиксы (встроенная реализация)
                    {
                        postcssPlugin: "autoprefixer",
                        prepare() {
                            return {
                                Once(root) {
                                    root.walkDecls((decl) => {
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
                    // Минификация (встроенная)
                    {
                        postcssPlugin: "cssnano",
                        Once(root) {
                            if (process.env.NODE_ENV === "production") {
                                root.walkDecls((decl) => {
                                    decl.value = decl.value.replace(/\s+/g, " ");
                                });
                            }
                        },
                    },
                ],
            },
        },
        build: {
            cssMinify: true, // Дополнительная минификация
            assetsInlineLimit: 0, // Отключаем встраивание CSS
            rollupOptions: {
                output: {
                    assetFileNames: "assets/[name][extname]", // Чистые имена файлов
                },
            },
        },
    },
});
