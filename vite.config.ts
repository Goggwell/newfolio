import { resolve } from "path";
import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), MillionLint.vite()],
	resolve: {
		alias: {
			assets: resolve(root, "assets"),
			components: resolve(root, "components"),
			features: resolve(root, "features"),
			hooks: resolve(root, "hooks"),
			services: resolve(root, "services"),
			store: resolve(root, "store"),
			utils: resolve(root, "utils"),
		},
	},
});
