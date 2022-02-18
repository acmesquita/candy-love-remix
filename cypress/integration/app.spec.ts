describe('Page App', () => {
  it('should render when start correctely', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').should('contain', 'Candy Love App')
    cy.get('h2').should('not.be.empty')
  })

  it('should render when when click in link', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid=link]').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('h2').should('not.be.empty')
  })
})
