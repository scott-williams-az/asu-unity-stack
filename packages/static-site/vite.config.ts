import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig(({ mode }):UserConfig =>
  {
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    return {
      base: './',
      plugins: [react(), mkcert()],
      server: {
        port: 4200,
        host: "localhost.asu.edu",
        https: true,
      },
      build: {
        outDir:  '../../build',
        emptyOutDir: false,
      },
      define: {
        __APP_ENV__: JSON.stringify(env.APP_ENV),
      },
    };
  }
)
