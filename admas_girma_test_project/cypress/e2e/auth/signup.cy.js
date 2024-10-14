// describe('Signup spec', () => {});

// /* ==== Test Created with Cypress Studio ==== */
// it('signup', function() {
//   /* ==== Generated with Cypress Studio ==== */
//   cy.visit('http://localhost:3000/auth/signin');
  
//   cy.get('.relative > [data-test="email-input"]').should('be.visible').type('aadmasterefe00@gmail.com');
//   cy.get('[data-test="login-button"]').should('be.visible').click();

//   cy.wait(5000);
  
//   cy.get('.relative > [data-test="name-input"]').should('be.visible').type('Admas');
//   cy.get('.relative > [data-test="surname-input"]').should('be.visible').type('Girma');
//   cy.get('.relative > [data-test="email-input"]').should('be.visible').type('aadmasterefe00@gmail.com');
//   cy.get('.relative > [data-test="password-input"]').should('be.visible').type('Admas123!');
//   cy.get('.relative > [data-test="confirm-password-input"]').should('be.visible').type('Admas123!');
//   cy.get('#terms').should('be.visible').check();
//   cy.get('[data-test="submit-button"]').should('be.visible').click();

//   cy.wait(5000);
  
//   cy.get('.relative > [data-test="otp-1"]').should('be.visible').click();
//   cy.get('.relative > [data-test="otp-1"]').should('be.visible').type('1');
  
//   cy.get('.relative > [data-test="otp-2"]').should('be.visible').click();
//   cy.get('.relative > [data-test="otp-2"]').should('be.visible').type('2');
  
//   cy.get('.relative > [data-test="otp-3"]').should('be.visible').click();
//   cy.get('.relative > [data-test="otp-3"]').should('be.visible').type('3');
  
//   cy.get('.relative > [data-test="otp-4"]').should('be.visible').click();
//   cy.get('.relative > [data-test="otp-4"]').should('be.visible').type('4');
  
//   cy.get('.relative > [data-test="otp-5"]').should('be.visible').click();
//   cy.get('.relative > [data-test="otp-5"]').should('be.visible').type('5');
  
//   cy.get('.relative > [data-test="otp-6"]').should('be.visible').click();
//   cy.get('.relative > [data-test="otp-6"]').should('be.visible').type('5');
  
//   cy.get('[data-test="submit-button"]').should('be.visible').click();
  
//   cy.get('.relative > [data-test="otp-6"]').should('be.visible').clear('6');
//   cy.get('.relative > [data-test="otp-6"]').should('be.visible').type('6');
  
//   cy.get('[data-test="submit-button"] > .mx-auto').should('be.visible').click();
//   /* ==== End Cypress Studio ==== */
// });


describe('Signup spec', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('signup', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/auth/signin');
  
  // Ensure the email input is visible before typing
  cy.get('.relative > [data-test="email-input"]', { timeout: 10000 }).should('be.visible').type('aadmasterefe00@gmail.com');
  cy.get('[data-test="login-button"]').should('be.visible').click();

  // Wait for the name input to appear after clicking the login button
  cy.get('.relative > [data-test="name-input"]', { timeout: 10000 }).should('be.visible').type('Admas');
  cy.get('.relative > [data-test="surname-input"]').should('be.visible').type('Girma');
  cy.get('.relative > [data-test="email-input"]').should('be.visible').type('aadmasterefe00@gmail.com');
  cy.get('.relative > [data-test="password-input"]').should('be.visible').type('Admas123!');
  cy.get('.relative > [data-test="confirm-password-input"]').should('be.visible').type('Admas123!');
  
  // Check terms and submit
  cy.get('#terms').should('be.visible').check();
  cy.get('[data-test="submit-button"]').should('be.visible').click();

  // Wait for the OTP inputs to be visible after submission
  cy.get('.relative > [data-test="otp-1"]', { timeout: 10000 }).should('be.visible').type('1');
  cy.get('.relative > [data-test="otp-2"]').should('be.visible').type('2');
  cy.get('.relative > [data-test="otp-3"]').should('be.visible').type('3');
  cy.get('.relative > [data-test="otp-4"]').should('be.visible').type('4');
  cy.get('.relative > [data-test="otp-5"]').should('be.visible').type('5');
  cy.get('.relative > [data-test="otp-6"]').should('be.visible').type('5');
  
  // Click the submit button and correct the OTP
  cy.get('[data-test="submit-button"]').should('be.visible').click();
  
  // Clear and re-enter the last OTP digit
  cy.get('.relative > [data-test="otp-6"]').should('be.visible').clear().type('6');
  
  // Final submit
  cy.get('[data-test="submit-button"] > .mx-auto').should('be.visible').click();
  /* ==== End Cypress Studio ==== */
});
