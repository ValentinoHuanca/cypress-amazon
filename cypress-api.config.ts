import { defineConfig } from "cypress";
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';

module.exports = defineConfig({
  reporter:'cypress-multi-reporters',
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{
    configFile:'config-report-chrome.json'
  },
  e2e: {
    specPattern: [ 'cypress/e2e/**/*.api.cy.{js,jsx,ts,tsx}' ],
    experimentalRunAllSpecs:true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler());
      // implement node event listeners here
      return config
    },
  },
  env:{}
});
