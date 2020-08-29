describe('Chat functionality suite of tests', ()=>{

   before(()=>{
      cy.visit('');
      cy.get('.form-container .username-input').type('Eugene');
      cy.get('.button-container .btn').click();
   });

   it('should have correct elements on chat view', ()=>{
      cy.get('.chat .messages').should('contain.text', 'There no message');
      cy.get('.btn-container input').first().should('have.attr', 'placeholder', 'Message');
      cy.get('.btn-container button.btn-send').should('contain.text', 'Send');
   });
   it('should have logout functionality', ()=>{
     // cy.get('.btn-container button.btn-logout').should('contain.text', 'Send');
   });
   it('should enter message correctly', ()=>{
      cy.get('.btn-container input').first().type('hello world of chat')
      cy.get('.btn-container button.btn-send').click();
      cy.get('.btn-container input').first().should('have.value', '');
      cy.get('.messages .message-slot').first().should('be.visible')
   });
   describe('messages display tests', ()=>{
      const messageNode =  ()=>cy.get('.messages .message-slot').contains('hello world of chat')
             .parents('.message-slot');

      it('should correct display messages in chat', ()=>{
         messageNode().find('.title')
             .should('contain.text', 'Eugene');
         messageNode().find('.message-line')
             .should('contain.text', 'hello world of chat');

      });

      it('should display avatar correctly', ()=>{
         messageNode().find('.avatar')
             .should('be.visible');
      });
   })

});