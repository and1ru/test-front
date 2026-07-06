// se tiene que cambiar esta importacion
import { defineConfig } from 'vitest/config'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  
})
