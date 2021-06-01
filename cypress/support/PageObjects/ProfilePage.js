class ProfilePage {
    getUserMenuFromHeader(email) {
        return cy.contains(email);
    }

    getProfilePageFromUserMenu() {
        return cy.contains('Profile');
    }

    getProfileForm() {
        return cy.get('form[name="form"]');
    }

    getNameInput() {
        return cy.get('[ng-class*="edit: activeRow === \'name\'"] > .description > .text');
    }

    getEmailInput() {
        return cy.get('[ng-class*="edit: activeRow === \'email\'"] > .description > .text');
    }

    getPasswordInput() {
        return cy.get('[ng-class*="edit: activeRow === \'name\'"] > .description > .text');
    }

    getPhoneInput() {
        return cy.get('[ng-class*="edit: activeRow === \'phone\'"] > .description > .text');
    }

    getAddressInput() {
        return cy.get('[ng-class*="edit: activeRow === \'address\'"] > .description > .text');
    }

    getSupportPinInput() {
        return cy.get('[ng-class*="disabled: activeRow !== \'pin\'"] > .description > .text');
    }

    getNewsletterSlider() {
        return cy.get('[ng-class*="disabled: activeRow !== \'newsletter\'"] > .description > button');
    }

    getProfilePageHeaderText() {
        return cy.get('.page-title');
    }
}

export default ProfilePage