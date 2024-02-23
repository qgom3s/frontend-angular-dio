# Single Page Application com Angular

> O Angular é uma excelente escolha para o desenvolvimento de Single Page Applications devido à sua estrutura de componentes, sistema de roteamento flexível e recursos avançados para o gerenciamento de estado da aplicação. Isso permite criar aplicativos web poderosos e responsivos que oferecem uma experiência de usuário moderna e envolvente.

Uma Single Page Application (SPA) é um tipo de aplicativo web que interage com o usuário carregando dinamicamente todas as suas páginas em uma única página, em vez de recarregar a página inteira a cada mudança de rota ou interação do usuário. Com o Angular, é fácil desenvolver SPAs devido à sua estrutura e recursos.

### Conceito de Single Page Application com Angular:

- **Roteamento de Páginas**:
   - O Angular fornece um módulo de roteamento que permite definir rotas para diferentes URLs e carregar os componentes correspondentes de forma dinâmica sem recarregar a página inteira.
   - Isso permite que os usuários naveguem pelo aplicativo sem a necessidade de recarregar a página, proporcionando uma experiência de usuário mais rápida e fluida.

- **Componentes Reutilizáveis**:
   - O Angular é baseado em componentes, o que significa que você pode criar componentes reutilizáveis que representam partes específicas da interface do usuário.
   - Esses componentes podem ser facilmente reutilizados em diferentes partes do aplicativo, o que promove a consistência e a manutenibilidade do código.

- **Carregamento Assíncrono de Conteúdo**:
   - Com o Angular, é possível carregar recursos e dados de forma assíncrona, reduzindo o tempo de carregamento inicial do aplicativo.
   - Isso é especialmente útil em SPAs, onde o conteúdo é carregado sob demanda à medida que o usuário navega pelas diferentes partes do aplicativo.

- **Estado da Aplicação**:
   - O Angular fornece mecanismos para gerenciar o estado da aplicação de forma eficaz, permitindo que os dados persistam entre as diferentes rotas e interações do usuário.
   - Isso garante uma experiência de usuário consistente e contínua, sem a perda de dados durante a navegação.


### Diretivas Estruturais

As diretivas estruturais em Angular são um recurso poderoso que permite alterar a estrutura do DOM (Document Object Model) com base em condições específicas. Elas permitem adicionar ou remover elementos do DOM, alterar a ordem dos elementos, e repetir elementos com base em uma coleção de dados. Existem três diretivas estruturais principais em Angular: `*ngIf`, `*ngFor` e `*ngSwitch`.

- **ngIf**:
   - **Funcionalidade**: A diretiva `*ngIf` é usada para renderizar ou não um elemento com base em uma expressão condicional. Se a expressão for avaliada como verdadeira, o elemento é renderizado no DOM, caso contrário, ele é removido do DOM.

        Exemplo:
     ```html
     <div *ngIf="mostrarElemento">Conteúdo a ser mostrado</div>
     ```
   
- **ngFor**:
   - **Funcionalidade**: A diretiva `*ngFor` é usada para repetir um elemento ou um conjunto de elementos com base em uma coleção de dados. Ela cria uma instância do elemento para cada item na coleção.

        Exemplo:
     ```html
     <ul>
       <li *ngFor="let item of itens">{{ item }}</li>
     </ul>
     ```

- **ngSwitch**:
   - **Funcionalidade**: A diretiva `*ngSwitch` é usada para exibir um dos vários elementos ou templates com base em uma expressão. Ela funciona de forma semelhante a uma instrução `switch-case` em outras linguagens.

        Exemplo:
     ```html
     <div [ngSwitch]="condicao">
       <div *ngSwitchCase="'A'">Conteúdo para a condição A</div>
       <div *ngSwitchCase="'B'">Conteúdo para a condição B</div>
       <div *ngSwitchDefault>Conteúdo padrão</div>
     </div>
     ```

Essas diretivas estruturais são componentes essenciais do Angular que permitem criar interfaces dinâmicas e reativas, respondendo a alterações nos dados e no estado do aplicativo. Elas são fundamentais para a criação de componentes Angular flexíveis e altamente interativos.

### Diretivas de Atributos

As diretivas de atributos em Angular são um tipo de diretiva que permite modificar o comportamento ou a aparência de elementos HTML adicionando ou manipulando atributos desses elementos. Elas são usadas para estender o HTML com funcionalidades específicas do Angular, como vinculação de dados, manipulação de eventos e interações com o DOM.

Vejamos alguns exemplos de diretivas de atributos em Angular:

