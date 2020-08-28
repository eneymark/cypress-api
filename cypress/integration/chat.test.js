describe('Chat functionality suite of tests', ()=>{
   beforeEach(()=>{
      cy.visit('');
   })
   it('should have correct elements on chat view', ()=>{
      cy.get('.chat .messages').should('contain.text', 'There no message please start a conversation');
      cy.get('.btn .btn-container input').first().should('have.value', 'Messagesss')
   });
   it('should have logout functionality', ()=>{

   });
   it('should enter message correctly, and add it', ()=>{

   });

   it('should correct display messages in chat', ()=>{

   });

   it('should display avatar correctly', ()=>{

   });
});