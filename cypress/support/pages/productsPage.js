// cypress/support/pages/productsPage.js
// Page Object to Products Page

class ProductsPage {

  //Page elements
  elements = {
    defaultSortingValue: () => cy.get('[data-test="active-option"]'),
    selectSorting:       () => cy.get('[data-test="product-sort-container"]'),
    inventoryListName:   () => cy.get('[data-test="inventory-item-name"]'),
  };

  // Return the value for the default sorting (selected text)
  getDefaultSortingValue() {
    return this.elements.defaultSortingValue().invoke('text');    
  }

  // Check if order of products is by Name (A to Z)
  checkSortingByNameAToZ() {
    return this.elements.inventoryListName().should(($els) => {
      const titles = [...$els].map(el => el.innerText.trim());

      for (let i = 0; i < titles.length - 1; i++) {
        expect(
          titles[i].localeCompare(titles[i + 1]) <= 0,
          `Expected "${titles[i]}" to come before "${titles[i + 1]}"`
        ).to.be.true;
      }
    });
  }

  // Change sorting of products list to By Name (Z to A)
  sortByNameZToA() {
    this.elements.selectSorting().select('za');
  }

  // Check if order of products is by Name (Z to A)
  checkSortingByNameZToA() {
    return this.elements.inventoryListName().should(($els) => {
      const titles = [...$els].map(el => el.innerText.trim());

      for (let i = 0; i < titles.length - 1; i++) {
        expect(
          titles[i].localeCompare(titles[i + 1]) >= 0,
          `Expected "${titles[i]}" to come after "${titles[i + 1]}"`
        ).to.be.true;
      }
    });
  }
}

export default new ProductsPage()