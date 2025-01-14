import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  server: { port: 3000 },
  preview: { port: 3000 },
  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'effector-vendor': [
            'effector',
            'effector-react',
            'effector-storage',
            '@effector/reflect',
            'patronum'
          ],
          'router-vendor': ['react-router-dom'],
          'farfetched-vendor': ['@farfetched/core', '@farfetched/zod'],
          'css-vendor': ['@vanilla-extract/css'],
          'utils-vendor': ['ramda']
        }
      }
    }
  }
})
