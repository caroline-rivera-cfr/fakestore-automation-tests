// cypress/support/api/productsApi.js
// Service Object to Product API

class ProductsApi {
  constructor() {
    this.baseUrl = Cypress.env('apiBaseUrl');
  }

  // Get all products - https://fakestoreapi.com/products
  getAllProducts() {
    return cy.request(`${this.baseUrl}/products`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      return res.body;
    });
  }

  // Filter products by category
  filterByCategory(products, category) {
    return products.filter((p) => p && p.category === category);
  }

  // Filter products by minRate
  filterByMinRate(products, minRate) {
    return products.filter(
      (p) => p?.rating && typeof p.rating.rate === 'number' && p.rating.rate > minRate
    );
  }
}

export default new ProductsApi();
