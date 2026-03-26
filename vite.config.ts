import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default {
  base: '/',
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
