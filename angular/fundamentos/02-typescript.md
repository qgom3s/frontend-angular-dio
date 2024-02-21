# TypeScript para Angular

> O TypeScript e o Angular estão intimamente ligados, com o Angular sendo desenvolvido em TypeScript e aproveitando seus recursos para fornecer um ambiente de desenvolvimento moderno, produtivo e seguro para a construção de aplicativos da web escaláveis e robustos.

### O que é e por que utilizar TypeScript
TypeScript é um superset (ou seja, uma linguagem que estende outra linguagem) da linguagem JavaScript que adiciona recursos de tipagem estática, entre outras funcionalidades, ao JavaScript. Aqui estão algumas razões pelas quais se deve considerar o uso do TypeScript:

1. **Tipagem Estática**: TypeScript permite a declaração de tipos de variáveis, parâmetros de função e retorno de função. Isso ajuda a capturar erros de digitação e erros lógicos em tempo de compilação, proporcionando um código mais robusto e menos propenso a erros.

2. **Intellisense Aprimorado**: Como o TypeScript entende os tipos de dados, as IDEs (Integrated Development Environments) podem fornecer sugestões de código mais inteligentes (conhecido como Intellisense) enquanto você escreve código, o que aumenta a produtividade e reduz a necessidade de consulta à documentação.

3. **Maior Escalabilidade**: Em projetos grandes e complexos, o TypeScript pode ajudar a manter o código mais organizado e fácil de entender, tornando mais fácil para equipes grandes colaborarem em um código base comum.

4. **Facilidade de Manutenção**: Com tipagem estática e uma sintaxe mais expressiva, o TypeScript pode tornar o código mais legível e compreensível, facilitando a manutenção e a resolução de problemas em longo prazo.

5. **Compatibilidade com JavaScript**: Como o TypeScript é um superset de JavaScript, todo código JavaScript existente é automaticamente código TypeScript válido. Isso permite que você adote o TypeScript gradualmente em projetos existentes, sem a necessidade de reescrever todo o código.

6. **Ecossistema Forte**: TypeScript é desenvolvido pela Microsoft e tem um ecossistema robusto de ferramentas e bibliotecas que o suportam. Isso inclui bibliotecas populares como Angular, React e Vue.js, que oferecem suporte oficial ao TypeScript e fornecem definições de tipos para suas APIs.

Portanto, o TypeScript é uma ferramenta poderosa que ajuda a escrever código JavaScript mais seguro, escalável e fácil de manter, especialmente em projetos grandes e complexos. Seus recursos de tipagem estática e ferramentas de desenvolvimento integradas podem melhorar significativamente a qualidade e a eficiência do seu código.

### Instalando TypeScript
Aqui está um resumo passo a passo de como instalar e começar a usar o TypeScript localmente, além de algumas dicas úteis.

1. **Instalando o TypeScript Localmente**:
   - Você pode instalar o TypeScript globalmente via npm (Node Package Manager) usando o seguinte comando no terminal:
     ```
     npm install -g typescript
     ```
   - Isso instalará o TypeScript globalmente em seu sistema, permitindo que você use o comando `tsc` (TypeScript Compiler) em qualquer lugar.

2. **Rodando um Código TypeScript**:
   - Depois de instalar o TypeScript, você pode criar um arquivo TypeScript com extensão `.ts` e usar o comando `tsc` para compilá-lo para JavaScript.
     - Por exemplo, crie um arquivo `exemplo.ts` com o seguinte conteúdo:
       ```typescript
       function greet(name: string) {
         console.log(`Hello, ${name}!`);
       }

       greet('World');
       ```
     - No terminal, execute o comando:
       ```
       tsc exemplo.ts
       ```
   - Isso irá gerar um arquivo JavaScript chamado `exemplo.js` com o código compilado.

3. **Criando e Configurando o Arquivo tsconfig.json**:
   - O arquivo `tsconfig.json` é usado para configurar as opções do compilador TypeScript para um projeto.
   - Você pode criar manualmente um arquivo `tsconfig.json` na raiz do seu projeto ou usar o comando `tsc --init` para criar um arquivo de configuração padrão.
   - Dentro do `tsconfig.json`, você pode configurar opções como o alvo da versão do ECMAScript, diretório de saída, configurações de módulos, entre outros.

