Clonar projeto "git clone https://github.com/ChristianBugay/Cypress.git"
Rodar "npm install" no terminal da pasta do projeto para instalar dependências
Acesse a pasta "cypress" (minúsculo), rode o comando "npx cypress open" para rodar na interface ou "npx cypress run" para rodar somente no backend (headless)
Caso tenha rodado o comando "npx cypress open", na interface do cypress, selecione "E2E Testing"
Selecione o navegador desejado e clique em "Start E2E Testing in navegador_escolhido"
Na primeira aba "Specs", estarão dispostos todos os testes do projeto
Basta clicar no arquivo ".cy.js" desejado, para que os testes sejam iniciados
Neste contexto foram separados em testes Front-end e Back-end.

Observações: 
1- Foi utilizada a função cy.reload, pois algumas páginas são carregadas incorretamente podendo falhar os testes.
2- Foram gerados relatórios dos testes realizados com a biblioteca mochawesome. Estes podem ser encontrados na pasta "reports".