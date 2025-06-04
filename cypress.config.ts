import { defineConfig } from 'cypress';
import customViteConfig from './vite.config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3001', // adjust for your dev server
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite', // or 'webpack', depending on your project
      viteConfig: customViteConfig
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
  },
});
