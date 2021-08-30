// https://docs.cypress.io/api/introduction/api.html

describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("load the app", () => {
    cy.get("#app").should("be.visible");
  });
  it("input data", () => {
    cy.get("[newTask-input]")
      .type("Buy bread")
      .should("have.value", "Buy bread");
  });
  it("add new tasks", () => {
    cy.get("#addTask").click();
    cy.get("[newTask-input]").type("Buy bread").type("{enter}");
  });
  it("check/uncheck checkboxes", () => {
    cy.get("[newTask-input]").type("Buy bread").type("{enter}");
    cy.get(".checkboxLabel").click();
    cy.get("label > :checkbox ").check();
    cy.wait(1000);
    cy.get(".checkboxLabel").click();
    cy.get("label > :checkbox").uncheck();
  });
  it("delete one task", () => {
    cy.get("[newTask-input]").type("Buy bread").type("{enter}");
    cy.get("[newTask-input]").type("Read book").type("{enter}");
    cy.get("#removeTask").click();
  });
  it("filter tasks", () => {
    cy.get("[newTask-input]").type("Buy bread").type("{enter}");
    cy.get("[newTask-input]").type("Read book").type("{enter}");
    cy.get("[newTask-input]").type("Wash the dish").type("{enter}");
    cy.get(".checkboxLabel").first().click();
    cy.get("label > :checkbox").first().check();
    cy.get("label > :radio").should("have.length", 3);
    cy.get("label").eq(1).click();
    cy.wait(1000);
    cy.get("label").eq(2).click();
  });
  it("delete all tasks", () => {
    cy.get("[newTask-input]").type("Buy bread").type("{enter}");
    cy.get("[newTask-input]").type("Read book").type("{enter}");
    cy.get("#allDelete").click();
  });
  it("make all checkboxes done", () => {
    cy.get("[newTask-input]").type("Buy bread").type("{enter}");
    cy.get("[newTask-input]").type("Read book").type("{enter}");
    cy.get("#allDone").click();
  });
  it("show percent of complited tasks ", () => {
    cy.get("[newTask-input]").type("Buy bread").type("{enter}");
    cy.get("[newTask-input]").type("Read book").type("{enter}");
    cy.get("[newTask-input]").type("Wash the dish").type("{enter}");
    cy.get(".checkboxLabel").first().click();
    cy.get("label > :checkbox").first().check();
    cy.get("#result").should("have.text", "33%");
  });
});
