
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Ante TATtendimento ao Clie')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    // Passamos um objeto apenas com o campo que queremos que seja diferente
    cy.fillMandatoryFieldsAndSubmit({
      email: 'jonathangmail.com'
    })

    cy.get('.error').should('be.visible')

  })


  it('campo de telefone continua vazio quando preenchido com valores não-numéricos', () => {
    cy.get('#phone')
      .type('abc') // Testamos com letras que o navegador realmente deve bloquear
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
    // Marque o checkbox de telefone aqui
    cy.get('#phone-checkbox').check()

    // Clique no botão de enviar (você pode usar o seletor de botão que já conhece)
    cy.contains('button', 'Enviar').click({ force: true })

    // Verifique se a mensagem de erro está visível

    cy.get('.error').should('be.visible')

  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Jonathan')
      .should('have.value', 'Jonathan')
      .clear()
      .should('have.value', ''),
      //
      cy.get('#lastName')
        .type('Barbosa')
        .should('have.value', 'Barbosa')
        .clear()
        .should('have.value', ''),
      //
      cy.get('#email')
        .type('jonathan@gmail.com')
        .should('have.value', 'jonathan@gmail.com')
        .clear()
        .should('have.value', ''),
      //

      cy.get('#phone')
        .type('123456')
        .should('have.value', '123456')
        .clear()
        .should('have.value', '')

  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click({ force: true })
    cy.get('.error').should('be.visible')

  })
  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product').select('YouTube')
      .should('have.value', 'youtube')

  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product').select('Mentoria')
      .should('have.value', 'mentoria')

  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product').select(1)
      .should('have.value', 'blog')

  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[value="feedback"]').check()
      .should('be.checked')

  })
  it('marca cada tipo de atendimento', () => {
    // 1. Selecionamos todos os rádios
    cy.get('input[type="radio"]')
      .should('have.length', 3) // Opcional: verifica se encontrou os 3 rádios
      .each(($el) => {
        // 2. Empacotamos o elemento para usar comandos do Cypress
        cy.wrap($el).check().should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {

    cy.get('input[type="checkbox"]') // Seleciona todos os checkboxes
      .check()                       // Marca todos
      .should('be.checked')          // Verifica se todos estão marcados
      .last()                        // Pega o último da lista
      .uncheck()                     // Desmarca ele
      .should('not.be.checked')      // Verifica se ele realmente foi desmarcado

  })

  it('seleciona um arquivo da pasta fixtures', () => {

    cy.get('input[type="file"]')
      // 2. .selectFile: Comando nativo do Cypress para selecionar arquivos.
      // Usamos o caminho relativo a partir da raiz do projeto.
      .selectFile('cypress/fixtures/example.json')
      // 3. .should com função de callback: Usado para acessar propriedades internas do elemento
      // que não estão disponíveis em asserções simples como 'have.value'.
      .should(($input) => {
        // $input[0]: Acessa o elemento nativo do DOM (fora do jQuery)
        // .files[0]: Acessa o primeiro arquivo da lista de arquivos do input
        // .name: Obtém o nome do arquivo que o navegador armazenou

        // expect: Asserção do Chai para verificar se o nome é o esperado
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
      // Passamos o caminho do arquivo e, em seguida, o objeto de configuração
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(($input) => {
        // A validação continua a mesma, pois o resultado final deve ser o arquivo selecionado
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {

    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(($input) => {

        expect($input[0].files[0].name).to.equal('example.json')

      })



  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {

    cy.get('#privacy a').should('have.attr', 'target', '_blank')

  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {

    cy.get('#privacy a').invoke('removeAttr', 'target')
      .click()
    cy.contains('Talking About Testing')


  })

  it('testa a página da política de privacidade de forma independente', () => {
    // Visita a página diretamente
    cy.visit('http://localhost:3000/privacy.html')

    // Verifica se o conteúdo principal está lá
    cy.contains('Talking About Testing').should('be.visible')
  })




});




