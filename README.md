[![wakatime](https://wakatime.com/badge/user/04459a42-f0a6-4019-ad90-9558a7c04b39/project/0ee5ae44-ca7e-48d2-b42f-f59045844710.svg)](https://wakatime.com/badge/user/04459a42-f0a6-4019-ad90-9558a7c04b39/project/0ee5ae44-ca7e-48d2-b42f-f59045844710)

# 10 - TrackIt

### Descrição

- Construir uma aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas 🙂

[Figma com o Layout](https://www.figma.com/file/3r8MSf9dIPuFlvZHuHTZXF/TrackIt?node-id=0%3A1)

### Referências essenciais

[Artigo: Login](https://www.notion.so/Artigo-Login-0f8e98a3c10a443bb4c797e53111691e)

[Artigo: Context API](https://www.notion.so/Artigo-Context-API-d80dbebd99ba4aa1be72e7400c7b3637)

### Bibliotecas

- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar)
- [dayjs](https://day.js.org/)
- [react-calendar](https://www.npmjs.com/package/react-calendar) (para o bônus)

### Documentação da API

- **POST** Fazer cadastro

  Para fazer cadastro, faça uma requisição `POST` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up>
  ```

  enviando um corpo no formato

  ```jsx
  {
  	email: "...",
  	name: "...",
  	image: "...",
  	password: "..."
  }
  ```

- **POST** Fazer login

  Para fazer cadastro, faça uma requisição `POST` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login>
  ```

  enviando um corpo no formato

  ```jsx
  {
  	email: "...",
  	password: "..."
  }
  ```

  O servidor responderá com um objeto no formato

  ```json
  {
      "id": 3,
      "name": "Joe",
      "image": "<https://http.cat/411.jpg>",
      "email": "joe@respondeai.com.br",
      "password": "123456",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
  }
  ```

- **POST** Criar hábito

  Para criar um hábito, faça uma requisição `POST` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits>
  ```

  enviando um corpo no formato

  ```jsx
  {
  	name: "Nome do hábito",
  	days: [1, 3, 5] // segunda, quarta e sexta
  }
  ```

  e um cabeçalho `Authorization` com formato `Bearer TOKEN`

  O servidor responderá com um objeto no formato

  ```json
  {
  	id: 1,
  	name: "Nome do hábito",
  	days: [1, 3, 5]
  }
  ```

- **GET** Listar hábitos

  Para listar os hábitos do usuário, faça uma requisição `GET` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits>
  ```

  com um cabeçalho `Authorization` com formato `Bearer TOKEN`

  O servidor responderá com uma array no formato

  ```json
  [
  	{
  		id: 1,
  		name: "Nome do hábito",
  		days: [1, 3, 5]
  	},
  	{
  		id: 2,
  		name: "Nome do hábito 2",
  		days: [1, 3, 4, 6]
  	}
  ]
  ```

- **DELETE** Deletar hábito

  Para excluir um hábito do usuário, faça uma requisição `DELETE` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO>
  ```

  com um cabeçalho `Authorization` com formato `Bearer TOKEN`, subtituindo `ID_DO_HABITO` na URL pelo id do hábito a ser deletado.

  **Dica**: pesquise sobre como enviar um request `DELETE` com axios

- **GET** Buscar hábitos de hoje

  Para fazer listar os hábitos do usuário, faça uma requisição `GET` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today>
  ```

  com um cabeçalho `Authorization` com formato `Bearer TOKEN`

  O servidor responderá com um array no formato

  ```json
  [
      {
          "id": 3,
          "name": "Acordar",
          "done": true,
          "currentSequence": 1,
          "highestSequence": 1
      }
  ]
  ```

- **POST** Marcar hábito como feito

  Para fazer listar os hábitos do usuário, faça uma requisição `POST` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check>
  ```

  com um cabeçalho `Authorization` com formato `Bearer TOKEN`, substituindo `ID_DO_HABITO` na URL pelo id do hábito a ser marcado.

  Se:

  - O hábito já estiver marcado
  - O hábito não for do dia atual
  - O hábito não for do usuário logado

  o servidor vai responder com `Bad Request (400)`.

- **POST** Desmarcar hábito como feito

  Para fazer listar os hábitos do usuário, faça uma requisição `POST` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/uncheck>
  ```

  com um cabeçalho `Authorization` com formato `Bearer TOKEN`, substituindo `ID_DO_HABITO` na URL pelo id do hábito a ser marcado.

  Se:

  - O hábito não estiver marcado
  - O hábito não for do dia atual
  - O hábito não for do usuário logado

  o servidor vai responder com `Bad Request (400)`.

- **GET** Histórico de hábitos diário

  Para obter o histórico de hábitos diário do usuário, faça uma requisição `GET` para a URL

  ```
  <https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily>
  ```

  com um cabeçalho `Authorization` com formato `Bearer TOKEN`

  O servidor responderá com um array no formato

  ```json
  [
      {
          "day": "20/05/2021",
          "habits": [
              {
                  "id": 3,
                  "name": "Acordar",
                  "date": "2021-05-20T12:00:00.000Z",
                  "weekDay": 4,
                  "historyId": null,
                  "done": false
              }
          ]
      },
      {
          "day": "19/05/2021",
          "habits": [
              {
                  "id": 3,
                  "name": "Acordar",
                  "date": "2021-05-19T12:00:00.000Z",
                  "weekDay": 3,
                  "historyId": 626,
                  "done": true
              },
              {
                  "id": 1,
                  "name": "Ler 1 capítulo do livro",
                  "date": "2021-05-19T12:00:00.000Z",
                  "weekDay": 3,
                  "historyId": 625,
                  "done": true
              }
          ]
      },
      {
          "day": "18/05/2021",
          "habits": [
              {
                  "id": 3,
                  "name": "Acordar",
                  "date": "2021-05-18T12:00:00.000Z",
                  "weekDay": 2,
                  "historyId": 7,
                  "done": true
              }
          ]
      },
      {
          "day": "17/05/2021",
          "habits": [
              {
                  "id": 1,
                  "name": "Ler 1 capítulo do livro",
                  "date": "2021-05-17T12:00:00.000Z",
                  "weekDay": 1,
                  "historyId": 1,
                  "done": true
              }
          ]
      },
      {
          "day": "16/05/2021",
          "habits": [
              {
                  "id": 1,
                  "name": "Ler 1 capítulo do livro",
                  "date": "2021-05-16T12:00:00.000Z",
                  "weekDay": 0,
                  "historyId": null,
                  "done": false
              }
          ]
      },
      {
          "day": "14/05/2021",
          "habits": [
              {
                  "id": 1,
                  "name": "Ler 1 capítulo do livro",
                  "date": "2021-05-14T12:00:00.000Z",
                  "weekDay": 5,
                  "historyId": null,
                  "done": false
              }
          ]
      }
  ]
  ```

  Repare que **o servidor só responde com os dias que o usuário deveria ou não ter feito um hábito**.

### Requisitos

- Geral

  - [ ] Manipule o HTML usando somente React (você não deve manipular o DOM diretamente com `querySelector`, `innerHTML`, `classList`)
  - [ ] Para controlar os dados dinâmicos da aplicação, utilize as ferramentas de gerenciamento de estado do React (não utilize variáveis globais)
  - [ ] Para estados globais (como usuário logado e progresso do dia) utilize **ContextAPI**. Local Storage só deve ser usada para armazenar as credenciais do usuário, enviadas pelo servidor. **Session Storage não deve ser utilizado**.
  - [ ] Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
  - [ ] Faça commits a cada funcionalidade implementada

- Layout

  - [x] Aplicar layout, seguindo figma fornecido

    [TrackIt](https://www.figma.com/file/3r8MSf9dIPuFlvZHuHTZXF/TrackIt?node-id=0%3A1)

  - [x] O CSS deve ser implementado utilizando **Styled Components**

  - [x] Não é necessário fazer a versão para desktop, somente mobile

- Tela Login (rota `/`)

  - [x] Deve ser enviado o email e senha para a API conforme documentação

  - [x] Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout

    **Dica**: para fazer a animação de loading, utilize a biblioteca `react-loader-spinner`

  - [x] Em caso de sucesso, o usuário deve ser redirecionado para a rota `/hoje`

  - [x] Em caso de falha, deve ser exibido um `alert` informando para o usuário e os campos/botão devem ser habilitados novamente

  - [x] Ao clicar no link para se cadastrar, o usuário deve ser redirecionado para a rota `/cadastro`

- Tela Cadastro (rota `/cadastro`)

  - [x] Os dados devem ser enviados para a API conforme documentação
  - [x] Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
  - [x] Em caso de sucesso, o usuário deve ser redirecionado para a rota `/` (rota de Login)
  - [x] Em caso de falha, deve ser exibido um alert informando para o usuário e os campos/botão devem ser habilitados novamente
  - [x] Ao clicar no link para logar, o usuário deve ser redirecionado para a rota `/` (rota de Login)

- Topo e Menu

  - [x] Topo e menu devem ter posicionamento fixo

  - [x] No topo deve ser exibida a foto do usuário conforme layout

    **OBS**: Utilize ContextAPI para compartilhar o estado do usuário logado globalmente entre os componentes.

  - [x] No menu, os 3 botões de Hábitos, Hoje e Histórico devem redirecionar o usuário para as rotas `/habitos`, `/hoje` e `/historico` respectivamente

  - [x] O botão de Hoje deve exibir uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário

    **Dica**: utilize a biblioteca `react-circular-progressbar`

    **OBS**: Esse progresso deve ser atualizado automaticamente conforme o usuário for concluindo os hábitos. Utilize ContextAPI para compartilhar esse estado globalmente entre os componentes.

- Tela Hábitos (rota `/habitos`)

  - [x] Carregar os hábitos do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
  - [x] Ao clicar para deletar um hábito, deve ser exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o hábito. Se sim, deve ser enviado um request pra API conforme documentação e os hábitos recarregados logo em seguida.
  - [x] Caso o usuário não tenha nenhum hábito cadastrado, deve ser exibido o texto conforme layout
  - [x] Ao clicar no botão de "+", deve-se exibir um formulário de cadastro de hábito logo abaixo do título conforme layout
  - [x] O usuário deve inserir o nome do hábito em um campo de texto e selecionar os dias da semana que deseja realizar o hábito conforme layout
  - [x] Ao salvar, devem ser enviados os dados para API conforme documentação
  - [x] Enquanto estiver carregando, o campo de texto e o botão devem ser desabilitados, conforme layout. Os botões dos dias da semana devem ser desabilitados, porém não é necessária mudança visual durante o loading.
  - [x] Em caso de sucesso, os campos devem ser limpos e reabilitados, o formulário deve ser escondido novamente e a lista de hábitos abaixo recarregada
  - [x] Em caso de erro, os campos devem ser reabilitados e um alerta deve indicar o problema para o usuário
  - [x] Ao Cancelar, o formulário deve ser escondido. Caso tenha dados já preenchidos, os mesmos devem ser mantidos caso o usuário reabra o formulário de criação.

- Tela Hoje (rota `/hoje`)

  - [x] Carregar os hábitos de hoje do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout

  - [x] O título da tela deve exibir o dia de hoje conforme layout

    **Dica**: utilize a biblioteca `dayjs` para isso

  - [x] No subtítulo deve ser exibida a frase "Nenhum hábito concluído ainda" ou "x% dos hábitos concluídos", dependendo do progresso do usuário

  - [x] Ao marcar ou desmarcar um hábito como concluído, deve ser enviado um request pra API conforme documentação. Não é necessário colocar loading.

  - [x] Ao marcar um hábito como concluído, deve ser colocada em verde a contagem da sequência atual

  - [x] Caso a sequência atual seja igual ao recorde do usuário, este também deve ser exibido em verde

- Tela Histórico (rota `/historico`)

  - [x] Deve ser exibido o texto conforme layout

### Bônus

- Persistência de login

  - [x] Após o login, salve o objeto do usuário na máquina utilizando **Local Storage**

    [Artigo: Como armazenar dados no computador do usuário?](https://www.notion.so/Artigo-Como-armazenar-dados-no-computador-do-usu-rio-145600e7d741498589fbf570083a370c)

    [Artigo: Local Storage VS. Context API](https://www.notion.so/Artigo-Local-Storage-VS-Context-API-7a9ca9d38f0445c59dca7163c9b98150)

  - [x] Ao abrir o app, verifique se há um usuário armazenado no Local Storage. Se sim, popule o UserContext com esse dado e redirecione o usuário direto para a tela inicial do app, evitando que ele faça login novamente

- Tela Histórico (rota 

  ```
  /historico
  ```

  )

  - [ ] Nesta tela deve ser exibido um calendário, conforme layout

    **Dica**: Utilize a biblioteca `react-calendar`

  - [ ] No calendário, deve ser exibido destacado em verde os dias em que o usuário completou todos os hábitos que deveria ter completado (ex: tinha 3 hábitos para fazer e completou os 3)

    **Dica**: Explore a prop `formatDay` que a biblioteca aceita e, para manipular data, pesquise pela biblioteca `dayjs`

  - [ ] Já os dias que o usuário tinha hábitos para completar, porém não completou todos, devem ser destacados em vermelho (ex: tinha 3 hábitos pra fazer mas só completou 2)

    **Dica**: mesmas dicas acima

  - [ ] Nos dias que o usuário não tinha nenhum hábito a concluir, não devem ser destacados (continuam com o fundo branco)

- Clique no dia

  - [ ] No calendário da tela de Histórico, quando o usuário clicar em um dia em destaque (verde ou vermelho), exiba a lista de hábitos do dia clicado, indicando quais hábitos ele concluiu ou não (layout livre)

    **Dica**: Explore a prop `onClickDay` da biblioteca

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
