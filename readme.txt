Clonar projeto "git clone https://github.com/ChristianBugay/Cypress.git"
Rodar "npm install" no terminal da pasta do projeto para instalar dependências
Acesse a pasta "cypress" (minúsculo), rode o comando "npx cypress open"
Na interface do cypress, selecione "E2E Testing"
Selecione o navegador desejado e clique em "Start E2E Testing in navegador_escolhido"
Na primeira aba "Specs", estarão dispostos todos os testes do projeto
Basta clicar no arquivo ".cy.js" desejado, para que os testes sejam iniciados
Neste contexto foram separados em testes Front-end e Back-end.

Observações: Foi utilizado "cy.wait" em alguns pontos do projeto,
pois o site é muito leve e o cypress encontrava os elementos antes mesmo de serem carregados na tela,
o que causava comportamentos como "informe campos obrigatórios" (os quais haviam valor informado, porém foi inserido tão rapido que o próprio site não reconheceu).
Então para evitar erros, foi optado por utilizar um tempo de espera.
