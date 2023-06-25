

describe('Login Page Functional Testing', () => {
    beforeEach(() => {
      // Visit the login page
      cy.visit('https://sakshingp.github.io/assignment/login.html')
    })
  
    it('Should successfully log in with valid credentials', () => {
      // Enter valid username and password
      cy.get('#username').type('validUsername');
      cy.get('#password').type('validPassword');
  
      // Click the login button
      cy.get('#log-in').click();
  
      // Assert that the user is redirected to the home page
      cy.url().should('include', 'https://sakshingp.github.io/assignment/home.html');
    })
  
    it('Should allow login with any username/password combination', () => {
      // Enter any username and password
      cy.get('#username').type('anyValue');
      cy.get('#password').type('anyValue');
  
      // Click the login button
      cy.get('#log-in').click();
  
      // Assert that the user is redirected to the home page
      cy.url().should('include', 'https://sakshingp.github.io/assignment/home.html')
  
      // Assert that the user is logged in
    //   cy.get('#user-greeting').should('contain', 'Welcome, anyValue!')
    })
  }) 

  //--------Home Page Testing

  describe('Home Page Functional Testing', () => {
    beforeEach(() => {
      // Visit the home page
      cy.visit('https://sakshingp.github.io/assignment/home.html')
  
    })
  
    it('Should sort the transaction table by clicking the AMOUNT header', () => {
      // Click the AMOUNT header in the transaction table
      cy.get('#amount').click()
  
      // Get all the amounts in the transaction table
      cy.get('table span').then($amountValues => {
        // Extract the amounts as numbers
        const sortedValues = Array.from($amountValues).map($el=>parseFloat($el.innerText));

        const expectedValues = [...sortedValues].sort((a,b) => a-b);
  
        expect(sortedValues).to.deep.equal(expectedValues);
      })
    })
  })