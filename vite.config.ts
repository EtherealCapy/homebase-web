import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@interfaces": path.resolve(__dirname, 'src/interfaces'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@fonts": path.resolve(__dirname, 'src/assets/fonts/satoshi'),
      "@css": path.resolve(__dirname, 'src/css'),
    },
  },
});
