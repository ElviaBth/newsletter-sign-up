describe('newsletter sign in', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/newsletter-sign-up')
    })
    
    it('Displays newsletter container by default', () => {
      cy.get('.container').should('have.length', 1)
      cy.wait(2000)
    }) 

    it('A user can subscribe into newsletter_sign_in', function () {
        let email = 'elvia@gmail.com'
    
        cy.get('input[name=email]').type(email)
        cy.wait(2000)
        cy.get('#newsletterBtn').contains('Subscribe to monthly newsletter')
        cy.wait(1000)
        cy.get('#newsletterBtn').click()
        cy.wait(1000)
        cy.url().should('include', 'http://localhost:5173/subscribe')
        cy.wait(1000)
        cy.get('.subscribe-button').click()
        cy.wait(2000)
        cy.url().should('include', 'http://localhost:5173/newsletter-sign-up')
    })
  })