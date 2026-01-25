import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'url'
import { nitro } from 'nitro/vite'
import type { Plugin } from 'vite'

// Plugin to watch JSON data files and trigger HMR
function contentReloadPlugin(): Plugin {
  return {
    name: 'content-reload',
    configureServer(server) {
      const dataDir = fileURLToPath(new URL('./public/data', import.meta.url))

      // Watch for changes in the data directory
      server.watcher.add(dataDir + '/**/*.json')

      server.watcher.on('change', (file) => {
        if (file.includes('public/data') && file.endsWith('.json')) {
          console.log('📄 Data file changed:', file)

          // Invalidate the content.server module to force re-import
          const modules = server.moduleGraph.getModulesByFile(
            fileURLToPath(new URL('./src/lib/content.server.ts', import.meta.url))
          )

          if (modules) {
            modules.forEach(module => {
              server.moduleGraph.invalidateModule(module)
            })
          }

          // Trigger full reload on client
          server.ws.send({
            type: 'full-reload',
            path: '*'
          })
        }
      })
    }
  }
}

const config = defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssr: {
    noExternal: ['gray-matter', 'yaml'],
  },
  plugins: [
    contentReloadPlugin(),
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),

    tanstackStart(),
    viteReact(),
  ],
})

export default config