4. **Exemplo de Script de Execução**:
   - Depois de configurar o `tsconfig.json`, você pode usar o comando `tsc` sem argumentos para compilar todos os arquivos TypeScript no diretório do projeto com base nas configurações fornecidas no `tsconfig.json`.
   - Você também pode adicionar um script de execução em seu arquivo `package.json` para automatizar o processo de compilação. Por exemplo:
     ```json
     "scripts": {
       "build": "tsc"
     }
     ```
   - Agora você pode executar `npm run build` no terminal para compilar seu código TypeScript.

Com esses passos, podemos começar a usar o TypeScript localmente em nossos projetos, configurar as opções do compilador com o arquivo `tsconfig.json` e automatizar o processo de compilação usando scripts npm.

### Tipos e Objetos no TypeScript
O passo seguinte é entender conceitos e recursos básicos da tecnologia. Abaixo está um resumo sobre os tipos no TypeScript:

1. **Tipos de Variáveis**:
   - No TypeScript, você pode definir tipos para variáveis, como `number`, `string`, `boolean`, `any`, etc.

     ```typescript
     let numero: number = 10;
     let texto: string = "Olá, mundo!";
     let ativo: boolean = true;
     let qualquerCoisa: any = "Isso pode ser qualquer tipo";
     ```

2. **Objects**:
   - Você pode definir o tipo de um objeto usando interfaces ou tipos personalizados.

     ```typescript
     interface Pessoa {
       nome: string;
       idade: number;
     }

     let pessoa: Pessoa = {
       nome: "João",
       idade: 30
     };
     ```

3. **Arrays**:
   - Arrays podem conter um tipo específico de dados.

     ```typescript
     let numeros: number[] = [1, 2, 3, 4, 5];
     ```

4. **Arrays de Multi-Types**:
   - Arrays podem conter múltiplos tipos de dados usando a sintaxe `Union`.

     ```typescript
     let variosTipos: (number | string)[] = [1, "dois", 3, "quatro", 5];
     ```

5. **Tuplas**:
   - Tuplas permitem expressar um array onde o tipo de um número fixo de elementos é conhecido, mas não necessariamente o mesmo.

     ```typescript
     let tupla: [string, number] = ["abc", 123];
     ```

6. **Dates**:
   - TypeScript oferece suporte nativo ao tipo `Date` para lidar com datas.

     ```typescript
     let hoje: Date = new Date();
     ```

### Funções no TypeScript
As funções podem ser declaradas de várias formas, mas a sintase básica é a seguinte:

1. **Funções Simples**:
   - As funções simples são aquelas que recebem argumentos, realizam alguma operação e, opcionalmente, retornam um valor.

     ```typescript
     function soma(a: number, b: number): number {
       return a + b;
     }

     let resultado: number = soma(5, 3); // Resultado será 8
     ```

2. **Funções de Multi Tipos**:
   - Em TypeScript, você pode definir funções que aceitam diferentes tipos de argumentos usando `Union Types`.

     ```typescript
     function imprimirIdadeOuNome(valor: number | string): void {
       if (typeof valor === "number") {
         console.log(`A idade é ${valor}`);
       } else {
         console.log(`O nome é ${valor}`);
       }
     }

     imprimirIdadeOuNome(25); // Saída: A idade é 25
     imprimirIdadeOuNome("João"); // Saída: O nome é João
     ```

3. **Funções Async**:
   - Funções assíncronas são aquelas que executam operações assíncronas e retornam uma `Promise`.

     ```typescript
     function aguardar(ms: number): Promise<void> {
       return new Promise<void>((resolve) => {
         setTimeout(() => {
           resolve();
         }, ms);
       });
     }

     async function exemploAsync(): Promise<void> {
       console.log("Início da função async");
       await aguardar(2000); // Aguarda 2 segundos
       console.log("Fim da função async após aguardar");
     }

     exemploAsync();
     ```

   - Neste exemplo, a função `aguardar` retorna uma `Promise` que é resolvida após um certo período de tempo. A função `exemploAsync` espera 2 segundos antes de continuar com a execução.

### Interfaces no TypeScript
Interfaces e tipos (`type`) são dois recursos fundamentais do TypeScript que permitem definir a forma de objetos e outras estruturas de dados. Aqui está uma comparação entre eles:

1. **Interfaces**:

- **Definição**: As interfaces são usadas para definir contratos para objetos. Elas podem descrever a forma de um objeto, incluindo os tipos de propriedades e métodos que ele deve ter.
  
- **Extensibilidade**: As interfaces podem ser estendidas por outras interfaces usando a palavra-chave `extends`, permitindo a composição de contratos.
  
