# JavaScript: Resumo de Estudo

Notas sobre os temas abordados nos cursos de JavaScript do bootcamp Coding The Future Banco PAN - Desenvolvimento Frontend com Angular - cujo o foco é fixar os fundamentos de frontend.

## Introdução ao JavaScript
JavaScript é uma linguagem de programação de alto nível, amplamente utilizada para criar interatividade em páginas web. Desenvolvida inicialmente para manipular o lado do cliente (front-end), hoje também é empregada no lado do servidor (back-end). Abordando uma sintaxe flexível e fácil de aprender, JavaScript permite aos desenvolvedores criar experiências dinâmicas para os usuários, manipular o DOM (Modelo de Objeto de Documento), responder a eventos, realizar requisições assíncronas e muito mais.

Principais características incluem:

- **Interatividade no Front-End**: Permite a criação de interfaces dinâmicas e reativas.
- **Manipulação do DOM**: Facilita a atualização e modificação de elementos em tempo real.
- **Assincronia com AJAX e Promises**: Possibilita a execução de operações sem bloquear a execução do código.
- **Suporte em Navegadores**: Integrado nativamente nos navegadores, tornando-o uma parte essencial do desenvolvimento web.

Se você está começando com JavaScript, explorar os fundamentos, como variáveis, estruturas de controle de fluxo (if, else, loops), funções, e objetos, é um bom ponto de partida para construir uma base sólida.

### Variáveis e Operadores
Uma variável é um espaço de armazenamento nomeado que contém dados ou valores em um programa JavaScript. Utilizamos palavras-chave como `var`, `let` ou `const` para declarar variáveis, e elas podem armazenar diferentes tipos de dados, como números, strings, booleanos, objetos, entre outros. Variáveis fornecem uma maneira flexível de manipular e referenciar dados durante a execução do programa.

- **Declaração de Variáveis**: Utiliza-se `var`, `let`, ou `const` para declarar variáveis.
  ```javascript
  var numero = 10;
  let nome = "John";
  const PI = 3.14;
  ```

- **Tipos de Dados**: JavaScript é dinamicamente tipado, permitindo variáveis armazenarem diferentes tipos de dados.
  ```javascript
  var inteiro = 42;
  var texto = "Olá, mundo!";
  var booleano = true;
  ```
Já os operadores em JavaScript são símbolos especiais que realizam operações entre valores ou variáveis. Existem operadores aritméticos para realizar cálculos matemáticos, operadores de atribuição para atribuir valores a variáveis, operadores de comparação para comparar valores, operadores lógicos para realizar operações booleanas, e assim por diante. Os operadores são fundamentais para a construção de expressões e lógica em programas JavaScript, permitindo a manipulação eficiente de dados.
- **Aritméticos**: Realizam operações matemáticas.
  ```javascript
  var soma = 5 + 3;
  var subtracao = 10 - 4;
  ```

- **Atribuição**: Atribui valores a variáveis.
  ```javascript
  var x = 10;
  x += 5; // x agora é 15
  ```

- **Comparação**: Comparam valores e retornam um resultado booleano.
  ```javascript
  var igual = (3 === "3"); // false
  var diferente = (4 !== 2); // true
  ```

- **Lógicos**: Realizam operações lógicas entre valores booleanos.
  ```javascript
  var and = (true && false); // false
  var or = (true || false); // true
  ```

- **Concatenação (Strings)**: Combina strings.
  ```javascript
  var saudacao = "Olá" + " " + "Mundo!";
  ```
Entender o uso adequado de variáveis e operadores é crucial para a manipulação eficiente de dados e a construção de lógica em programas JavaScript e avançar no aprendizado de desenvolvimento de software.

### Condicionais
Uma estrutura condicional em JavaScript permite que o programa execute diferentes blocos de código com base em uma condição específica. Isso possibilita a tomada de decisões dinâmicas durante a execução do programa, adaptando o comportamento do código de acordo com as circunstâncias.

As estruturas condicionais são fundamentais para controlar o fluxo de execução em programas JavaScript. As principais construções condicionais incluem:
- `if`
    ```javascript
    var idade = 18;

    if (idade >= 18) {
        console.log("Você é maior de idade.");
    }
    ```

- `else`
    ```javascript
    var idade = 16;

    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
    ```

- `else if`
    ```javascript
    var hora = 14;

    if (hora < 12) {
        console.log("Bom dia!");
    } else if (hora < 18) {
        console.log("Boa tarde!");
    } else {
        console.log("Boa noite!");
    }
    ```

- Operador Ternário
    ```javascript
    var resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
    console.log(resultado);
    ```
