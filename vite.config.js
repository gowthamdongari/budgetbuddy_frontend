import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Proxy for backend API
      '/grpc': 'http://localhost:9090', // Proxy for gRPC
    },
  },
});
