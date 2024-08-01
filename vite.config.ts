/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite";
// import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react-swc";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
const _plugins = [react(), tailwindcss()];
export default defineConfig({
	plugins: _plugins,
	resolve: {
		alias: {
			"@/": new URL("./src/", import.meta.url).pathname,
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/tests/setup.ts",
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
		},
	},
	build: {
		cssMinify: "lightningcss",
	},
});
