import path from 'path';
// Import nothing from vite-ssg to extend vite config (see `ssgOptions`)
import {} from 'vite-ssg';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import viteComponents from 'vite-plugin-components';
import viteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    pages(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    layouts(),

    // https://github.com/antfu/vite-plugin-icons
    viteIcons(),

    // https://github.com/antfu/vite-plugin-components
    viteComponents({
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: '',
        }),

        // import headlessui components (https://headlessui.dev)
        (name) => {
          if (name.startsWith('HeadlessUI.'))
            return { importName: name.replace(/^HeadlessUI\./, ''), path: '@headlessui/vue' };
        },
      ],
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    vueI18n({
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