- **Compatibilidade Estrutural**: As interfaces são verificadas de forma mais extensiva em relação à sua forma (estrutura) durante a compilação. Isso significa que um objeto pode ser considerado compatível com uma interface se ele possuir todas as propriedades e métodos definidos na interface, independentemente do nome das propriedades.

- **Declaração Global**: As interfaces são frequentemente usadas para definir contratos em nível global, facilitando a reutilização e a interoperabilidade entre diferentes partes de um sistema.

    ```typescript
    interface Pessoa {
    nome: string;
    idade: number;
    saudacao(): string;
    }
    ```

2. **Types (`type`)**:

- **Definição**: Os tipos (`type`) são usados para definir tipos de dados. Eles podem ser usados para definir qualquer tipo de dado, não apenas formas de objetos.

- **Atribuições**: Os tipos (`type`) podem ser atribuídos a qualquer valor, não apenas a objetos. Eles são mais versáteis e podem ser usados para definir tipos complexos, como uniões (`union types`) e interseções (`intersection types`).

- **Mapeamento de Tipos**: Você pode usar `type` para criar tipos complexos ou para mapear tipos existentes para criar novos tipos.

- **Compatibilidade Nominal**: Os tipos (`type`) são verificados com base em sua identidade nominal, o que significa que duas variáveis com a mesma forma, mas definidas usando tipos diferentes, não são consideradas compatíveis.

    ```typescript
    type Coordenada = [number, number];
    ```

Como podemos ver, interfaces e tipos (`type`) são semelhantes em muitos aspectos, mas têm algumas diferenças importantes em termos de extensibilidade, compatibilidade e uso. Em geral, interfaces são mais adequadas para definir contratos para objetos, enquanto os tipos (`type`) são mais flexíveis e versáteis, podendo ser usados para definir tipos de dados complexos e reutilizáveis.

### Classes no TypeScript
No TypeScript, assim como no JavaScript, as classes são uma forma de definir estruturas de dados e comportamentos, seguindo o paradigma de programação orientada a objetos (OOP). Aqui está uma explicação dos conceitos de classes no TypeScript, incluindo modificadores de acesso e subclasses:

1. **Classes**:
   - As classes são modelos para criar objetos. Elas podem conter propriedades (variáveis) e métodos (funções) que descrevem o comportamento do objeto.
   - As classes no TypeScript seguem a mesma sintaxe que as classes no JavaScript ES6.  

   ```typescript
   class Pessoa {
     // Propriedades
     nome: string;
     idade: number;

     // Construtor
     constructor(nome: string, idade: number) {
       this.nome = nome;
       this.idade = idade;
     }

     // Método
     saudacao(): string {
       return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
     }
   }

   // Criando uma instância da classe Pessoa
   let pessoa1 = new Pessoa("João", 30);
   console.log(pessoa1.saudacao()); // Saída: Olá, meu nome é João e tenho 30 anos.
   ```

2. **Modificadores de Acesso**:
   - Os modificadores de acesso (`public`, `private`, `protected`) controlam a visibilidade das propriedades e métodos dentro da classe.
   - `public`: A propriedade ou método pode ser acessado de fora da classe.
   - `private`: A propriedade ou método só pode ser acessado dentro da própria classe.
   - `protected`: A propriedade ou método só pode ser acessado dentro da própria classe e de suas subclasses.

   ```typescript
   class Carro {
     private modelo: string;
     public ano: number;
     protected motor: string;

     constructor(modelo: string, ano: number, motor: string) {
       this.modelo = modelo;
       this.ano = ano;
       this.motor = motor;
     }

     acelerar(): void {
       console.log("Acelerando...");
     }
   }

   let carro1 = new Carro("Toyota", 2022, "V8");
   console.log(carro1.modelo); // Erro: Property 'modelo' is private and only accessible within class 'Carro'.
   ```

