const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { config } = require("bluebird");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
 
  e2e: {
    baseUrl: "http://api.seci-h.maracanau.ifce.edu.br/v1",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern : "cypress/e2e/features/*.feature",
    reporter: "cypress-junit-reporter",
    reporterOptions: {
      mochaFile: "junit-report.csv"
    },
    
  },
});
