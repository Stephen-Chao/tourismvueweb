// eslint-disable-next-line no-undef
context('Attraction List', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/attractions')
  })

  // eslint-disable-next-line no-undef
  it('attractions data ', function () {
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-home').should('contain', 'Home')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-list').should('contain', 'Attractions')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-money').should('contain', 'Orders')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-globe').should('contain', 'Map')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-info').should('contain', 'About Us')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-comment').should('contain', 'Contact Us')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-sign-in').should('contain', 'Login')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-register').should('contain', 'Register')
    // eslint-disable-next-line no-undef
    cy.get('.fa.fa-sign-out').should('contain', 'Logout')
    // eslint-disable-next-line no-undef
    cy.get('.hero .vue-title').should('contain', 'Attraction List')
    // eslint-disable-next-line no-undef
    cy.get('.login_btn').click()
  })
})

