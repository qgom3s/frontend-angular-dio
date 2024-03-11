# Ecossistema do Framework Angular

> A arquitetura do Angular segue o padrão baseado em componentes e utilizado amplamente para a criação de aplicativos Single-Page Applications (SPAs).

### Pré-requisitos para utilizar o Angular
- HTML e CSS;
- Node, NPM e,
- JavaScript e TypeScript.

### Angular vs AngularJS
Angular e AngularJS são dois frameworks para desenvolvimento de aplicações web front-end mantidos pelo Google. No entanto, existem diferenças significativas entre eles:

- **AngularJS (Angular 1.x)**:
   - AngularJS é a primeira versão do framework, lançada em 2010.
   - Baseado em JavaScript puro.
   - Usa o padrão MVC (Model-View-Controller) para organizar o código.
   - Usa o conceito de two-way data binding, onde qualquer mudança no modelo reflete automaticamente na visualização e vice-versa.
   - Usa diretivas para adicionar funcionalidades HTML estendidas.
   - Usa o sistema de injeção de dependência (DI) para gerenciar dependências de componentes.

- **Angular (Angular 2+)**:
   - Angular é a reescrita completa do AngularJS, lançada em 2016.
   - Baseado em TypeScript, uma superset do JavaScript que adiciona tipagem estática e outras funcionalidades.
   - Usa o conceito de componentização, onde a aplicação é dividida em componentes reutilizáveis.
   - Usa o sistema de bidirecional data flow, onde os dados fluem unidirecionalmente do componente pai para o filho.
   - Usa o Angular CLI (Command Line Interface) para gerenciar e automatizar tarefas de desenvolvimento.
   - Usa o Angular Universal para renderização do lado do servidor (SSR) para melhorar o desempenho e a otimização para mecanismos de busca (SEO).
   - Usa o Angular Ivy como mecanismo de renderização e compilação de templates, melhorando o desempenho e reduzindo o tamanho do código.

### Camadas de Responsibilidade
Um aplicativo web Angular, é organizado em quatro camadas principais que são:

1. **Componentes**:
   - Os componentes são os blocos de construção fundamentais de um aplicativo Angular.
   - Cada componente encapsula uma parte específica da interface do usuário e seu comportamento associado.
   - Eles são compostos por um template HTML, estilos CSS e uma classe TypeScript que define a lógica e o estado do componente.
   - Os componentes são organizados em uma hierarquia de árvore e se comunicam por meio de entradas e saídas, eventos e serviços.

2. **Gerenciamento de Estados**:
   - O gerenciamento de estados é essencial para controlar o estado da aplicação em diferentes pontos e componentes.
   - O Angular oferece várias opções para gerenciar estados, como serviços e observables. Além disso, a biblioteca NgRx é uma opção para gerenciamento de estados baseado em fluxos de dados unidirecionais (Redux-like).

   - O estado da aplicação pode incluir dados do usuário, dados recuperados de APIs, flags de controle, etc.

3. **Roteamento**:
   - O roteamento é responsável por navegar entre diferentes visualizações e estados da aplicação.
   - O Angular Router é o mecanismo de roteamento integrado ao Angular, permitindo a definição de rotas e a navegação entre elas.
   - As rotas são mapeadas para componentes específicos e podem incluir parâmetros, consultas e até mesmo rotas aninhadas.

4. **Renderização**:
   - A renderização é o processo de transformar os componentes, modelos e dados em uma visualização renderizada na tela.
   - O Angular utiliza um mecanismo de renderização baseado em templates HTML e detecção de alterações para atualizar dinamicamente a interface do usuário conforme o estado da aplicação muda.
   - A renderização no Angular é otimizada para melhor desempenho, com estratégias como detecção de mudanças onPush, trackBy para listas e outras técnicas para minimizar o tempo de renderização e maximizar a eficiência.

### Hello Angular!
Angular é um framework de desenvolvimento front-end mantido pelo Google, utilizado para criar aplicativos web dinâmicos e interativos. Ele utiliza a linguagem TypeScript e adota uma abordagem baseada em componentes para organizar e reutilizar o código. Angular oferece recursos poderosos, como ligação de dados bidirecional, injeção de dependência, roteamento e gerenciamento de estado, facilitando a criação de aplicativos escaláveis e robustos. Com uma comunidade ativa, documentação abrangente e suporte a ferramentas modernas de desenvolvimento, Angular é uma escolha popular para desenvolvedores que buscam construir aplicações web modernas e eficientes.

### Entendendo um código Angular
Aqui está um exemplo simples de um aplicativo Angular que exibe uma lista de itens:

1. Primeiro, você precisa configurar seu ambiente Angular. Certifique-se de ter o Angular CLI instalado globalmente. Se não tiver, você pode instalá-lo usando o seguinte comando:
```bash
npm install -g @angular/cli
```

2. Em seguida, crie um novo projeto Angular usando o Angular CLI:
```bash
ng new meu-projeto-angular
```

3. Navegue até o diretório do seu projeto e crie um novo componente chamado `lista-itens`:
```bash
cd meu-projeto-angular
ng generate component lista-itens
```

4. Agora, você pode editar o componente `lista-itens` para exibir uma lista de itens. Abra o arquivo `lista-itens.component.html` e adicione o seguinte código:
```html
<h2>Lista de Itens</h2>
<ul>
  <li *ngFor="let item of itens">{{ item }}</li>
</ul>
```

5. Em seguida, abra o arquivo `lista-itens.component.ts` e defina os itens que serão exibidos na lista. Você pode adicionar uma matriz de itens à classe do componente:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent {
  itens: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
```

6. Por fim, você precisa incluir o componente `lista-itens` em algum lugar do seu aplicativo. Por exemplo, você pode adicioná-lo ao template do componente `app.component.html` (o componente raiz):
```html
<h1>Meu Aplicativo Angular</h1>
<app-lista-itens></app-lista-itens>
```

Agora, ao executar o aplicativo Angular usando `ng serve`, você verá uma página exibindo a lista de itens "Item 1", "Item 2" e "Item 3".

O que acontece?
- Este exemplo cria um componente Angular chamado `lista-itens` usando o Angular CLI.
- O componente `lista-itens` possui um template HTML que utiliza a diretiva estrutural `*ngFor` para iterar sobre uma lista de itens e exibi-los em uma lista não ordenada (`<ul>`).
- A lista de itens é definida na classe do componente TypeScript como uma matriz de strings.
- Por fim, o componente `lista-itens` é incluído no template do componente raiz `app.component.html`, onde será renderizado quando o aplicativo Angular for executado.

### Referencia
- A principal fonte é a [documentação oficial](https://angular.io/docs) que é completa e com tutoriais passo a passo dos principais recursos do framework.