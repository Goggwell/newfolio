/// <reference types="vitest" />
import MillionLint from "@million/lint";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import million from "million/compiler";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
const _plugins = [
	million.vite({
		auto: true,
	}),
	MillionLint.vite(),
	react({
		babel: {
			plugins: [["module:@preact/signals-react-transform"]],
		},
	}),
	tailwindcss(),
];
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
