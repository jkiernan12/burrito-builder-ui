

describe('page content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a title', () => {
   cy.get('h1').should('contain', 'Burrito Builder')
  })

  it('should have a form with a name input and ingredient buttons', () => {
    cy.get('[type=text]').should('exist')
    cy.get('form').get('button').should('have.length', 13)
  })

  it('should have order cards with a name and ingredients', () => {
    cy.get('.order').should('exist').should('contain.html', 'h3').should('contain.html', 'ingredient-list')
  })
})

describe('order submission', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should be able to modify name input', () => {
    cy.get('input[type=text]').click().type('hungry robot').should('have.value', 'hungry robot')
  })


  it('should modify the order text when clicking buttons', () => {
    cy.get('form').get('p')
    .should('not.contain.text', 'sour cream', 'hot sauce')
    .should('contain.text', 'Nothing selected')

    cy.contains('sour cream').click()
    cy.contains('hot sauce').click()

    cy.get('form').get('p')
    .should('contain', 'hot sauce', 'sour cream')
  })

  it('should submit an order and clear inputs', () => {
    cy.get('input[type=text]').click().type('hungry robot')
    cy.contains('sour cream').click()
    cy.contains('hot sauce').click()

    cy.get('form').get('p')
    .should('contain', 'hot sauce', 'sour cream')

    cy.contains('Submit Order').click()

    cy.get('input[type=text]').should('have.value', '')
    cy.get('form p').should('not.contain.text', 'hot sauce', 'sour cream')
    .should('contain.text', 'Nothing selected')
  })
})