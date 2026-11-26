import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project-site base path for this repository.
export default defineConfig({
  plugins: [react()],
  base: '/qynexa-technologies/',
});
