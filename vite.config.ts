
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // base path - when deploying to GitHub Pages, use your GitHub repository name
  base: mode === 'production' ? '/portfolio/' : '/', // in development use root, in production use /portfolio/
  server: {
    host: "::",
    port: 8080,
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
          'ui': ['@/components/ui'],
        }
      }
    },
    // Generate source maps for easier debugging
    sourcemap: mode !== 'production',
    // Minify the output
    minify: mode === 'production' ? 'terser' : false,
  },
}));
