# Desenvolvimento Web com JavaScript
Minhas notas dos cursos da DIO, focados em desenvolvimento web utilizando JavaScript.

## Introdução
O desenvolvimento web com JavaScript é uma prática essencial na construção de experiências interativas e dinâmicas na web. JavaScript, uma linguagem de programação versátil, é fundamental para manipular o Document Object Model (DOM), responder a eventos do usuário e interagir com o servidor, tornando as páginas web mais dinâmicas e responsivas. Além disso, a modularidade introduzida por recursos como classes e a importação/exportação de código facilita a organização e manutenção de projetos web mais complexos. Ao combinar HTML, CSS e JavaScript de maneira eficiente, os desenvolvedores podem criar aplicações web modernas e envolventes.

## Protocolo Cliente-Servidor
O protocolo cliente-servidor é um modelo de comunicação fundamental na arquitetura de redes e desenvolvimento de sistemas distribuídos. Nesse modelo, dois tipos de entidades interagem: o cliente, que solicita serviços ou recursos, e o servidor, que fornece esses serviços ou recursos em resposta às solicitações do cliente. A comunicação entre o cliente e o servidor geralmente ocorre por meio de trocas de mensagens, onde o cliente envia solicitações e o servidor responde. Esse modelo permite a especialização e escalabilidade, pois diferentes servidores podem atender a múltiplos clientes simultaneamente, facilitando a implementação de sistemas complexos e eficientes.

## Configuração do Ambiente

Não é necessário nenhuma instalação, já que você pode abrir os arquivos em seu navegador localmente. Mas para simular uma conexão client-server, deve ser utilizado o [NodeJS](https://nodejs.org/en) e o pacote [http-server](https://www.npmjs.com/package/http-server).

Guia passo a passo:
1. Instale o NodeJS - dê preferência para a versão LTS.

    *Para usuários Windows há a alternativa via winget:*
    ```
    winget install OpenJS.NodeJS.LTS
    ```
2. Utilizando o `npm`, instale o pacote http-server globalmente.
    ```
    npm install --global http-server
    ```
3. Abra o terminal no diretório do projeto e use:
    ```
    http-server ./
    ```
Pronto, seu servidor http estará rodando na porta padrão `http://localhost:8080`. CASO necessite de mais informações, acesse a página do pacote [aqui](https://www.npmjs.com/package/http-server).

O arquivo `test-http.html` foi criado para testar o ambiente e a integração do HTML, CSS e JS.

## Projeto
Para essa parte da trilha do bootcamp, e de outras trilhas relacionadas ao uso de JavaScript, propõe-se a criação de uma *"pokedex"* web.
- Repositório com a solução do curso pode ser visto [aqui](https://github.com/digitalinnovationone/js-developer-pokedex).
- A versão desenvolvida por mim, pode ser vista [aqui](https://github.com/6r1nchy/pokedex-JS).

## Requisitos
Para realizar este pequeno projeto proposto, é necessário ter noções de:
- HTML ❗
- CSS ❗
- JavaScript ❗
- Git e GitHub
- NodeJS

❗ Obrigatório. 👈

## Referência
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web): se aprofunde ainda mais nos conceitos da Web apresentados neste conteúdo acessando o link da documentação oficial da Mozilla denominada "Iniciando na Internet";