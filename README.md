🧪 Automação de Testes: Central de Atendimento ao Cliente (CAC TAT)

Este repositório contém a suíte de testes automatizados desenvolvida para a aplicação **CAC TAT**. O projeto foi estruturado para garantir a qualidade das funcionalidades tanto em ambiente Desktop quanto em dispositivos móveis, utilizando o framework Cypress.

---

📋 Descrição do Projeto
O projeto foca na automação de testes de ponta a ponta (E2E) e testes de integração de API. A suíte cobre desde interações básicas de interface até comportamentos avançados, como manipulação do relógio do navegador e validações de rede.

---

⚙️ Pré-requisitos

Para rodar este projeto, você precisará ter instalado em sua máquina:
* **Node.js** (versão 12 ou superior)
* **npm** (gerenciador de pacotes do Node)
* **Git** (para versionamento)

---

🛠️ GUIA DE INSTALAÇÃO E EXECUÇÃO

1. INSTALAÇÃO DAS DEPENDÊNCIAS:
   Comando: npm install
   
   Stack Instalada:
   - JavaScript (Linguagem base)
   - Cypress (Framework de automação)
   - live-server (Servidor local na porta 3000)
   - Lodash (Utilitários e massa de dados)
   - GitHub Actions (Integração Contínua)
   - Cypress Cloud (Dashboard e Evidências)

---

🚀 PASSOS PARA RODAR OS TESTES

1. INICIAR SERVIDOR LOCAL (Terminal 1):
   npm start
   (Servidor rodando em http://localhost:3000)

2. EXECUTAR CYPRESS (Terminal 2):
   
   | Comando                | Descrição                          | Ambiente |
   |------------------------|------------------------------------|----------|
   | npm run cy:open        | Interface visual (Desktop)         | Desktop  |
   | npm run cy:open:mobile | Interface visual (410x860)         | Mobile   |
   | npm run test           | Modo Headless (Terminal)           | Desktop  |
   | npm run cy:run:mobile  | Modo Headless (Terminal)           | Mobile   |

DICA: Mantenha o servidor (npm start) ativo durante toda a execução.

🔍 O que está sendo testado?

A suíte de testes abrange os seguintes cenários críticos:

* Formulários: Preenchimento de campos, validação de campos obrigatórios e garantia de que o campo de telefone aceita apenas valores numéricos.

* Interações de UI: Seleção de itens em campos suspensos (Dropdowns), marcação de botões do tipo Radio e seleção de Checkboxes.

* Upload de Arquivos: Envio de documentos através da pasta fixtures, utilizando seleção direta ou simulando o comportamento de arrastar e soltar (drag-and-drop).

* Navegação e Links: Verificação de links que abrem em novas abas e manipulação de atributos HTML (remoção de target) para testes lineares.

* Integração de API: Validação da disponibilidade de páginas e recursos através de requisições HTTP utilizando o comando cy.request.

* Controle de Tempo: Uso dos comandos cy.clock() e cy.tick() para validar instantaneamente mensagens temporárias que desaparecem após alguns segundos.

* Integração Contínua (CI/CD)

* O projeto está integrado ao **GitHub Actions**, permitindo que os testes sejam executados automaticamente em cada `push` ou `pull request`.

* Cypress Cloud: Os resultados, vídeos e screenshots das execuções em CI são enviados para o Dashboard oficial, facilitando a análise de falhas e o monitoramento da saúde do projeto.

* Para garantir a **reutilização** e a **manutenibilidade**, criamos comandos personalizados no arquivo `support/commands.js`.

* `cy.fillMandatoryFieldsAndSubmit()`: Realiza o preenchimento completo do formulário principal de forma inteligente, permitindo a sobrescrita de dados através de objetos JavaScript.

👨‍💻 Autor

Projeto desenvolvido para fins de estudo e especialização em QA Automation.

🚀 Desenvolvido por [Jonathan Barbosa] durante o curso Cypress, do Zero à Nuvem.