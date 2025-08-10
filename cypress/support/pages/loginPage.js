// cypress/support/pages/loginPage.js
// Page Object to Login Page

import ProductsPage from '../../support/pages/productsPage.js';

// Constants for standard user credentials
const STANDARD_USERNAME = 'standard_user';
const STANDARD_PASSWORD = 'secret_sauce';

class LoginPage {

  // Page elements
  elements = {
    username:      () => cy.get('#user-name'),
    password:      () => cy.get('#password'),
    loginButton:   () => cy.get('#login-button')
  };

  visit() {
    cy.visit('/');
    return this;
  }

  // Fill login form with username and password
	fillForm(username, password) {
		this.elements.username().type(username)
		this.elements.password().type(password)
	}

  // Click Login button
	submit() {
		this.elements.loginButton().click()
	}

  // Login with standart user
  loginWithStandardUser() {
    this.visit();
    this.fillForm(STANDARD_USERNAME, STANDARD_PASSWORD);
    this.submit();

    return ProductsPage;
  }
}

export default new LoginPage();