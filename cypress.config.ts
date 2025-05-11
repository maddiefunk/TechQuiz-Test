import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // adjust for your dev server
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite', // or 'webpack', depending on your project
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
  },
});
