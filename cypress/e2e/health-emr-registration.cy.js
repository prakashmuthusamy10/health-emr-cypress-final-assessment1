describe('Health EMR UI Assessment', () => {

    let data;

    before(() => {

        cy.fixture('patient-data').then((fixtureData) => {
            data = fixtureData;
        });

    });

    beforeEach(() => {

        cy.login();

    });

    afterEach(() => {

        cy.captureEvidence('test-execution');

    });

    it('TC01 - Validate Login Page and Login Success', () => {

        cy.get('a[href="#/Patient"]')
            .should('be.visible');

        cy.captureEvidence('login-success');

    });

    it('TC02 - Validate Dashboard/Home Page', () => {

        cy.url()
            .should('not.include', 'login');

        cy.get('.page-content')
            .should('exist');

        cy.captureEvidence('dashboard');

    });

    it('TC03 - Validate Patient Menu Expansion', () => {

        cy.expandPatientMenu();

        cy.get('a[href="#/Patient/SearchPatient"]')
            .should('be.visible');

        cy.get('a[href="#/Patient/RegisterPatient"]')
            .should('be.visible');

        cy.captureEvidence('patient-menu-expanded');

    });

    it('TC04 - Validate Register Patient Page Navigation', () => {

        cy.openRegisterPatient();

        cy.contains(/Register Patient|Basic Information/i)
            .should('be.visible');

        cy.captureEvidence('register-basic-information');

    });

    it('TC05 - Validate Mandatory Field Errors', () => {

        cy.openRegisterPatient();

        cy.get('#regPatientSubmitBtn')
            .click();

        cy.get('.danphe-msgbox .main-message')
            .should('be.visible')
            .and('contain', 'One or more fields are invalid');

        cy.captureEvidence('mandatory-validation');

    });

    it('TC06 - Validate Fixture Data Fill', () => {

        cy.openRegisterPatient();

    cy.get('#regPatFirstName')
    .clear()
    .type(data.patient.firstName)
    .should('have.value', data.patient.firstName);

cy.get(':nth-child(4) > .col-md-8 > .form-control')
    .clear()
    .type(data.patient.middleName)
    .should('have.value', data.patient.middleName);

cy.get('#LastName')
    .clear()
    .type(data.patient.lastName)
    .should('have.value', data.patient.lastName);

cy.get('#date')
    .clear()
    .type(data.patient.dateOfBirth);

cy.get('#Gender')
    .select(data.patient.gender);

cy.get('#PhoneNumber')
    .clear()
    .type(data.patient.phoneNumber)
    .should('have.value', data.patient.phoneNumber);

cy.get('#WardNumber')
    .clear()
    .type(data.patient.wardNumber)
    .should('have.value', data.patient.wardNumber);

cy.get('#Address')
    .clear()
    .type(data.patient.address)
    .should('have.value', data.patient.address);

cy.get(':nth-child(2) > :nth-child(9) > .col-md-8 > .form-control')
    .clear()
    .type(data.patient.email)
    .should('have.value', data.patient.email);

        cy.captureEvidence('json-data-fill');

    });

});
