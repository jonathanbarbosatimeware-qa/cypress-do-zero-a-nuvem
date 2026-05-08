describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    // Visita o caminho relativo do arquivo HTML
    cy.visit('./src/index.html')

    // Captura o título da página e verifica se é o esperado
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})
