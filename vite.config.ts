import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('react-icons') || id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800,
  }
})