class AuthPage {
    getAuthPageFromHeaderMenu() {
        return cy.contains('Log in');
    }

    getAuthForm() {
        return cy.get('form[name="authForm"]');
    }

    getEmailInput() {
        return cy.get('input[name="email"]');
    }

    getPasswordInput() {
        return cy.get('input[name="password"]');
    }

    getSubmitButton() {
        return cy.get('button[type = "submit"]');
    }

    getShowPasswordButton() {
        return cy.get('button[ng-click = "showPassword = !showPassword"]');
    }

    getErrorMessageOnInvalidLogin() {
        return cy.contains('Uh oh! Email or password is incorrect');
    }

    getAuthorizedUserEmailInHeader(email) {
        return cy.contains(email);
    }

    getLogoutButton() {
        return cy.contains('Log out');
    }
}

export default AuthPage