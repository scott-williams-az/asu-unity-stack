import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';


// https://vitejs.dev/config/
export default defineConfig(({ mode }):UserConfig =>
  {
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    return {
      plugins: [react(), mkcert()],
      server: {
        port: 4200,
        host: "localhost.asu.edu",
        https: true,
      },
      base: env.VITE_APP_BASE_PATH,
      define: {
        __APP_ENV__: JSON.stringify(env.APP_ENV),
      },
    };
  }
)
