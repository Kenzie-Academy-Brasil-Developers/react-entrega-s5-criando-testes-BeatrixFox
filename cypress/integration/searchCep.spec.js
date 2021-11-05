context("searchCep", () => {
  it("ype zip code and wait for an answer", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("GET", "/", {
      statusCode: 200,
      body: {
        cepNumber: "12050800",
      },
    }).as("cepNumber");

    cy.get("input").type("12050800");
    cy.get("button").click();

    cy.contains("Estado");
  });
});