Portanto, as estruturas condicionais permitem que o código responda dinamicamente às condições específicas, executando diferentes blocos de código com base nas avaliações booleanas. Essa flexibilidade é crucial para a implementação de lógicas complexas em programas JavaScript.

### Estruturas de Repetição
Uma estrutura de repetição, também conhecida como loop, é uma construção que permite executar um bloco de código repetidamente até que uma determinada condição seja atendida. Isso é útil para automatizar tarefas repetitivas e processar conjuntos de dados de maneira eficiente.

JavaScript oferece várias formas de implementar estruturas de repetição. As principais são:
- `for`
    ```javascript
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    ```

- `while`
    ```javascript
    var contador = 0;

    while (contador < 5) {
        console.log(contador);
        contador++;
    }
    ```

- `do...while`
    ```javascript
    var contador = 0;

    do {
        console.log(contador);
        contador++;
    } while (contador < 5);
    ```

- `for...in` (para iterar sobre propriedades de objetos)
    ```javascript
    var carro = {marca: 'Toyota', modelo: 'Corolla', ano: 2022};

    for (var propriedade in carro) {
        console.log(propriedade + ': ' + carro[propriedade]);
    }
    ```

- `for...of` (para iterar sobre elementos iteráveis como arrays)
    ```javascript
    var frutas = ['maçã', 'banana', 'laranja'];

    for (var fruta of frutas) {
        console.log(fruta);
    }
    ```
Como visto, as estruturas de repetição são essenciais para processar grandes conjuntos de dados, realizar iterações sobre arrays, objetos, e executar operações repetitivas de forma eficiente. A escolha da estrutura adequada depende das necessidades específicas de cada situação.

### Array/Lista
Um array, também conhecido como lista, é uma estrutura de dados que armazena elementos de maneira ordenada. Em JavaScript, um array pode conter diversos tipos de dados, como números, strings, objetos e até mesmo outros arrays. Cada elemento é associado a um índice, que começa do zero.

Trabalhando com listas em JavaScript:

- Criação de Arrays
    ```javascript
    var numeros = [1, 2, 3, 4, 5];
    var frutas = ['maçã', 'banana', 'laranja'];
    var misto = [10, 'texto', true, { chave: 'valor' }];
    ```

-  Acesso a Elementos
    ```javascript
    var primeiroNumero = numeros[0]; // 1
    var segundaFruta = frutas[1]; // 'banana'
    ```

-  Modificação de Elementos
    ```javascript
    frutas[2] = 'uva'; // Modifica 'laranja' para 'uva'
    ```

-  Métodos de Array
    ```javascript
    numeros.push(6); // Adiciona 6 ao final do array
    frutas.pop(); // Remove o último elemento ('uva') do array
    frutas.length; // Retorna o número de elementos no array
    ```

-  Iteração sobre Arrays
    ```javascript
    for (var i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }

    // Ou utilizando forEach
    frutas.forEach(function(fruta) {
        console.log(fruta);
    });
    ```

Podemos perceber que arrays são fundamentais em JavaScript para armazenar e manipular coleções de dados. Permitem a criação de estruturas organizadas, facilitando a iteração, modificação e aplicação de operações em conjuntos de elementos. O conhecimento sólido sobre o uso de arrays é crucial para a programação eficaz em JavaScript.

### Funções
Uma função em JavaScript é um bloco de código reutilizável que realiza uma tarefa específica. Ela é definida utilizando a palavra-chave `function` e pode receber parâmetros, que são valores que a função aceita como entrada. Uma função pode retornar um valor como resultado da sua execução.

O que é indispensável saber sobre funções?
- Como declarar uma função
    ```javascript
    function saudacao(nome) {
        console.log("Olá, " + nome + "!");
    }
    ```

-  Como chamar uma função
    ```javascript
    saudacao("João"); // Saída: Olá, João!
    ```

-  Como obter um retorno de Valor
    ```javascript
    function soma(a, b) {
        return a + b;
    }

    var resultado = soma(3, 5); // resultado agora é 8
    ```

    -  O que são funções anônimas
    ```javascript
    var quadrado = function(x) {
        return x * x;
    };
    ```

-  O que são arrow functions (funções de seta)
    ```javascript
    var dobrar = (num) => num * 2;
    ```

-  O que é escopo de variáveis

    Funções têm seu próprio escopo, o que significa que variáveis declaradas dentro de uma função não são acessíveis fora dela.

    ```javascript
    function exemplo() {
        var mensagem = "Isso é uma mensagem.";
        console.log(mensagem);
    }

    exemplo(); // Saída: Isso é uma mensagem.
    // console.log(mensagem); // Isso resultará em um erro, pois 'mensagem' não está definida aqui.
    ```

