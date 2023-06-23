import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@api": path.resolve(__dirname, "src/api"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@context": path.resolve(__dirname, "src/context"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@components": path.resolve(__dirname, "src/components"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@constants": path.resolve(__dirname, "src/constants"),
        },
    },
});
