
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // base path - using '/' for all environments to ensure consistent pathing
  base: '/',
  server: {
    host: "0.0.0.0",
    port: 5000,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize builds
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@/components/ui/toast', '@/components/ui/sonner', '@/components/ui/tooltip'],
        }
      }
    },
    // Generate source maps for easier debugging
    sourcemap: mode !== 'production',
    // Minify the output
    minify: mode === 'production' ? 'terser' : false,
    // Add chunk size optimization
    chunkSizeWarningLimit: 1000,
    // Improve CSS minification
    cssMinify: mode === 'production',
  },
}));
