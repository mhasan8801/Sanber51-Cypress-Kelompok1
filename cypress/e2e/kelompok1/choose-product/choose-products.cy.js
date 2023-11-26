const userData = require("../../../fixtures/userData.json");
describe("choose product", () => {
  it("choose product radiant tee with Sign In Success", () => {
    cy.visit("");
    cy.login("buattest@gmail.com", "test123*");
    cy.url().should("include", "https://magento.softwaretestingboard.com/");
    cy.get(":nth-child(2) > .greet > .logged-in");
    cy.contains("Radiant Tee").click();
    cy.url().should(
      "include",
      "https://magento.softwaretestingboard.com/radiant-tee.html"
    );
    cy.get("#option-label-size-143-item-168").click();
    cy.get("#option-label-color-93-item-57").click();
    cy.get("#qty").clear();
    cy.get("#qty").type("2");
    cy.contains("Add to Cart").click();
    cy.get(".showcart").click();
    cy.contains("You added Radiant Tee to your shopping cart.").should(
      "be.visible"
    );
  });
  it("choose product without login  Success", () => {
    cy.visit("");
    cy.contains("Gear").click();
    cy.get("dd > .items > :nth-child(1) > a").click();
    cy.contains("Driven Backpack").click();
    cy.url().should(
      "include",
      "https://magento.softwaretestingboard.com/driven-backpack.html"
    );
    cy.get("#qty").clear();
    cy.get("#qty").type("4");
    cy.contains("Add to Cart").click();
    cy.get(".showcart").click();
    cy.contains("You added Driven Backpack to your shopping cart.").should(
      "be.visible"
    );
  });
  it("choose product with search Success", () => {
    cy.visit("");
    cy.contains("Sign In").click();
    cy.get("#email").type(userData["valid-user"]);
    cy.get("#pass").type(userData["valid-password"]);
    cy.get(".action.login.primary").click();
    cy.get("#search").type(userData["ex-search-valid"]);
    cy.get(".action.search").click();
    cy.contains("Zing Jump Rope").click();
    cy.url().should(
      "include",
      "https://magento.softwaretestingboard.com/zing-jump-rope.html"
    );
  });
  it("choose product with invalid search Success", () => {
    cy.visit("");
    cy.contains("Sign In").click();
    cy.get("#email").type(userData["valid-user"]);
    cy.get("#pass").type(userData["valid-password"]);
    cy.get(".action.login.primary").click();
    cy.get("#search").type(userData["ex-search-invalid"]);
    cy.get(".action.search").click();
    cy.contains("Your search returned no results.").should("be.visible");
  });
});