3. **Subclasses**:
   - As subclasses são classes que herdam propriedades e métodos de uma classe pai (superclasse).
   - Uma subclasse pode adicionar novas propriedades e métodos ou sobrescrever os existentes.
   - As subclasses podem acessar membros `protected` da superclasse.

   ```typescript
   class CarroEsportivo extends Carro {
     private velocidadeMaxima: number;

     constructor(modelo: string, ano: number, motor: string, velocidadeMaxima: number) {
       super(modelo, ano, motor);
       this.velocidadeMaxima = velocidadeMaxima;
     }

     mostrarDetalhes(): void {
       console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}, Motor: ${this.motor}, Velocidade Máxima: ${this.velocidadeMaxima}`);
     }
   }

   let ferrari = new CarroEsportivo("Ferrari", 2023, "V12", 350);
   console.log(ferrari.mostrarDetalhes()); // Saída: Modelo: Ferrari, Ano: 2023, Motor: V12, Velocidade Máxima: 350
   ```

Com esses conceitos, podemos criar classes com propriedades e métodos, controlar o acesso a eles usando modificadores de acesso e definir hierarquias de classes com subclasses no TypeScript.

### Generics
Em TypeScript, os generics são uma maneira de criar componentes que podem funcionar com uma variedade de tipos, permitindo a reutilização de código de forma flexível e segura. Os generics resolvem o problema da repetição de código ao lidar com diferentes tipos de dados em funções, classes e interfaces.

Imagine que você tenha uma função que inverte uma matriz. Você pode escrever a função para trabalhar apenas com matrizes de números, mas e se você quiser inverter uma matriz de strings ou de qualquer outro tipo? Você teria que escrever funções separadas para cada tipo de dado, resultando em duplicação de código. Os generics resolvem esse problema, permitindo que você escreva funções, classes e interfaces que funcionam com qualquer tipo de dados.

**Como Usar na Prática:**

1. **Em Funções:**
   - Defina o tipo genérico entre colchetes `<>` e use-o como tipo dos parâmetros e/ou retorno da função.
   ```typescript
   function inverterArray<T>(array: T[]): T[] {
       return array.reverse();
   }

   let numerosInvertidos: number[] = inverterArray([1, 2, 3, 4, 5]);
   let stringsInvertidas: string[] = inverterArray(["a", "b", "c", "d", "e"]);
   ```

2. **Em Classes:**
   - Use generics para criar classes que possam trabalhar com vários tipos de dados.
   ```typescript
   class Pilha<T> {
       private elementos: T[] = [];

       push(elemento: T): void {
           this.elementos.push(elemento);
       }

       pop(): T | undefined {
           return this.elementos.pop();
       }
   }

   let pilhaDeNumeros = new Pilha<number>();
   pilhaDeNumeros.push(1);
   pilhaDeNumeros.push(2);
   console.log(pilhaDeNumeros.pop()); // Saída: 2

   let pilhaDeStrings = new Pilha<string>();
   pilhaDeStrings.push("a");
   pilhaDeStrings.push("b");
   console.log(pilhaDeStrings.pop()); // Saída: b
   ```

3. **Em Interfaces:**
   - Use generics para criar interfaces que possam ser implementadas por classes com diferentes tipos.
   ```typescript
   interface Par<C, V> {
       chave: C;
       valor: V;
   }

   let parStringNumber: Par<string, number> = { chave: "idade", valor: 30 };
   let parNumberBoolean: Par<number, boolean> = { chave: 1, valor: true };
   ```

### Decorators
Os decorators são uma característica experimental em TypeScript que permitem adicionar metadados a classes, métodos, acessadores, propriedades e parâmetros de funções. Eles fornecem uma maneira de modificar ou estender o comportamento de classes e membros de classes de forma declarativa.

Os decorators são expressões que são avaliadas na hora da definição, permitindo a adição de funcionalidades extras a elementos de código. Eles são marcados pelo prefixo `@` seguido de um identificador que representa a função do decorator. Os decorators podem ser aplicados usando a sintaxe `@DecoratorName` acima do elemento de código que você deseja decorar.

Os decorators podem ser usados para uma variedade de finalidades, incluindo:

1. **Logging e Rastreamento**: Adicionar lógica de registro para métodos.
2. **Validação de Entrada**: Validar argumentos de métodos.
3. **Geração Automática de Código**: Adicionar funcionalidades automaticamente a classes e métodos.
4. **Controle de Acesso**: Restringir o acesso a certos membros de classe.
5. **Injeção de Dependência**: Injetar dependências automaticamente em classes.

Exemplo de uso de decorators em TypeScript:

```typescript
function logarClasse(constructor: Function) {
    console.log("Classe registrada:", constructor);
}

@logarClasse
class Exemplo {
    constructor() {
        console.log("Instância criada");
    }
}

