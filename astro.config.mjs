import { defineConfig } from "astro/config";

// Явное определение режимов
//const isDev = process.env.NODE_ENV === "development";
const isDev = process.env.NODE_ENV === "development";
const isPreview = process.argv.includes("preview");
const isGHPages = process.env.GITHUB_ACTIONS === "true"; // Автоопределение GitHub Actions

export default defineConfig({
    site: "https://web22des.github.io",
    //base: isDev ? "/" : "/astro-template_v-01/", // закоментировать для локальной работы prewiew
    base: isDev || isPreview || !isGHPages ? "/" : "/astro-template_v-01/",
    outDir: "dist",
    vite: {
        css: {
            devSourcemap: true,
            postcss: {
                plugins: [
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
                ],
            },
        },
        build: {
            cssMinify: true,
            assetsInlineLimit: 0,
            rollupOptions: {
                output: {
                    assetFileNames: "assets/[name][extname]",
                },
            },
        },
    },
});
