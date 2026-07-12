Cypress.Commands.add('login', () => {

    cy.fixture('patient-data').then((data) => {

        cy.visit(data.login.url);

        cy.get('#username_id')
            .should('be.visible')
            .type(data.login.username);

        cy.get('#password')
            .should('be.visible')
            .type(data.login.password);

        cy.get('#login')
            .should('be.visible')
            .click();

        cy.url()
            .should('not.include', 'login');

        cy.get('a[href="#/Patient"]', {
            timeout: 15000
        }).should('exist');

    });

});

Cypress.Commands.add('expandPatientMenu', () => {

    cy.get('span.ad-sign[data-target="#Patient"]')
        .should('exist')
        .click({ force: true });

    cy.get('a[href="#/Patient/SearchPatient"]')
        .should('be.visible');

    cy.get('a[href="#/Patient/RegisterPatient"]')
        .should('be.visible');

});

Cypress.Commands.add('openRegisterPatient', () => {

    cy.expandPatientMenu();

    cy.get('a[href="#/Patient/RegisterPatient"]')
        .first()
        .click();

    cy.get('a[href="#/Patient/RegisterPatient/BasicInfo"]')
        .should('be.visible')
        .and('contain', 'Basic Information');

});

Cypress.Commands.add('captureEvidence', (name) => {

    cy.screenshot(name);

});