🧪 Automação de Testes: Central de Atendimento ao Cliente (CAC TAT)

Este repositório contém a suíte de testes automatizados desenvolvida para a aplicação **CAC TAT**. O projeto foi estruturado para garantir a qualidade das funcionalidades tanto em ambiente Desktop quanto em dispositivos móveis, utilizando o framework Cypress.

---

📋 Descrição do Projeto
O projeto foca na automação de testes de ponta a ponta (E2E) e testes de integração de API. A suíte cobre desde interações básicas de interface até comportamentos avançados, como manipulação do relógio do navegador e validações de rede.

---

⚙️ Pré-requisitos


### ⚙️ Sistemas e Versões

Antes de começar, certifique-se de que os seguintes sistemas estão instalados em seu computador (versões utilizadas durante o desenvolvimento):

* **Git:** (v2.42.1 ou superior)
* **Node.js:** (v20.13.1 LTS)
* **npm:** (v10.8.1)
* **Visual Studio Code:** (v1.90.2) ou outra IDE de sua preferência.
* **Cypress:** (Framework de automação core do projeto)

### 🧠 Conhecimentos Básicos Necessários

Para contribuir ou entender a lógica deste projeto, é fundamental ter familiaridade com:

- **HTML & CSS:** Estrutura de páginas e seletores para identificação de elementos.
- **JavaScript:** Lógica de programação e manipulação de objetos/dados.
- **Git:** Versionamento de código e comandos básicos (commit, push, branch).
- **Linha de Comando:** Navegação em diretórios e execução de scripts via terminal.
- **Cypress:** Conceitos e comandos de automação de testes E2E.

---


🛠️ GUIA DE INSTALAÇÃO E EXECUÇÃO

 INSTALAÇÃO DAS DEPENDÊNCIAS:
   Comando: npm install
   
   Stack Instalada:

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

 <details><summary><b>👉 Clique aqui para ver oque esta sendo testado</b></summary>

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

</details>

---

# 🛠️ Documentação Técnica do Projeto de Automação (Cypress)

<details><summary><b>👉 Clique aqui para ver a Documentação Técnica</b></summary>


Este documento detalha a estrutura e a interconexão das ferramentas utilizadas neste projeto de automação de testes para a Timeware.

## 🏗️ O Ecossistema: Como tudo se conecta

A automação não é apenas um código isolado, mas uma engrenagem de ferramentas:

* **VS Code (Escritório):** Onde o código é escrito e gerenciado.
* **Node.js (Motor):** O ambiente que permite que o JavaScript rode no computador e gerencie as ferramentas.
* **Cypress (O Robô):** A ferramenta que interpreta o código e executa as ações no navegador como se fosse um usuário real.
* **Git (Câmera/Histórico):** Registra cada mudança no código, permitindo rastreabilidade e segurança.
* **GitHub (Galeria/Servidor):** Onde o código é compartilhado e onde os testes podem rodar sozinhos via CI/CD.

---

## 📂 Detalhamento dos Arquivos

<details><summary><b>👉 Clique aqui para ver o Detalhamento dos Arquivos</b></summary>

### 📄 package.json

O `package.json` é o **Manifesto do Projeto** (ou Memorial Descritivo). Ele centraliza toda a inteligência de execução e as ferramentas necessárias para o robô funcionar.

### (Scripts de Execução)

O campo `scripts` funciona como um **Painel de Controle** da nossa automação. Em vez de digitar comandos longos e difíceis de lembrar, utilizamos esses atalhos:

#### 1. Scripts de Ambiente e Desktop
* **`"start"`**: Inicia o servidor local da aplicação na porta 3000. O parâmetro `--no-browser` garante que o servidor rode silenciosamente no fundo, sem abrir janelas extras.
* **`"cy:open"`**: Abre o **Cypress Runner** (interface visual) para que possamos ver o robô interagindo com a página em tempo real.
* **`"test"`**: Roda todos os testes de forma otimizada (modo "headless") para ser usado em servidores de nuvem.

#### 2. Scripts Estratégicos para Mobile (Celular)
Estes comandos mostram que a automação é **responsiva**:
* **`"cy:open:mobile"`**: Abre a interface do Cypress configurando o tamanho da tela para um celular padrão (410x860px). Ideal para ajustar os testes visualmente para dispositivos móveis.
* **`"cy:run:mobile"`**: Executa todos os testes no terminal simulando um celular. É aqui que garantimos que o sistema da Timeware funciona perfeitamente na mão do usuário final.

