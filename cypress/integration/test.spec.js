

describe('My First Test', function () {
    it('Does not do much!', function () {
        cy.visit('http://localhost:3000/').then(() => {
            cy.get('input.form-control')
                .type('I want to book a room')
            cy.get('form')
                .submit().then(() => {
                    cy.get('button.sc-bxivhb').then(buttons => {
                        buttons[0].click();
                    });
                    cy.wait(2000);
                    cy.get('button.sc-bxivhb').then(buttons => {
                        buttons[3].click();
                    });
                    cy.wait(2000);
                    cy.get('button.sc-bxivhb').then(buttons => {
                        buttons[6].click();
                    });
                })
        })
    })
})