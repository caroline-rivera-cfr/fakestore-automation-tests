// Fake Store - Products API Tests
/// <reference types="cypress" />
import ProductsApi from '../../support/api/productsApi.js';

// Expected quantities for the products
const EXPECTED_PRODUCTS = 20;
const EXPECTED_ELECTRONICS = 6;
const EXPECTED_ELECTRONICS_MINRATE4 = 2;

describe('Fake Store - Products API', () => {
 
  // Test 1: Validates there are 20 products with /products API
  it('Test 1: Validates there are 20 products', () => {
    ProductsApi.getAllProducts().then((products) => {

      expect(products.length, 'Products quantity').to.eq(EXPECTED_PRODUCTS);
    });
  });

  // Test 2: Validates there are 6 products with category electronics and print them
  it('Test 2: Validates there are 6 products with category electronics and print them', () => {
    ProductsApi.getAllProducts().then((products) => {

      const electronics = ProductsApi.filterByCategory(products, 'electronics');
      const electronicsCount = electronics.length;

      expect(electronics.every(p => p.category === 'electronics')).to.be.true;
      expect(electronicsCount, 'Electronics quantity').to.eq(EXPECTED_ELECTRONICS);

      cy.task('log', `PRODUCTS WITH CATEGORY ELECTRONICS:`);
      cy.task('log', `=========================================`);
      cy.task('log', `${JSON.stringify(electronics, null, 2)}`);
      cy.task('log', `=========================================`);

      cy.task('log', `Electronics quantity: ${electronicsCount} products`);
    });
  });

  // Test 3: Validates there are 2 electronics with rate > 4
  it('Test 3: Validates there are 2 electronics with rate > 4', () => {
    ProductsApi.getAllProducts().then((products) => {

      const electronics = ProductsApi.filterByCategory(products, 'electronics');
      const electronicsWithRateGreaterThan4 = ProductsApi.filterByMinRate(electronics, 4);
      const electronicsWithRateGreaterThan4Count = electronicsWithRateGreaterThan4.length;

      expect(electronicsWithRateGreaterThan4Count, 'Electronics with rate > 4 quantity')
            .to.eq(EXPECTED_ELECTRONICS_MINRATE4);

      cy.task('log', `Electronics quantity with rate bigger than 4: ${electronicsWithRateGreaterThan4Count} products`);
    });
  });

});