#### 2. Dependências de Desenvolvimento (`devDependencies`)
Aqui listamos as "ferramentas de trabalho" que o projeto utiliza:
* **`cypress`**: O motor principal que executa os testes e simula as ações humanas.
* **`live-server`**: Um servidor leve que mantém a aplicação da Timeware rodando localmente enquanto o robô trabalha.

---

### 📄 package-lock.json

Se o `package.json` é a nossa lista de desejos, o `package-lock.json` é o **Contrato de Fidelidade** do projeto. Ele é gerado automaticamente pelo Node.js e você nunca deve editá-lo manualmente.

#### 1. O que ele faz na prática?
* **Congelamento de Versões:** Ele registra a versão exata (até o último número) de todas as ferramentas e de todas as "sub-ferramentas" que elas precisam para funcionar. 
* **Segurança (Integridade):** Repare nos campos `"integrity"` (aqueles códigos estranhos com `sha512`). Eles servem para garantir que ninguém alterou o código da ferramenta maliciosamente; o Node verifica esse código antes de instalar.
* **Histórico de Origem:** Ele guarda exatamente de onde o pacote foi baixado (`resolved`), garantindo que o download seja sempre seguro.

#### 2. Por que ele é vital para a Timeware?
Sem esse arquivo, o seu projeto poderia funcionar hoje e parar de funcionar amanhã se o Cypress atualizasse sozinho para uma versão que tem algum erro. O `package-lock` impede que isso aconteça.

 ---

 ### 📄 jsconfig.json

O `jsconfig.json` é o arquivo de **Configuração do Suporte JavaScript**. Ele serve para "dar inteligência" ao editor de código (VS Code) dentro deste projeto específico.

#### 1. O que ele faz na prática?
* **Mapeamento de Inteligência:** Através do campo `"include"`, ele avisa ao editor que deve considerar os arquivos do núcleo do Cypress (`node_modules/cypress`) e todos os nossos scripts de teste (`cypress/**/*.js`) como parte de um contexto único.
* **Auto-completar (IntelliSense):** É graças a esse arquivo que, quando você começa a digitar `cy.`, o VS Code sugere automaticamente comandos como `.click()`, `.type()` ou `.visit()`.
* **Navegação entre Arquivos:** Ele permite que você clique em um comando customizado e o VS Code saiba exatamente em qual arquivo aquele comando foi criado, facilitando a manutenção.

#### 2. Importância Técnica
Este arquivo elimina erros de "variável não definida" no editor e acelera o desenvolvimento, garantindo que o VS Code entenda que estamos trabalhando em um projeto de testes Cypress.

---

### 📄 cypress.config.js

O `cypress.config.js` é o arquivo central de **Configuração do Cypress**. É aqui que definimos o comportamento global do robô e como ele deve interagir com a nossa aplicação.

#### 1. Principais Configurações Definidas:
* **`projectId`**: É o identificador exclusivo do projeto. Ele permite que os resultados dos testes sejam enviados e organizados no Cypress Cloud (Painel de Gestão).
* **`e2e` (End-to-End)**: Bloco que contém as configurações para os testes de ponta a ponta.
    * **`baseUrl`**: Define o endereço principal do sistema (`http://localhost:3000`). Isso evita que tenhamos que digitar a URL completa em todos os testes; basta usar um caminho relativo.
    * **`supportFile`**: Indica ao Cypress onde está o arquivo de suporte principal, que carrega todos os comandos customizados e configurações globais antes de cada teste.
* **`video: true`**: Configuração que ordena ao Cypress gravar automaticamente um vídeo de cada execução de teste. 

#### 2. Importância Técnica
Este arquivo centraliza a inteligência do projeto. Alterando uma única linha aqui (como a `baseUrl`), conseguimos mudar o alvo dos testes de um ambiente de desenvolvimento para um ambiente de produção em segundos.

---

### 📄 cypress/support/commands.js

Este arquivo é o **Dicionário de Comandos Customizados** do projeto. Ele permite estender as funcionalidades do Cypress, criando comandos específicos para as necessidades da aplicação.

#### 1. Comando: `fillMandatoryFieldsAndSubmit`
Em vez de escrever 5 ou 6 linhas de código toda vez que quisermos testar o formulário, criamos este comando único que:
* **Padroniza os Dados:** Define valores padrão (Nome, Sobrenome, E-mail) para testes rápidos.
* **Flexibilidade (`...userCustomData`):** Permite que o teste envie dados diferentes quando necessário, mantendo o preenchimento automático para o restante dos campos.
* **Simulação Realista:** Utiliza um `delay` na digitação para garantir que a interface processe as informações como um usuário real faria.

