import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // You can change this if there's a port conflict
    open: true, // Automatically opens the app in the default browser
    strictPort: true, // Ensures the server uses the specified port
    watch: {
      usePolling: true, // Helps in detecting file changes on certain systems
    },
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
});
