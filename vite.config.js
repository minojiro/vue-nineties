import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  resolve:{
    dedupe: ['vue'],
  },
  plugins: [
    vue(),
    {
      ...typescript({ tsconfig: './tsconfig.json' }),
      apply: 'build',
      declaration: true,
      declarationDir: 'types/',
      rootDir: '/'
    },
  ],
  build: {
    sourcemap: true,
    lib: process.env.IS_VITEBOOK ? null : {
      name: 'VueNineties',
      entry: './src/main.ts',
      // formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: false,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
