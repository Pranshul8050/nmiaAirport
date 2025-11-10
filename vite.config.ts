// Vite config for the mumbai-flight-mirror-fix project
import { defineConfig } from 'vite';
// React SWC plugin for fast JSX/TSX compilation
import react from '@vitejs/plugin-react-swc';
// Node path module for resolving aliases
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Provide development server config
  server: {
    // Listen on all IPv6 interfaces for local network testing
    host: '::',
    port: 8080
  },
  // Plugins for Vite (React with SWC)
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      // Short path alias for src
      '@': path.resolve(__dirname, './src')
    }
  }
}));
