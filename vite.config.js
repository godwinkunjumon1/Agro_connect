// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2022",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "register/login.html"),
        register: resolve(__dirname, "register/signup.html"),
        dashboard: resolve(__dirname, "user/dashboard.html"),

        products: resolve(__dirname, "view/products.html"),
        product: resolve(__dirname, "view/product.html"),
        about: resolve(__dirname, "about.html"),

        login: resolve(__dirname, "register/login.html"),
        verify: resolve(__dirname, "register/verify.html"),
        register: resolve(__dirname, "register/signup.html"),
        dashboard: resolve(__dirname, "user/dashboard.html"),
        newProduct: resolve(__dirname, "user/newProduct.html"),
        profile: resolve(__dirname, "user/profile.html"),
        editProduct: resolve(__dirname, "user/edit/product.html"),
      },
    },
  },
});
