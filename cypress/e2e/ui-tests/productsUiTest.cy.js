// Fake Store - Products UI Tests
/// <reference types="cypress" />

import LoginPage from '../../support/pages/loginPage.js';
import ProductsPage from '../../support/pages/productsPage.js';

describe('Fake Store - Products UI Tests', () => {

    beforeEach(() => {

        LoginPage.loginWithStandardUser();
    });

    it('TC4 - Login with standard user and verify default sorting is correct', () => {

        ProductsPage.getDefaultSortingValue().should('eq', 'Name (A to Z)');
        ProductsPage.checkSortingByNameAToZ();
    });
    
    it('TC5 - Sort products by Name (Z to A) and verify order is correct', () => {

        ProductsPage.sortByNameZToA();
        ProductsPage.checkSortingByNameZToA();
    });
});