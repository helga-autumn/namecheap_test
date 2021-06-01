import HomePage from "../support/PageObjects/HomePage";
import AuthPage from "../support/PageObjects/AuthPage";
import ProfilePage from "../support/PageObjects/ProfilePage";
import validUser from '../fixtures/validUser.json'
import testUser from '../fixtures/testUser.json'

const homePage = new HomePage();
const authPage = new AuthPage();
const profilePage = new ProfilePage();
const siteUrl = 'https://www.sbzend.ssls.com/';

describe('Autorization page. Not registered user', function () {
    before(function () {
        cy.visit(siteUrl);
    });

    it('Home page has to be opened', function () {
        cy.url().should('eq', siteUrl);
        homePage.getHero().should('be.visible');
    });

    it('Authorization page has to be opened', function() {
        authPage.getAuthPageFromHeaderMenu().click();

        authPage.getAuthForm().within(() => {
            authPage.getEmailInput().should('be.visible');

            authPage.getPasswordInput().should('be.visible');

            authPage.getSubmitButton().should('be.visible');
        });
    });

    it('After click on eye-icon in password field, password should be displayed', function() {
        authPage.getPasswordInput()
           .clear()
           .type(testUser.password);

        authPage.getShowPasswordButton().click();

        authPage.getPasswordInput().should('have.value', testUser.password);
    });

    it('If user not registered, error messages such as: "Uh oh! Email or password is incorrect" should be displayed', function(){
        cy.login(testUser);

        authPage.getErrorMessageOnInvalidLogin().should('be.visible');
    });
})

describe('Autorization page (Welcome back!)', function () {
    before(function () {
        cy.visit(siteUrl);
    });

    it('Home page has to be opened', function () {
        cy.url().should('eq', siteUrl);
        homePage.getHero().should('be.visible');
    });

    it('Authorization page has to be opened', function() {
        authPage.getAuthPageFromHeaderMenu().click();

        authPage.getAuthForm().within(() => {
            authPage.getEmailInput().should('be.visible');

            authPage.getPasswordInput().should('be.visible');

            authPage.getSubmitButton().should('be.visible');
        });
    });

    it('After click on eye-icon in password field, password should be displayed', function() {
        authPage.getPasswordInput()
            .clear()
            .type(testUser.password);

        authPage.getShowPasswordButton().click();

        authPage.getPasswordInput().should('have.value', testUser.password);
    });

    it('"Log in" button has to be changed on "user@email" button (with dropdown menu) from the left side in the Header menu of the page', function(){
        cy.login(validUser);

        authPage.getAuthorizedUserEmailInHeader(validUser.email).should('be.visible');
    });
    
    after(function () {
        cy.logout(validUser);
    });
});

describe('My profile page. Client area', function () {
    let user = {
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        supportPin: '',
        newsletter: ''
    };

    before(function () {
        cy.visit(siteUrl);

        cy.login(validUser);

        profilePage.getUserMenuFromHeader(validUser.email).click();

        profilePage.getProfilePageFromUserMenu().click();

        profilePage.getProfileForm().within(() => {
            profilePage.getNameInput().then(function ($elem) {
                user.name = $elem.text();
            });

            profilePage.getEmailInput().then(function ($elem) {
                user.email = $elem.text();
            });

            profilePage.getPasswordInput().then(function ($elem) {
                user.password = $elem.text();
            });

            profilePage.getPhoneInput().then(function ($elem) {
                user.phone = $elem.text();
            });

            profilePage.getAddressInput().then(function ($elem) {
                user.address = $elem.text();
            });

            profilePage.getSupportPinInput().then(function ($elem) {
                user.supportPin = $elem.text();
            });

            profilePage.getNewsletterSlider().then(function ($elem) {
                user.newsletter = $elem.hasClass('on');
            });
        });

        cy.logout(validUser);
    });

    it('After click on "Profile" opened page "Profile" should be displayed', function () {
        cy.visit(siteUrl);

        cy.login(validUser);

        profilePage.getUserMenuFromHeader(validUser.email).click();

        profilePage.getProfilePageFromUserMenu().click();

        profilePage.getProfilePageHeaderText().should(($elem) => {
            expect($elem.text().trim()).to.equal('Profile');
        });
    });

    it('Check that opened page has to contain values in the next fields and compare them with variable', function () {
        profilePage.getProfileForm().within(() => {
            profilePage.getNameInput().then(function ($elem) {
                expect($elem.text()).to.equal(user.name);
            });

            profilePage.getEmailInput().then(function ($elem) {
                expect($elem.text()).to.equal(user.email);
            });

            profilePage.getPasswordInput().then(function ($elem) {
                expect($elem.text()).to.equal(user.password);
            });

            profilePage.getPhoneInput().then(function ($elem) {
                expect($elem.text()).to.equal(user.phone);
            });

            profilePage.getAddressInput().then(function ($elem) {
                expect($elem.text()).to.equal(user.address);
            });

            profilePage.getSupportPinInput().then(function ($elem) {
                expect($elem.text()).to.equal(user.supportPin);
            });

            profilePage.getNewsletterSlider().then(function ($elem) {
                expect($elem.hasClass('on')).to.equal(user.newsletter);
            });
        });
    });
});
