describe('Create a trip', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('a > button').click()
    cy.get('form > input[name="title"]').type('Barcelona')
    cy.get('form > input[name="date"]').type('01.05. - 20.05.2020')
    cy.get('form > button').click()
  })

  it('is redirected to the homepage after creation', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('shows the new card', () => {
    cy.visit('http://localhost:3000/')
    cy.get('section > a > section > div > h2').contains('Barcelona')
    cy.get('section > a > section > div > div > span').contains(
      '01.05. - 20.05.2020'
    )
  })

  it('shows the card after reload', () => {
    cy.visit('http://localhost:3000/')
    cy.get('section > a > section > div > h2').contains('Barcelona')
    cy.get('section > a > section > div > div > span').contains(
      '01.05. - 20.05.2020'
    )
  })
})
