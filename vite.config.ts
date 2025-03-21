import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgLoader from 'vite-svg-loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ mode }: any) =>
    defineConfig({
        server: {
            cors: false,
            port: 5174
        },
        plugins: [react(), svgLoader()],
        resolve: {
            alias: {
                'I#':
                    mode === 'production'
                        ? 'https://wedding-dinner.ru/DA/dist/'
                        : 'http://localhos:5174/'
            }
        },
        base: mode === 'production' ? '/VO/dist/' : '/'
    });


    @