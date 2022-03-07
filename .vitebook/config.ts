import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { vuePlugin } from "@vitebook/vue/node";
import {
  defaultThemePlugin,
  DefaultThemeConfig,
} from "@vitebook/theme-default/node";

export default defineConfig<DefaultThemeConfig>({
  include: ["src/**/*.story.vue"],
  plugins: [
    vuePlugin({ appFile: "App.vue" }),
    clientPlugin(),
    defaultThemePlugin(),
  ],
  site: {
    baseUrl: process.env.NODE_ENV === "production" ? "/vue-nineties/" : "/",
    lang: "en-US",
    title: "vue-nineties",
    description: "Nineties-looking component library for Vue3",
    head: [],
    theme: {},
    locales: {},
  },
});
