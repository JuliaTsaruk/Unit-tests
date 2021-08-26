// https://docs.cypress.io/api/introduction/api.html
describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("loads the app", () => {
    cy.get("#app").should("be.visible");
  });
});
