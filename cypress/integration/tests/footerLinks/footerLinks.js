///  <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('That the footer exists', () => {
	cy.visit('/')
	cy.get('footer').should('be.visible')
})

Then('I can see the {string} footer link', (linkName) => {
	const linkHref = getFooterHref(linkName)
	cy.contains(linkName)
		.should('be.visible')
		.and('have.attr', 'href')
		.then((href) => {
			expect(href).to.contain(linkHref)
		})
})

function getFooterHref(linkName) {
	// TODO: Move this to a better place when it gets larger
	const footerLinks = {
		Accessibility: 'www.umt.edu/accessibility/',
		Safety: 'www.umt.edu/safety/',
		'Privacy Policy': 'www.umt.edu/privacy/',
	}
	return footerLinks[linkName]
}
