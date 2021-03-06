// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import AuthPage from "./PageObjects/AuthPage";
import ProfilePage from "./PageObjects/ProfilePage";

const authPage = new AuthPage();
const profilePage = new ProfilePage();


Cypress.Commands.add('login', (loginData) => {
    authPage.getAuthPageFromHeaderMenu().click();

    authPage.getEmailInput()
        .clear()
        .type(loginData.email);

    authPage.getPasswordInput()
        .clear()
        .type(loginData.password);

    authPage.getSubmitButton().click();
});

Cypress.Commands.add('logout', (logoutData) => {
    profilePage.getUserMenuFromHeader(logoutData.email).click();

    cy.intercept('/authorize/logout').as('waitForLogout');

    authPage.getLogoutButton().click();

    cy.wait('@waitForLogout');
});