- **ngModel**:
   - **Funcionalidade**: A diretiva `ngModel` é usada para criar vinculação de dados bidirecional entre elementos de entrada de formulário (como `<input>`, `<select>` e `<textarea>`) e propriedades do componente.

        Exemplo:
     ```html
     <input type="text" [(ngModel)]="nome">
     ```

- **ngClass**:
   - **Funcionalidade**: A diretiva `ngClass` permite adicionar ou remover classes CSS com base em expressões no código TypeScript do componente.
   
        Exemplo:
     ```html
     <div [ngClass]="{'destaque': destacar, 'grande': tamanhoGrande}">Conteúdo</div>
     ```

- **ngStyle**:
   - **Funcionalidade**: A diretiva `ngStyle` permite definir estilos CSS diretamente no template HTML com base em expressões no código TypeScript do componente.

        Exemplo:
     ```html
     <div [ngStyle]="{'color': corTexto, 'font-size': tamanhoFonte + 'px'}">Conteúdo</div>
     ```

- **ngIf** e **ngSwitch**:
   - **Funcionalidade**: Embora geralmente sejam consideradas diretivas estruturais, `ngIf` e `ngSwitch` também podem ser usadas como diretivas de atributos quando aplicadas a elementos existentes.

        Exemplo:
     ```html
     <div *ngIf="mostrarElemento">Conteúdo</div>
     ```

Então, os itens citados, são apenas algumas das diretivas de atributos disponíveis em Angular. Elas fornecem uma maneira poderosa de adicionar funcionalidades dinâmicas e interativas aos elementos HTML em seus aplicativos Angular.

### Recursos em Ação

Agora, irei criar uma aplicação simples em Angular que demonstra o uso das diretivas estruturais (`*ngIf`, `*ngFor`, `*ngSwitch`) e das diretivas de atributos (`ngModel`, `ngClass`, `ngStyle`). Esta aplicação terá uma lista de itens que podem ser filtrados, destacados e estilizados dinamicamente. Siga os passos abaixo e implemente o código:

1. Crie uma nova aplicação Angular usando o Angular CLI:
```bash
ng new minha-aplicacao-angular
```

2. Navegue até o diretório da aplicação recém criado:
```bash
cd minha-aplicacao-angular
```

3. Abra o arquivo `src/app/app.component.html` e substitua o conteúdo pelo seguinte código:
```html
<h1>Minha Aplicação Angular</h1>

<!-- Exemplo de *ngIf -->
<div *ngIf="mostrarElemento">
  <p>Este elemento será mostrado se mostrarElemento for verdadeiro.</p>
</div>

<!-- Exemplo de *ngFor -->
<ul>
  <li *ngFor="let item of itens">{{ item }}</li>
</ul>

<!-- Exemplo de *ngSwitch -->
<div [ngSwitch]="condicao">
  <div *ngSwitchCase="'A'">Conteúdo para a condição A</div>
  <div *ngSwitchCase="'B'">Conteúdo para a condição B</div>
  <div *ngSwitchDefault>Conteúdo padrão</div>
</div>

<!-- Exemplo de ngModel -->
<input type="text" [(ngModel)]="nome" placeholder="Digite seu nome">

<!-- Exemplo de ngClass -->
<div [ngClass]="{'destaque': destacar, 'grande': tamanhoGrande}">Este texto pode ser destacado e grande</div>

<!-- Exemplo de ngStyle -->
<div [ngStyle]="{'color': corTexto, 'font-size': tamanhoFonte + 'px'}">Este texto pode ter estilo dinâmico</div>
```

4. Abra o arquivo `src/app/app.component.ts` e adicione o seguinte código para definir as propriedades e métodos necessários:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarElemento: boolean = true;
  itens: string[] = ['Item 1', 'Item 2', 'Item 3'];
  condicao: string = 'A';
  nome: string = '';
  destacar: boolean = false;
  tamanhoGrande: boolean = false;
  corTexto: string = 'black';
  tamanhoFonte: number = 16;
}
```

5. Abra o arquivo `src/app/app.component.css` e adicione o seguinte código para estilizar os elementos:
```css
.destaque {
  background-color: yellow;
}

.grande {
  font-size: 24px;
}
```

6. Execute a aplicação usando o Angular CLI:
```bash
ng serve
```

7. Abra um navegador e navegue até `http://localhost:4200` para ver a aplicação em funcionamento.

Este exemplo demonstra o uso das diretivas estruturais (`*ngIf`, `*ngFor`, `*ngSwitch`) e das diretivas de atributos (`ngModel`, `ngClass`, `ngStyle`) em uma aplicação Angular simples. 

*Tips*: Experimente modificar as propriedades no arquivo `app.component.ts` para ver as alterações refletidas dinamicamente na aplicação!