///  <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then(
	'I can see {string} events matching the {string} filter',
	(eventNumber, filterQuery) => {
		cy.get('#search-results')
			.children()
			.should('be.visible')
			.and('have.length', eventNumber)
			.and('include.text', filterQuery)
	}
)

Then('I can clear the filter', () => {
	cy.contains('Filtering').parent().children('button').click()
})

Then('I no longer see filtered results from {string}', (filterQuery) => {
	cy.get('#search-results')
		.children()
		.should('be.visible')
		.and('not.contain', filterQuery)
})
