describe('newsletter sign in', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/newsletter-sign-up')
    })
    
    it('Displays newsletter container by default', () => {
      cy.get('.container').should('have.length', 1)
      cy.wait(2000)
    }) 

    it('Email validation in newsletter_sign_in', function () {
        let email = 'test-gmail'
    
        cy.get('input[name=email]').type(email)
        cy.wait(2000)
        cy.get('.email-error').contains('Valid email required')
        cy.wait(1000)
    })
  })