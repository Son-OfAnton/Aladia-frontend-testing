/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./cypress/e2e/auth/signup.cy.js ***!
  \***************************************/


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
it('signup', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/auth/signin');

  // Ensure the email input is visible before typing
  cy.get('.relative > [data-test="email-input"]', {
    timeout: 10000
  }).should('be.visible').type('aadmasterefe00@gmail.com');
  cy.get('[data-test="login-button"]').should('be.visible').click();

  // Wait for the name input to appear after clicking the login button
  cy.get('.relative > [data-test="name-input"]', {
    timeout: 10000
  }).should('be.visible').type('Admas');
  cy.get('.relative > [data-test="surname-input"]').should('be.visible').type('Girma');
  cy.get('.relative > [data-test="email-input"]').should('be.visible').type('aadmasterefe00@gmail.com');
  cy.get('.relative > [data-test="password-input"]').should('be.visible').type('Admas123!');
  cy.get('.relative > [data-test="confirm-password-input"]').should('be.visible').type('Admas123!');

  // Check terms and submit
  cy.get('#terms').should('be.visible').check();
  cy.get('[data-test="submit-button"]').should('be.visible').click();

  // Wait for the OTP inputs to be visible after submission
  cy.get('.relative > [data-test="otp-1"]', {
    timeout: 10000
  }).should('be.visible').type('1');
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7RUFFeEU7RUFDQUwsRUFBRSxDQUFDRSxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQzs7RUFFbEU7RUFDQU4sRUFBRSxDQUFDRSxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxDQUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDOztFQUVoRjtFQUNBTCxFQUFFLENBQUNFLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0VBQzdFO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXh0LWFwcC8uL2N5cHJlc3MvZTJlL2F1dGgvc2lnbnVwLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRlc2NyaWJlKCdTaWdudXAgc3BlYycsICgpID0+IHt9KTtcblxuLy8gLyogPT09PSBUZXN0IENyZWF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG4vLyBpdCgnc2lnbnVwJywgZnVuY3Rpb24oKSB7XG4vLyAgIC8qID09PT0gR2VuZXJhdGVkIHdpdGggQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xuLy8gICBjeS52aXNpdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvc2lnbmluJyk7XG4gIFxuLy8gICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJlbWFpbC1pbnB1dFwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLnR5cGUoJ2FhZG1hc3RlcmVmZTAwQGdtYWlsLmNvbScpO1xuLy8gICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJsb2dpbi1idXR0b25cIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xuXG4vLyAgIGN5LndhaXQoNTAwMCk7XG4gIFxuLy8gICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJuYW1lLWlucHV0XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnQWRtYXMnKTtcbi8vICAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwic3VybmFtZS1pbnB1dFwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLnR5cGUoJ0dpcm1hJyk7XG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cImVtYWlsLWlucHV0XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnYWFkbWFzdGVyZWZlMDBAZ21haWwuY29tJyk7XG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cInBhc3N3b3JkLWlucHV0XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnQWRtYXMxMjMhJyk7XG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cImNvbmZpcm0tcGFzc3dvcmQtaW5wdXRcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCdBZG1hczEyMyEnKTtcbi8vICAgY3kuZ2V0KCcjdGVybXMnKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jaGVjaygpO1xuLy8gICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzdWJtaXQtYnV0dG9uXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykuY2xpY2soKTtcblxuLy8gICBjeS53YWl0KDUwMDApO1xuICBcbi8vICAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwib3RwLTFcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xuLy8gICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtMVwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLnR5cGUoJzEnKTtcbiAgXG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cIm90cC0yXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykuY2xpY2soKTtcbi8vICAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwib3RwLTJcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCcyJyk7XG4gIFxuLy8gICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtM1wiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKCk7XG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cIm90cC0zXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnMycpO1xuICBcbi8vICAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwib3RwLTRcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xuLy8gICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtNFwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLnR5cGUoJzQnKTtcbiAgXG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cIm90cC01XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykuY2xpY2soKTtcbi8vICAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwib3RwLTVcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCc1Jyk7XG4gIFxuLy8gICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtNlwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKCk7XG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cIm90cC02XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnNScpO1xuICBcbi8vICAgY3kuZ2V0KCdbZGF0YS10ZXN0PVwic3VibWl0LWJ1dHRvblwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKCk7XG4gIFxuLy8gICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtNlwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsZWFyKCc2Jyk7XG4vLyAgIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cIm90cC02XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnNicpO1xuICBcbi8vICAgY3kuZ2V0KCdbZGF0YS10ZXN0PVwic3VibWl0LWJ1dHRvblwiXSA+IC5teC1hdXRvJykuc2hvdWxkKCdiZS52aXNpYmxlJykuY2xpY2soKTtcbi8vICAgLyogPT09PSBFbmQgQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xuLy8gfSk7XG5cblxuZGVzY3JpYmUoJ1NpZ251cCBzcGVjJywgKCkgPT4ge30pO1xuXG4vKiA9PT09IFRlc3QgQ3JlYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbml0KCdzaWdudXAnLCBmdW5jdGlvbigpIHtcbiAgLyogPT09PSBHZW5lcmF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG4gIGN5LnZpc2l0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9zaWduaW4nKTtcbiAgXG4gIC8vIEVuc3VyZSB0aGUgZW1haWwgaW5wdXQgaXMgdmlzaWJsZSBiZWZvcmUgdHlwaW5nXG4gIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cImVtYWlsLWlucHV0XCJdJywgeyB0aW1lb3V0OiAxMDAwMCB9KS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCdhYWRtYXN0ZXJlZmUwMEBnbWFpbC5jb20nKTtcbiAgY3kuZ2V0KCdbZGF0YS10ZXN0PVwibG9naW4tYnV0dG9uXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykuY2xpY2soKTtcblxuICAvLyBXYWl0IGZvciB0aGUgbmFtZSBpbnB1dCB0byBhcHBlYXIgYWZ0ZXIgY2xpY2tpbmcgdGhlIGxvZ2luIGJ1dHRvblxuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJuYW1lLWlucHV0XCJdJywgeyB0aW1lb3V0OiAxMDAwMCB9KS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCdBZG1hcycpO1xuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJzdXJuYW1lLWlucHV0XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnR2lybWEnKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwiZW1haWwtaW5wdXRcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCdhYWRtYXN0ZXJlZmUwMEBnbWFpbC5jb20nKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwicGFzc3dvcmQtaW5wdXRcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCdBZG1hczEyMyEnKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwiY29uZmlybS1wYXNzd29yZC1pbnB1dFwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLnR5cGUoJ0FkbWFzMTIzIScpO1xuICBcbiAgLy8gQ2hlY2sgdGVybXMgYW5kIHN1Ym1pdFxuICBjeS5nZXQoJyN0ZXJtcycpLnNob3VsZCgnYmUudmlzaWJsZScpLmNoZWNrKCk7XG4gIGN5LmdldCgnW2RhdGEtdGVzdD1cInN1Ym1pdC1idXR0b25cIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xuXG4gIC8vIFdhaXQgZm9yIHRoZSBPVFAgaW5wdXRzIHRvIGJlIHZpc2libGUgYWZ0ZXIgc3VibWlzc2lvblxuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtMVwiXScsIHsgdGltZW91dDogMTAwMDAgfSkuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnMScpO1xuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtMlwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLnR5cGUoJzInKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwib3RwLTNcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCczJyk7XG4gIGN5LmdldCgnLnJlbGF0aXZlID4gW2RhdGEtdGVzdD1cIm90cC00XCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJykudHlwZSgnNCcpO1xuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtNVwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLnR5cGUoJzUnKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS10ZXN0PVwib3RwLTZcIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS50eXBlKCc1Jyk7XG4gIFxuICAvLyBDbGljayB0aGUgc3VibWl0IGJ1dHRvbiBhbmQgY29ycmVjdCB0aGUgT1RQXG4gIGN5LmdldCgnW2RhdGEtdGVzdD1cInN1Ym1pdC1idXR0b25cIl0nKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpO1xuICBcbiAgLy8gQ2xlYXIgYW5kIHJlLWVudGVyIHRoZSBsYXN0IE9UUCBkaWdpdFxuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IFtkYXRhLXRlc3Q9XCJvdHAtNlwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsZWFyKCkudHlwZSgnNicpO1xuICBcbiAgLy8gRmluYWwgc3VibWl0XG4gIGN5LmdldCgnW2RhdGEtdGVzdD1cInN1Ym1pdC1idXR0b25cIl0gPiAubXgtYXV0bycpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKCk7XG4gIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbn0pO1xuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJjeSIsInZpc2l0IiwiZ2V0IiwidGltZW91dCIsInNob3VsZCIsInR5cGUiLCJjbGljayIsImNoZWNrIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9