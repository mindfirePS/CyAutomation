describe('Snoopstar test cases', () => {
    it('test', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            if (err.message.includes('L is not defined')) {
              return false
            }
          });
      cy.visit(Cypress.env("url"));
    })
  })