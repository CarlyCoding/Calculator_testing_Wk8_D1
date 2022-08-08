describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update running total with number buttons', () => {
    cy.get("#number2").click();
    cy.get('.display').should('contain', 2);
  })

  it('should update the display after an arithmetical operation', () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', 4);
  })

  it('should chain multiple operations together', () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', 8);
  })

  it('should display expected output with positive numbers', () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', 4);
  })

  it('should display expected output with a negative number', () => {
    cy.get("#number4").click();
    cy.get("#operator-subtract").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', -1);
  })

  it('should display expected output when dealing with decimals', () => {
    cy.get("#number1").click();
    cy.get("#decimal").click();
    cy.get("#number1").click();
    cy.get("#operator-add").click();
    cy.get("#number1").click();
    cy.get("#decimal").click();
    cy.get("#number1").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', 2.2);
  })

  it('should display expected output when dealing with very large numbers', () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#number3").click();
    cy.get("#number4").click();
    cy.get("#number5").click();
    cy.get("#number6").click();
    cy.get("#number7").click();
    cy.get("#number8").click();
    cy.get("#number9").click();
    cy.get("#operator-add").click();
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#number3").click();
    cy.get("#number4").click();
    cy.get("#number5").click();
    cy.get("#number6").click();
    cy.get("#number7").click();
    cy.get("#number8").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', 246913578);
  })

it('cant divide by zero', () => {
  cy.get("#number5").click();
  cy.get("#operator-divide").click();
  cy.get("#number0").click();
  cy.get("#operator-equals").click();
  cy.get('.display').should('contain',Infinity);
})

it('should be able to divide zero by another number', () => {
  cy.get("#number0").click();
  cy.get("#operator-divide").click();
  cy.get("#number5").click();
  cy.get("#operator-equals").click();
  cy.get('.display').should('contain',0);
})


})

// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? 