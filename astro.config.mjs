import { defineConfig } from "astro/config";

// Определение режима работы
const isDev = process.env.NODE_ENV === "development";
const isPreview = process.argv.some((arg) => arg.includes("preview"));

export default defineConfig({
    site: "https://web22des.github.io",
    base: isDev || isPreview ? "/" : "/astro-template_v-01/",
    outDir: "dist",
    vite: {
        css: {
            devSourcemap: true,
            postcss: {
                plugins: [
                    // Автопрефиксы
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
            minify: "terser",
        },
    },
});
