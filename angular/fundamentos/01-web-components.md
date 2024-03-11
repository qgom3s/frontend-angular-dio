# Web Components

> Antes de mergulhar na utilização de um framework web, é necessário enteder o que são e como utilizar web components.

### O que são?
Web Components são um conjunto de tecnologias da web que permitem a criação de componentes reutilizáveis e personalizáveis para o desenvolvimento de aplicativos da web. Eles consistem em quatro principais tecnologias:

1. **Custom Elements**: Permitem aos desenvolvedores criar seus próprios elementos HTML personalizados com comportamentos e funcionalidades específicas. Esses elementos personalizados podem ser reutilizados em todo o aplicativo e até mesmo em diferentes projetos.

2. **Shadow DOM (DOM Sombreado)**: Fornece encapsulamento para os componentes, permitindo que seu conteúdo e estilos sejam isolados do restante do documento, evitando vazamentos de estilos e interferências indesejadas.

3. **HTML Templates**: Permitem definir fragmentos de código HTML que não são renderizados imediatamente na página, mas podem ser clonados e usados dinamicamente quando necessário. Isso é útil para criar modelos reutilizáveis de conteúdo que podem ser instanciados várias vezes.

4. **HTML Imports**: Essa tecnologia foi substituída pelo módulo ES6. Anteriormente, era utilizada para importar e reutilizar componentes HTML em outros documentos HTML, mas agora o padrão de módulos JavaScript (ES6) é amplamente utilizado para esse fim.

Juntos, esses recursos permitem a criação de componentes independentes e reutilizáveis que podem ser facilmente integrados em aplicativos da web. Os Web Components promovem a modularidade, facilitam a manutenção do código e aumentam a eficiência do desenvolvimento. Eles também podem ser usados em conjunto com frameworks como o Angular, o React ou o Vue.js, ampliando suas capacidades e possibilitando a construção de aplicativos mais poderosos e flexíveis.

### Criando Web Components
Para definir um componente puro usando Web Components com JavaScript, você precisa seguir os seguintes passos:

1. **Criar uma Classe para o Componente**:
   - Comece definindo uma classe para o seu componente. Isso encapsulará a lógica e o comportamento do componente. Por exemplo:

```javascript
class MeuComponente extends HTMLElement {
  constructor() {
    super();
    // Lógica do componente
  }
}
```

2. **Registrar o Componente**:
   - Após definir a classe, registre o componente usando o método `customElements.define()`. Este método aceita o nome do componente (um nome de tag HTML) e a classe do componente. Por exemplo:

```javascript
customElements.define('meu-componente', MeuComponente);
```

3. **Adicionar Lógica e Interface do Usuário**:
   - Dentro do construtor da classe, você pode adicionar a lógica específica do seu componente, como manipulação de eventos, atualizações de estado, etc. Além disso, você pode definir a interface do usuário do componente usando o método `this.innerHTML` ou criando elementos DOM programaticamente.

```javascript
class MeuComponente extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '<p>Este é o meu componente!</p>';
  }
}
```

4. **Utilizando o Componente**:
   - Após registrar o componente, você pode usá-lo em qualquer lugar em seu HTML simplesmente usando a tag personalizada que você definiu. Por exemplo:

```html
<meu-componente></meu-componente>
```

5. **Estilizando o Componente (Opcional)**:
   - Você também pode adicionar estilos ao seu componente definindo um estilo interno usando a tag `<style>` dentro do próprio componente.

