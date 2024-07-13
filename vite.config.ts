import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

export default ({ mode }: any) => defineConfig({
  server: {
    cors: false,
    port: 5174,
  },
  plugins: [react()],
  resolve: {
    alias: {
      'I#':
                    mode === 'production'
                      ? 'https://wedding-dinner.ru/DA/dist/'
                      : 'http://localhos:5174/',
    },
  },
  base: mode === 'production' ? '/DA/dist/' : '/',
});
