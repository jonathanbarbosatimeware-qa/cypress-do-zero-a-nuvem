
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
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
      .wait(1500)
      .selectFile('cypress/fixtures/example.json')
      .should(($input) => {
        expect($input[0].files[0].name).to.equal('example.json')
      })
    cy.wait(3000)
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    // aqui o robô "arrasta" o arquivo para o campo
    cy.get('input[type="file"]')
      .wait(1500)
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(($input) => {
        expect($input[0].files[0].name).to.equal('example.json')
      })
    cy.wait(3000)
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    //  "Alias" é como dar um apelido ao arquivo para facilitar o reuso
    cy.fixture('example.json').as('sampleFile')

    cy.get('input[type="file"]')
      .wait(1500)
      .selectFile('@sampleFile') // Usa o "apelido" criado
      .should(($input) => {
        expect($input[0].files[0].name).to.equal('example.json')
      })
    cy.wait(3000)
  })

 it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    // Mostra que o Cypress lê o código do link sem precisar clicar
    cy.get('#privacy a')
      .should('have.attr', 'target', '_blank')
    
    cy.wait(2000) // Pausa para você explicar que o 'target=_blank' garante a nova aba
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    // Demonstra a manipulação do código da página em tempo real
    cy.get('#privacy a')
      .wait(1000)
      .invoke('removeAttr', 'target') // Remove a instrução de abrir nova aba
      .wait(1000)
      .click()

    // Valida que agora estamos na página de privacidade dentro da mesma janela
    cy.contains('Talking About Testing').should('be.visible')
    
    cy.wait(2000) // Pausa para mostrar a página carregada
  })

  it('testa a página da política de privacidade de forma independente', () => {
    // Demonstra que o teste pode ser feito diretamente na URL da funcionalidade
    cy.visit('http://localhost:3000/privacy.html')
    cy.wait(1000)

    // Verifica se o conteúdo esperado está visível
    cy.contains('Talking About Testing').should('be.visible')
    
    cy.wait(2000) // Pausa final antes de encerrar o bloco
  })
  it('exibe e remove a mensagem de sucesso após 3 segundos usando clock e tick', () => {
    cy.clock() // 1. Congela o relógio do navegador

    // 2. Ação que dispara a mensagem (Preencher tudo e enviar)
    cy.fillMandatoryFieldsAndSubmit()

    // 3. Verifica que a mensagem APARECEU
    cy.get('.success').should('be.visible')

    // 4. A mágica: Avança o tempo em 3 segundos (3000ms) instantaneamente
    cy.tick(3000)

    // 5. Verifica que a mensagem DESAPARECEU
    cy.get('.success').should('not.be.visible')
  })

  // O primeiro argumento é o número de vezes (ex: 3)
  // O segundo é a função de callback que contém o seu 'it'

  Cypress._.times(5, () => {
    it('roda o teste de envio do formulário repetidas vezes para garantir estabilidade', () => {
      cy.clock() // Aproveita que você já aprendeu o clock!

      cy.get('#firstName').type('Jonathan')
      cy.get('#lastName').type('Barbosa')
      cy.get('#email').type('jonathan@exemplo.com')
      cy.get('#open-text-area').type('Repetindo para testar estabilidade')
      cy.contains('button', 'Enviar').click()
      cy.get('.success').should('be.visible')
      cy.tick(3000)
      cy.get('.success').should('not.be.visible')
    })
  })

  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
    // Pega a mensagem de sucesso, força a exibição, valida e esconde
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show') // Força o 'display: block'
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide') // Força o 'display: none'
      .should('not.be.visible')

    // Faz a mesma coisa com a de erro
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('faz uma requisição HTTP para a URL da aplicação', () => {
    cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .should((response) => {
        // Aqui usamos a desestruturação do JavaScript (que você deve ter visto na trilha)
        const { status, statusText, body } = response

        expect(status).to.equal(200) // Status de sucesso
        expect(statusText).to.equal('OK') // Texto de sucesso
        expect(body).to.include('CAC TAT') // Garante que o conteúdo da página está lá
      })
  })

  it('encontra o gato escondido e o torna visível', () => {
    cy.get('#cat')
      .should('not.be.visible') // Garante que ele começa escondido
      .invoke('show')           // Força o CSS a mostrar o elemento
      .should('be.visible')    // Agora sim, ele tem que estar visível

    // Bônus: Mudar o texto do título usando invoke também!
    cy.get('#title')
      .invoke('text', 'CAT TAT')
  })

});




