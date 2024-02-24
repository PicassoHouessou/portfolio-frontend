import path from "path";
import { fileURLToPath, URL } from "url";
import inject from "@rollup/plugin-inject";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import generateSitemap from "vite-ssg-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        inject({
            // => that should be first under plugins array
            $: "jquery",
            jQuery: "jquery",
        }),
        vue({
            //customElement: true,
        }),
        vueI18n({
            // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
            compositionOnly: true,
            runtimeOnly: false,
            defaultSFCLang: "json",
            globalInjection: true,
            //globalSFCScope: true,
            // you need to set i18n resource including paths !
            include: path.resolve(__dirname, "./src/locales/**"),
        }),
    ],
    ssgOptions: {
        onFinished() {
            generateSitemap();
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: [
            ".mjs",
            ".js",
            ".ts",
            ".jsx",
            ".tsx",
            ".json",
            ".vue",
            ".scss",
            ".css",
        ],
    },
});