Funções são claramente cruciais em JavaScript para organizar e modular o código, facilitando a reutilização e a manutenção. Elas desempenham um papel central no desenvolvimento de aplicações JavaScript, permitindo a criação de lógicas específicas e a execução de tarefas específicas de forma eficiente.

### Objetos e Classes
Em JavaScript, um objeto é uma coleção de pares chave-valor, onde cada chave (ou nome de propriedade) está associada a um valor. Os valores podem ser de qualquer tipo, incluindo números, strings, funções, outros objetos, etc. Os objetos são uma maneira fundamental de representar e estruturar dados na linguagem.

Usando objetos em JavaScript:

- Criação de Objeto
    ```javascript
    var pessoa = {
        nome: "Maria",
        idade: 30,
        cidade: "Exemploville"
    };
    ```

- Acesso a Propriedades
    ```javascript
    console.log(pessoa.nome); // Saída: Maria
    ```

- Modificação de Propriedades
    ```javascript
    pessoa.idade = 31;
    ```

- Adição de Propriedades
    ```javascript
    pessoa.profissao = "Engenheira";
    ```

JavaScript é uma linguagem orientada a objetos, mas, até a introdução do ECMAScript 6, não possuía uma sintaxe de classe como em outras linguagens. No entanto, a partir do ECMAScript 6, as classes foram introduzidas como uma forma mais clara e orientada a objetos de criar objetos e construtores.

Usando classes em JavaScript:

- Declaração de Classe
    ```javascript
    class Carro {
        constructor(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }

        exibirInformacoes() {
            console.log(`${this.marca} ${this.modelo}`);
        }
    }

    var meuCarro = new Carro("Toyota", "Corolla");
    meuCarro.exibirInformacoes(); // Saída: Toyota Corolla
    ```

- Herança em Classes
    ```javascript
    class CarroEletrico extends Carro {
        constructor(marca, modelo, autonomia) {
            super(marca, modelo);
            this.autonomia = autonomia;
        }

        exibirInformacoes() {
            super.exibirInformacoes();
            console.log(`Autonomia: ${this.autonomia} km`);
        }
    }

    var meuCarroEletrico = new CarroEletrico("Tesla", "Model S", 400);
    meuCarroEletrico.exibirInformacoes(); // Saída: Tesla Model S | Autonomia: 400 km
    ```

Objetos e classes são fundamentais para a programação orientada a objetos em JavaScript. Enquanto objetos são instâncias específicas com propriedades e valores, as classes fornecem uma estrutura para criar objetos com métodos e propriedades compartilhadas. O entendimento desses conceitos é essencial para o desenvolvimento de código modular e reutilizável em JavaScript.

### Importanto e Exportanto no JavaScript
A importação e exportação de código é uma funcionalidade introduzida no ECMAScript 6 (ES6) para facilitar a modularização e reutilização de código em aplicações JavaScript. Isso permite dividir o código em módulos independentes, facilitando a organização e manutenção do projeto.

Para entender os exemplos abaixo, imagine que tenhamos dois arquivos javascript - `main.js` e `modulo.js` - em um mesmo diretório.

- Como funciona a Exportação:
    ```javascript
    // arquivo: modulo.js
    export const soma = (a, b) => a + b;
    export const subtracao = (a, b) => a - b;
    ```

- Como funciona a Importação:
    ```javascript
    // arquivo: main.js
    import { soma, subtracao } from './modulo';

    console.log(soma(5, 3)); // Saída: 8
    console.log(subtracao(10, 4)); // Saída: 6
    ```

- Exportação Padrão
    ```javascript
    // arquivo: modulo.js
    const multiplicacao = (a, b) => a * b;
    export default multiplicacao;
    ```

- Importação Padrão
    ```javascript
    // arquivo: main.js
    import multiplicacao from './modulo';

    console.log(multiplicacao(2, 3)); // Saída: 6
    ```

A grande vantagem de exportar e importar códigos é a divisão do código em partes lógicas e independentes, tornando-o mais modular e fácil de entender. Essa abordagem é especialmente útil em projetos maiores, onde diferentes partes do código podem ser desenvolvidas, testadas e mantidas separadamente. O uso desses recursos é uma prática comum em desenvolvimento moderno em JavaScript.

## Resumo
conceitos fundamentais que são essenciais para o desenvolvimento web moderno. Desde variáveis, condicionais, e estruturas de repetição até funções, objetos, e a modularidade introduzida pela importação/exportação de código, JavaScript oferece uma ampla gama de recursos poderosos. A compreensão desses conceitos é crucial para criar aplicações web interativas, escaláveis e eficientes.

[Aqui](https://www.javascripttutorial.net/es6/) econtra-se uma material mais detalhado sobre os recursos de JavaScript.