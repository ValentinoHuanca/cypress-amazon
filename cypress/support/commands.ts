// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
    interface Chainable<Subject = any> {
		//si se quiere agregar un parametro, se debe primero agregar aca luego en el Cypress.Commands
        myCommand(param:string): Chainable<any>;
		login(): Chainable<any>

    }
}

//beforeEach(() => {
	//Cypress.on('uncaught:exception', () => false); // returning false here prevents Cypress from failing the test
	//cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
	//cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
//});


Cypress.Commands.add('login',()=>{
	cy.get('[data-v-1f99f73c=""]').eq(0).type('Admin')
	cy.get('[data-v-1f99f73c=""]').eq(1).type('admin123')
	cy.get('[type="submit"]').click()
})

