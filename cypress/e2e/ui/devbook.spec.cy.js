describe('Devbook app', () => {
    it('deve visitar a página do devbook', () => {
        cy.visit('http://localhost:3000');
        cy.get('h2[data-test="heading"]').contains('DevBook')
    })
})