// Saída:
// Classe registrada: class Exemplo
// Instância criada
```

No exemplo acima, `@logarClasse` é um decorator de classe que registra a classe `Exemplo` ao ser definida. Quando uma instância da classe `Exemplo` é criada, a mensagem "Instância criada" é registrada no console.

Os decorators podem ser aplicados a várias partes de um código TypeScript, como:

- **Classes**
- **Métodos**
- **Acessadores (getters e setters)**
- **Propriedades**
- **Parâmetros de métodos e funções**

### TS Node Dev
TS Node Dev é uma ferramenta de linha de comando que ajuda no desenvolvimento de aplicativos TypeScript em Node.js, fornecendo funcionalidades para compilar automaticamente o código TypeScript em tempo real e reiniciar o servidor Node.js sempre que houver alterações nos arquivos.

**Algumas características principais do TS Node Dev:**

1. **Compilação Automática**: TS Node Dev monitora os arquivos TypeScript no diretório do projeto e automaticamente compila o código TypeScript em JavaScript sempre que um arquivo é modificado.

2. **Reinício Automático do Servidor**: Além de compilar o código TypeScript, TS Node Dev também reinicia automaticamente o servidor Node.js sempre que ocorrem alterações nos arquivos fonte. Isso significa que você pode desenvolver sem interrupções, com o servidor sendo reiniciado automaticamente para refletir as mudanças feitas no código.

3. **Suporte para Configuração Personalizada**: TS Node Dev oferece suporte para configuração personalizada usando um arquivo `tsconfig.json`, onde você pode definir as opções de compilação do TypeScript.

4. **Integração com Nodemon**: Internamente, TS Node Dev utiliza o Nodemon para reiniciar o servidor Node.js. Isso proporciona uma experiência de desenvolvimento suave e eficiente, especialmente em ambientes de desenvolvimento.

5. **Uso Simples**: TS Node Dev é fácil de usar e pode ser instalado globalmente ou localmente no projeto, dependendo das suas preferências. Você pode executá-lo diretamente do terminal sem a necessidade de configurações complexas.

**Usando o TS Node Dev:**

Supondo que você tenha um projeto Node.js com arquivos TypeScript, você pode iniciar o TS Node Dev executando o seguinte comando no terminal, no diretório do projeto:

```
ts-node-dev src/index.ts
```

Este comando irá iniciar o TS Node Dev e monitorar o arquivo `index.ts` no diretório `src`. Sempre que houver alterações neste arquivo ou em outros arquivos TypeScript no diretório, o TS Node Dev irá automaticamente compilar o código TypeScript e reiniciar o servidor Node.js para refletir as mudanças.

### Importancia do JavaScript no aprendizado de TypeScript
O TypeScript é uma extensão natural do JavaScript, e muitos dos conceitos e práticas que você já conhece e utiliza em JavaScript podem ser aplicados diretamente ao TypeScript. Isso torna a transição para o TypeScript suave e permite que você se beneficie das vantagens adicionais que o TypeScript oferece, como tipagem estática e ferramentas de desenvolvimento avançadas.

Aqui estão algumas maneiras pelas quais você pode aproveitar seu conhecimento de JavaScript ao usar TypeScript:

1. **Sintaxe Familiar**: A sintaxe básica do TypeScript é muito semelhante à do JavaScript, então se você já está familiarizado com JavaScript, aprender TypeScript será relativamente fácil.

2. **Tipos Opcionais**: Enquanto o TypeScript adiciona recursos de tipagem estática ao JavaScript, você não é obrigado a usar tipos em todo o seu código. Você pode gradualmente adicionar tipagem aos seus projetos conforme necessário, o que significa que você pode começar a escrever código TypeScript com a mesma abordagem que você usaria em JavaScript puro.

3. **Uso de Bibliotecas e Frameworks**: Como o TypeScript é compatível com JavaScript, você pode continuar usando todas as bibliotecas e frameworks JavaScript existentes em seus projetos TypeScript. Isso significa que você pode continuar aproveitando todo o ecossistema de ferramentas e recursos disponíveis no mundo JavaScript.

4. **Integração de Ferramentas**: Muitas das ferramentas de desenvolvimento e utilitários que você já usa com JavaScript também são compatíveis com TypeScript. Por exemplo, ferramentas de construção como Webpack, Babel e Parcel têm suporte total ao TypeScript, permitindo que você incorpore facilmente TypeScript em seus fluxos de trabalho existentes.

5. **Migração Gradual**: Se você já tem um projeto JavaScript existente, pode migrá-lo gradualmente para TypeScript, começando com pequenas partes do código e adicionando gradualmente tipagem estática conforme necessário. Isso permite que você aproveite os benefícios do TypeScript sem a necessidade de reescrever todo o seu código.

Reaproveitar o conhecimento de JavaScript ao trabalhar com TypeScript é uma vantagem significativa, pois o TypeScript é uma superset da linguagem JavaScript. Isso significa que todo código JavaScript válido é automaticamente código TypeScript válido.