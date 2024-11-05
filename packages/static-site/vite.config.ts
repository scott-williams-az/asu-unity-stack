import { defineConfig, loadEnv, UserConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import { resolve } from 'path';
import { createMpaPlugin, createPages, Page } from "vite-plugin-virtual-mpa";
import { configRoutes } from './src/routes/config2';

// const rewriteSlashToIndexHtml = () => {
//   return {
//     name: 'rewrite-slash-to-index-html',
//     apply: 'serve',
//     enforce: 'post',
//     configureServer(server) {
//       // rewrite / as index.html
//       server.middlewares.use('/', (err, req, res, next) => {
//         console.log(err)
//         if (req.url === '/') {
//           req.url = '/index.html'
//         }
//         next()
//       })
//     },
//   }
// }

const config = defineConfig(({ mode }):UserConfig =>
  {
    const packageRoot = process.cwd();
    const workspaceRoot = searchForWorkspaceRoot(packageRoot);
    const serverOptions = {
      port: 4200,
      host: "localhost.asu.edu",
      https: true,
      middlewares: (server) => {
        server.use('/', (req, res, next) => {

          if (req.url.endsWith("/") || req.url.endsWith(".html")) {
            req.url = '/index.html';
          }
          next()
        });

        return server
      },
      fs: {
        allow: [
          workspaceRoot,
          '..',
        ],
      },
    };

    return {
      appType: "mpa",
      root: './src',
      base: './',
      plugins: [
        react(),
        mkcert(),
        // rewriteSlashToIndexHtml(),
        createMpaPlugin({
          pages: createPages(configRoutes),
          transformHtml(html, ctx) {
            return {
              html,
              tags: [
                {
                  tag: "title",
                  injectTo: "head",
                  children: ctx.page.data.title,
                },
                // {
                //   tag: "link",
                //   injectTo: "head",
                //   attrs: {
                //     rel: "icon",
                //     href: "./favicon.ico",
                //     type: "image/vnd.microsoft.icon"
                //   },
                // },
              ],
            };
          },
        }),
      ],
      publicDir: resolve(packageRoot, 'public'),
      assetsInclude: ['**/*.ico'],
      server: serverOptions,
      preview: serverOptions,
      build: {
        outDir: resolve(workspaceRoot, 'build'),
        // outDir: resolve(packageRoot, 'build'),
        emptyOutDir: false,
        sourcemap: true,
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, './src'),
        },
      }
    } as UserConfig;
  }
);


export default config;