#### 2. Importância Técnica (Reutilização de Código)
O uso de comandos customizados segue o princípio **DRY (Don't Repeat Yourself)**. Se o ID de um campo mudar no site, eu altero o código apenas neste arquivo, e todos os testes que usam esse comando serão corrigidos instantaneamente.

---

### 📄 cypress/support/e2e.js

O `e2e.js` funciona como o **Ponto de Entrada** para o suporte do Cypress. Ele é processado e carregado automaticamente antes de cada arquivo de teste ser executado.

#### 1. O que ele faz na prática?
* **Importação Global:** Ele utiliza o comando `import './commands'` para carregar todas as funções personalizadas que criamos. Sem essa linha, o robô não reconheceria os comandos customizados (como o de preencher formulário).
* **Configuração de Comportamento:** É o lugar ideal para colocar configurações que devem valer para o projeto inteiro, como tratar erros inesperados do site ou definir comportamentos que acontecem antes de cada `it()` (teste).

#### 2. Importância Técnica
Este arquivo simplifica a escrita dos testes. Como ele é carregado automaticamente, não precisamos importar manualmente os comandos em cada um dos dezenas de arquivos de teste. Isso mantém o código limpo e organizado.

---

### 📄 cypress/fixtures/example.json

O arquivo de **Fixture** funciona como um banco de dados estático em formato JSON. Ele é utilizado para armazenar informações que o robô usará durante os testes, sem que esses dados precisem estar escritos diretamente no código do teste.

#### 1. O que ele faz na prática?
* **Separação de Responsabilidades:** Mantém a lógica do teste em um lugar e os dados (nomes, e-mails, mensagens) em outro.
* **Massa de Dados:** Permite simular diferentes perfis de usuário ou preenchimentos de formulário apenas alterando um arquivo de texto simples.
* **Organização:** Facilita a manutenção. Se precisarmos mudar o e-mail de teste de toda a automação, alteramos apenas uma linha neste arquivo JSON.

#### 2. Importância Técnica
O uso de Fixtures torna o teste mais limpo e profissional. Em vez de "chumbar" (hardcode) textos gigantes dentro dos scripts, o Cypress "consome" esses dados sob demanda, permitindo inclusive testar cenários de sucesso e erro usando a mesma lógica de código, apenas trocando a Fixture.

---

### 📄 cypress/e2e/CAT-TAT.cy.js

Este é o arquivo de **Suíte de Testes**. Ele contém os roteiros de execução que o Cypress seguirá para validar as funcionalidades da aplicação Central de Atendimento ao Cliente TAT.

#### 1. O que ele faz na prática?
* **Agrupamento (`describe`):** Organiza todos os testes relacionados a uma funcionalidade específica (neste caso, o formulário de atendimento) em um único bloco.
* **Preparação (`beforeEach`):** Comando que garante que, antes de cada teste individual, o robô visite a página inicial, garantindo que o teste comece sempre do "zero".
* **Casos de Teste (`it`):** Cada bloco `it` representa um cenário real de uso, como:
    * Preenchimento de campos obrigatórios.
    * Validação de mensagens de erro para e-mails inválidos.
    * Verificação de campos numéricos (Telefone).
    * Testes de upload de arquivos e seleção de menus suspensos.
* **Asserções (`should` / `expect`):** É o momento em que o robô confirma se o resultado esperado aconteceu (ex: se a mensagem de sucesso apareceu na tela).

#### 2. Importância Técnica
Este arquivo é o documento vivo da qualidade do software. Ele traduz os requisitos de negócio em código executável. Se qualquer funcionalidade do site parar de funcionar após uma atualização, este script detectará o erro em segundos, permitindo uma correção imediata.

---

## 📄 .github/workflows/cypress.yml

O **Inspetor Automático**. Este arquivo configura a Integração Contínua (CI) via GitHub Actions.
* **Gatilho (`on: [push]`)**: Toda vez que enviamos código para o GitHub, os testes começam sozinhos.
* **Ambiente**: O GitHub "aluga" uma máquina virtual (Ubuntu) limpa para rodar o projeto.
* **Etapas (Steps)**:
    1. **Checkout**: Baixa o código na máquina virtual.
    2. **Setup Node.js**: Instala o motor JavaScript (v20).
    3. **Install dependencies**: Instala as ferramentas exatas listadas no `package-lock`.
    4. **Cypress run**: Inicia o servidor, espera ele ficar pronto e roda todos os testes, gravando os resultados.
    </details>

    ---

👨‍💻 Autor

Projeto desenvolvido para fins de estudo e especialização em QA Automation.

🚀 Desenvolvido por [Jonathan Barbosa] durante o curso Cypress, do Zero à Nuvem.