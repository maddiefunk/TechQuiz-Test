import { defineConfig } from 'cypress';
import customViteConfig from './vite.config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // adjust for your dev server
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
