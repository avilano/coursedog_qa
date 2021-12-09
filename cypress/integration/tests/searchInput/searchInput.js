///  <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I browse {string} on the search input box', (searchQuery) => {
	cy.get('.search__input').type(`${searchQuery}{enter}`)
	cy.url().should('include', searchQuery)
	cy.reload()
})

Then(
	'I can see {string} event matching the searched term {string}',
	(eventNumber, searchQuery) => {
		cy.get('#search-results')
			.children()
			.should('be.visible')
			.and('have.length', eventNumber)
			.and('include.text', searchQuery)
	}
)
