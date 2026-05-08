const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'd6yi5d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Adicione a linha abaixo para desativar o modo inseguro
    allowCypressEnv: false,
  },
});
module.exports = {
  projectId: "d6yi5d",
  // ...rest of the Cypress project config
}