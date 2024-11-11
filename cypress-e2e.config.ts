import { defineConfig } from "cypress";
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';

module.exports = defineConfig({
  pageLoadTimeout:10000,
  chromeWebSecurity: false,
  viewportHeight:1080,
  viewportWidth:1920,
  reporter:'cypress-multi-reporters',
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{
    configFile:'config-report-electron.json'
  },
  e2e: {
    specPattern: [ 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}' ],
    excludeSpecPattern:[ 'cypress/e2e/**/*.api.cy.{js,jsx,ts,tsx}' ],
    experimentalRunAllSpecs:true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler());
      // implement node event listeners here
      return config
    },
  },
  env:{}
});
