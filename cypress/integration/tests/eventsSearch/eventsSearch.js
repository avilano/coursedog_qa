///  <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I click on {string} navlink', (element) => {
	cy.contains(element)
		.click()
		.invoke('attr', 'href')
		.then((href) => {
			cy.url().should('include', href)
		})
})

Then('I can see {string} event happening', (eventNumber) => {
	cy.get('div[role="group"]')
		.children()
		.should('be.visible')
		.and('have.length', eventNumber)
})

Then('I can see there are no events happening', () => {
	cy.get('div[role="group"]').should('not.exist')
})
