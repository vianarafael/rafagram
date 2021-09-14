describe("/pages/app/login/", () => {
  it("fill out the fields, and go to the page /app/profile", () => {
    // start on the login page
    cy.visit("/app/login/");

    // fill out the user input field
    cy.get('input[name="usuario"]').type("user");
    // fill out the password input filed
    cy.get('input[name="senha"]').type("password");
    // click the button field
    cy.get('#formCadastro button[type="submit"]').click();
  });
});
