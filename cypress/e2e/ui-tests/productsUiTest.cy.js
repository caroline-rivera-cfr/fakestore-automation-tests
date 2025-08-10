// Fake Store - Products UI Tests
/// <reference types="cypress" />

import LoginPage from '../../support/pages/loginPage.js';
import ProductsPage from '../../support/pages/productsPage.js';

describe('Fake Store - Products UI Tests', () => {

    // Login before each test
    beforeEach(() => {

        LoginPage.loginWithStandardUser();
    });

    // Test 1: Verify default sorting is correct: By Name (A to Z)
    it('Test 1: Login with standard user and verify default sorting is correct', () => {

        ProductsPage.getDefaultSortingValue().should('eq', 'Name (A to Z)');
        ProductsPage.checkSortingByNameAToZ();
    });
    
    // Test 2: Change sorting to By Name (Z to A) and verify order of products is correct in the list
    it('Test 2: Sort products by Name (Z to A) and verify order is correct', () => {

        ProductsPage.sortByNameZToA();
        ProductsPage.checkSortingByNameZToA();
    });
});