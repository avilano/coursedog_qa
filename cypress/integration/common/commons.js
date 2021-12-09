import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('That current date is {string}', (date) => {
	// sets cy clock to date's time
	cy.clock(new Date(date).getTime())
	cy.visit('/')
})

When(
	'I select the {string} {string} from the {string} dropdown',
	(filterQuery, filterType, dropdownMenu) => {
		cy.get('label').contains(dropdownMenu).next().select(filterQuery)
		cy.url().should('include', filterType)
		cy.reload()
	}
)
