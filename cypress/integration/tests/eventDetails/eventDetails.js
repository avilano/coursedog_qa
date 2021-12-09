///  <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I navigate to the {string} event', (eventName) => {
	const eventId = getEventDetails(eventName).id
	cy.visit(`events/${eventId}`)
	cy.url().should('include', eventId)
})

Then('I can see all the {string} event details', (eventName) => {
	validateEventDetails(eventName)
})

function getEventDetails(eventName) {
	// TODO: Move this to a better place when it gets larger
	const events = {
		'QA Task Submission': {
			id: 'MVT7RNrGZ4DLxJ071VTT/y7eDlgRuPTl2X3dkrSpP',
			type: 'Alumni Event',
			contacts: 'Cat McGee',
			organizedBy: 'Anderson Collection at Stanford University',
			description: 'Lorem ipsum',
		},
	}
	return events[eventName]
}

function validateEventDetails(eventName) {
	const event = getEventDetails(eventName)

	cy.contains('Add to calendar').should('be.visible')
	cy.contains('Add to Google Calendar').should('be.visible')
	cy.contains('Event Type')
		.siblings()
		.should('be.visible')
		.and('include.text', event.type)
	cy.contains('Contacts')
		.siblings()
		.should('be.visible')
		.and('include.text', event.contacts)
	cy.contains('Organized by')
		.siblings()
		.should('be.visible')
		.and('include.text', event.organizedBy)
	cy.contains('Event Description')
		.siblings('p')
		.should('be.visible')
		.and('include.text', event.description)
}
