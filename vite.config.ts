import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shadowstudio1969/", // Ensure this matches your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