```javascript
class MeuComponente extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '<p>Este é o meu componente!</p>';
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: blue;
        }
      </style>
      <p>Este é o meu componente!</p>
    `;
  }
}
```

Com esses passos, podemos definir e criar um componente puro usando Web Components com JavaScript. Isso oferece uma maneira poderosa de criar componentes reutilizáveis e encapsulados que podem ser usados em qualquer aplicativo da web, independentemente do framework.

### O que é 'Prop' e como utilizar
Em Web Components, uma "prop" é uma abreviação de "propriedade" e se refere a um mecanismo que permite passar dados para dentro de um componente personalizado (customizado). As props são usadas para comunicar informações do componente pai para o componente filho.

Ao definir um componente personalizado (usando Custom Elements), você pode configurá-lo para aceitar propriedades específicas. Essas propriedades podem ser definidas como atributos nos elementos HTML correspondentes ao componente personalizado.

Por exemplo, se você tiver um componente de botão personalizado que deseja que exiba um texto específico, você pode criar uma propriedade `text` que aceite esse texto e o exiba no botão. Aqui está um exemplo simplificado:

```javascript
class MeuBotao extends HTMLElement {
  constructor() {
    super();
    // Cria um botão no DOM shadow
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <button>${this.text}</button>
    `;
  }

  // Define a propriedade 'text'
  get text() {
    return this.getAttribute('text');
  }

  set text(value) {
    this.setAttribute('text', value);
  }
}

// Registra o componente
customElements.define('meu-botao', MeuBotao);
```

No exemplo acima, o componente `MeuBotao` tem uma propriedade `text` que aceita um texto como entrada. Quando você usa esse componente em seu HTML, você pode passar um valor para essa propriedade:

```html
<meu-botao text="Clique aqui"></meu-botao>
```

Dessa forma, as props são uma maneira de tornar seus componentes personalizados mais flexíveis e reutilizáveis, permitindo que você os configure de maneira dinâmica de acordo com as necessidades de seu aplicativo.

### Entendendo o conceito de 'build' em Web Components
O "build" de Web Components refere-se ao processo de preparar seus componentes web personalizados para uso em um ambiente de produção. Este processo geralmente envolve várias etapas, incluindo a compilação de arquivos de origem, otimização de recursos, minificação de código e outros ajustes necessários para garantir que seus componentes funcionem de forma eficiente e correta em diferentes navegadores e dispositivos.

Alguns dos principais aspectos do "build" de Web Components incluem:

1. **Compilação de código-fonte**: Se você estiver usando linguagens de marcação estendidas como TypeScript ou preprocessadores CSS como Sass, será necessário compilar esses arquivos em HTML, JavaScript e CSS puros que os navegadores possam entender.

2. **Minificação e otimização**: Para melhorar o desempenho do seu aplicativo, é comum minificar e otimizar seus arquivos de código-fonte. Isso inclui remover espaços em branco, comentários e outras redundâncias no código, além de otimizar imagens e outros recursos.

3. **Polyfills**: Dependendo dos recursos que você usa em seus componentes e do suporte do navegador, pode ser necessário incluir polyfills para garantir que seus componentes funcionem corretamente em navegadores mais antigos ou que não oferecem suporte completo para Web Components.

4. **Bundling**: Se você estiver usando vários componentes ou dependências, pode ser útil agrupar todos esses recursos em um único arquivo (ou vários arquivos) para reduzir o número de solicitações de rede e melhorar o tempo de carregamento do seu aplicativo.

5. **Testes automatizados**: Durante o processo de "build", também é comum executar testes automatizados para garantir que seus componentes estejam funcionando conforme o esperado e que nenhuma regressão tenha sido introduzida durante o desenvolvimento.

Resumindo, o "build" de Web Components é um conjunto de processos e etapas destinados a preparar seus componentes personalizados para produção, garantindo desempenho, compatibilidade e funcionalidade adequados em uma variedade de ambientes de navegador e dispositivos.

### Ao infinito e além com Web Components
Na verdade, há mais alguns conceitos e práticas que podem ser úteis ao trabalhar com Web Components:

1. **Encapsulamento**:
   - Um dos princípios fundamentais dos Web Components é o encapsulamento. Isso significa que o conteúdo, estilo e comportamento de um componente devem ser isolados do restante da página. O Shadow DOM é frequentemente usado para alcançar esse encapsulamento, garantindo que o CSS e o DOM do componente não vazem para o DOM pai e vice-versa.

2. **Eventos Personalizados**:
   - Além de aceitar props para receber dados do componente pai, os Web Components também podem disparar eventos personalizados para notificar o componente pai sobre a ocorrência de determinadas ações dentro do componente. Isso é útil para criar uma comunicação bidirecional entre componentes.

3. **Slots**:
   - Os slots são uma maneira de permitir que o conteúdo do componente seja inserido dinamicamente pelo usuário. Eles são especialmente úteis quando você deseja que um componente possa conter HTML arbitrário fornecido pelo usuário.

4. **Reatividade**:
   - Embora não seja uma característica intrínseca dos Web Components puros, você pode implementar algum tipo de sistema de reatividade em seus componentes para atualizar a interface do usuário em resposta a mudanças nos dados.

5. **Compatibilidade do Navegador**:
   - Ao usar Web Components puros, é importante considerar a compatibilidade do navegador, pois nem todos os recursos podem ser suportados em todos os navegadores sem o uso de polyfills.

6. **Ferramentas e Frameworks**:
   - Existem várias ferramentas e frameworks que podem facilitar o desenvolvimento de Web Components, como LitElement, StencilJS e Polymer. Essas ferramentas fornecem abstrações e utilitários que simplificam a criação e o gerenciamento de Web Components.

Embora esses conceitos não sejam obrigatórios para começar a usar Web Components, eles podem ser úteis ao trabalhar em projetos mais complexos ou ao tentar otimizar a reutilização e a modularidade do código. Se você entender esses conceitos básicos, estará bem preparado para começar a criar e usar Web Components em seus projetos.