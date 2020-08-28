describe('Login integration tests', function () {

    beforeEach(()=>{
       cy.visit('');
    });
    it('should have all necessary elements on the page', ()=>{
        cy.get('.button-container .btn').should('contain.text', 'Next');
        cy.get('.form-container .title').should('contain.text', 'Please enter your username')
        cy.get('.form-container .username-input').type('Eugene').should('contain.value', 'Eugene');
    });
    it('should not login if username is missing', ()=>{
        cy.get('.button-container .btn').click();
        cy.url().should('equal', 'https://pager-qa-hiring.herokuapp.com/#/');
    });
    it('should login when username provided', ()=>{
        cy.get('.form-container .username-input').type('Eugene').should('have.value', 'Eugene');
        cy.get('.button-container .btn').click();
        cy.url().should('equal', 'https://pager-qa-hiring.herokuapp.com/#/chat');
    });

});