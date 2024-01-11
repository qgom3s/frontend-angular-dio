# HTML e CSS: Resumo de Estudo

Introdução ao HTML e CSS do bootcamp Coding The Future Banco PAN - Desenvolvimento Frontend com Angular.

## HTML (HyperText Markup Language)
HTML é a linguagem de marcação utilizada para estruturar o conteúdo de uma página web. É composta por tags que definem elementos como cabeçalhos, parágrafos, listas, links e imagens. A estrutura básica de um documento HTML inclui as tags `<html>`, `<head>` e `<body>`.

Exemplo de código HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Título da Página</title>
</head>
<body>
    <h1>Meu Primeiro Título</h1>
    <p>Este é um parágrafo de exemplo.</p>
    <a href="https://www.exemplo.com">Link Exemplo</a>
</body>
</html>
```

### Estrutura Básica do HTML 5
O HTML5 introduziu uma estrutura simplificada e mais semântica para o desenvolvimento de páginas web. Abaixo está a estrutura básica de um documento HTML5:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
    <!-- Adicione links para folhas de estilo e scripts aqui, se necessário -->
</head>
<body>
    <!-- Conteúdo da página vai aqui -->
</body>
</html>
```
Descrição dos elementos:
- `<!DOCTYPE html>`: Declaração do tipo de documento, indicando que o documento segue a especificação HTML5.

- `<html lang="pt-br">`: Elemento raiz que envolve todo o conteúdo da página, e o atributo lang especifica o idioma (neste caso, português do Brasil).

- `<head>`: Contém meta informações sobre o documento, como conjunto de caracteres, título da página e links para folhas de estilo e scripts.

- `<meta charset="UTF-8">`: Define o conjunto de caracteres como UTF-8, garantindo o suporte a caracteres especiais.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configura a viewport para melhorar a experiência em dispositivos móveis.

- `<title>`: Define o título da página exibido na barra de título do navegador.

- `<body>`: Contém todo o conteúdo visível da página, como textos, imagens, links, etc.

Esta estrutura fornece uma base sólida para a criação de páginas web usando HTML5, garantindo uma semântica clara e facilitando a estilização e a interação com JavaScript, se necessário.

### Semântica do HTML 5
O HTML5 trouxe uma série de elementos semânticos que fornecem significado e estrutura claros ao conteúdo de uma página web. Esses elementos não apenas facilitam a compreensão do código, mas também melhoram a acessibilidade e o SEO. 

Alguns dos principais elementos semânticos do HTML5:
- Cabeçalhos e Seções
    - `<header>`: Define o cabeçalho da página ou de uma seção.
    - `<nav>`: Representa a navegação.
    - `<main>`: Indica o conteúdo principal da página.
    - `<article>`: Define um conteúdo independente e autossuficiente.
    - `<section>`: Agrupa conteúdo relacionado semanticamente.
    - `<aside>`: Representa conteúdo relacionado ao conteúdo circundante.
    - `<footer>`: Define o rodapé da página ou de uma seção.
- Elementos de Texto
    - `<mark>`: Destaca partes do texto.
    - `<time>`: Representa uma data ou hora.
    - `<abbr>`: Define uma abreviação.
    - `<cite>`: Indica o título de uma obra.
    - `<dfn>`: Representa a definição de um termo.
    - `<blockquote>`: Citação em bloco.
    - `<q>`: Citação em linha.
- Listas
    - `<figure>`: Agrupa qualquer conteúdo que seja referenciado, como imagens e gráficos.
    - `<figcaption>`: Fornece uma legenda para o conteúdo de `<figure>`.
- Elementos de Formulário
    - `<datalist>`: Fornece uma lista de opções para controles de formulário.
    - `<output>`: Exibe o resultado de um cálculo ou ação de formulário.

A incorporação adequada desses elementos semânticos no código HTML não apenas aprimora a estrutura da página, mas também contribui para uma experiência de usuário mais acessível e compreensível, tornando o conteúdo mais significativo tanto para humanos quanto para motores de busca.

### Textos, Links e Listas no HTML 5
O HTML5 oferece diversas tags para manipulação de textos e criação de links e listas, proporcionando uma estrutura semântica e acessível para o conteúdo das páginas web.
- Textos
    - `<p>`: Define parágrafos de texto.
    - `<h1>` a `<h6>`: Representam títulos e subtítulos, sendo `<h1>` o mais importante e `<h6>` o menos.
    - `<strong>` e `<em>`: Aplicam ênfase ao texto, sendo `<strong>` mais forte (normalmente em negrito) e `<em>` em itálico.
    - `<span>`: Permite aplicar estilos ou scripts a partes específicas do texto sem afetar o conteúdo.
Exemplo:
```html
<p>Isso é um <strong>exemplo</strong> de <em>texto</em>.</p>
```
- Links
    - `<a>`: Cria links para outras páginas, recursos ou documentos.
    - Atributo `href`: Especifica o destino do link.
    - Atributo `target="_blank"`: Abre o link em uma nova janela ou aba (opcional).
    - Atributo `rel="noopener noreferrer"`: Recomendado ao utilizar `target="_blank"` para segurança.
Exemplo:
```html
<a href="https://www.exemplo.com" target="_blank" rel="noopener noreferrer">Visite o Exemplo</a>
```
- Listas
    - `<ul>`: Cria uma lista não ordenada.
    - `<ol>`: Cria uma lista ordenada.
    - `<li>`: Define itens de lista.

Ao usar essas tags e atributos de forma adequada, é possível estruturar o conteúdo textual de maneira clara e criar links que enriquecem a experiência de navegação dos usuários em uma página HTML5.

### Usando Imagens no HTML 5
Integrar imagens em páginas HTML é essencial para enriquecer o conteúdo visual. O HTML5 oferece a tag `<img>` para incorporar imagens, proporcionando flexibilidade e controle sobre o seu posicionamento e apresentação.
- Tag `<img>`
    - Utilizada para inserir imagens na página.
    - Atributo `src`: Especifica o caminho da imagem.
    - Atributo `alt`: Descreve o conteúdo da imagem para acessibilidade.
    - Atributo `width` e `height`: Define as dimensões da imagem (em pixels ou porcentagem).
    - Atributo `title`: Adiciona um texto de dica quando o usuário passa o mouse sobre a imagem.
Exemplo:
```html
<img src="caminho/da/imagem.jpg" alt="Descrição da imagem" width="300" height="200" title="Clique para ampliar">
```
- Mapas de imagens
    - Utiliza-se a tag `<map>` em conjunto com `<area>` para criar regiões clicáveis em uma imagem.
    - Especifica-se coordenadas para delimitar áreas sensíveis.
Exemplo:
```html
<img src="plano.jpg" alt="Plano da Cidade" usemap="#mapa">
<map name="mapa">
    <area shape="rect" coords="0,0,100,100" href="regiao1.html" alt="Região 1">
    <area shape="circle" coords="150,150,50" href="regiao2.html" alt="Região 2">
    <area shape="poly" coords="300,0,300,100,400,50" href="regiao3.html" alt="Região 3">
</map>
```
Ao utilizar esses recursos, é possível criar páginas mais visualmente atrativas e interativas, promovendo uma experiência de usuário mais envolvente. Uma ótima dica é otimizar as imagens para um carregamento eficiente da página.

## CSS (Cascading Style Sheets)
CSS é a linguagem de estilo utilizada para controlar a apresentação visual do conteúdo HTML. Permite ajustar cores, fontes, espaçamentos e posicionamento dos elementos na página. As regras CSS são aplicadas a seletores que representam os elementos HTML.

Exemplo de código CSS:
```css
/* Estilo para o elemento <h1> */
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}

/* Estilo para todos os parágrafos <p> */
p {
    margin-bottom: 10px;
}

/* Estilo para links <a> */
a {
    text-decoration: none;
    color: #0066cc;
}
```
Ligação de CSS e HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Título da Página</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <h1>Meu Primeiro Título</h1>
    <p>Este é um parágrafo de exemplo.</p>
    <a href="https://www.exemplo.com">Link Exemplo</a>
</body>
</html>
```
Compreender HTML e CSS é fundamental para criar páginas web atraentes e bem estruturadas.

### Conceitos Básicos de CSS e CSS3
O Cascading Style Sheets (CSS) é uma linguagem de estilo utilizada para definir a apresentação e o layout de documentos HTML. O CSS3 é a versão mais recente, introduzindo recursos avançados e melhorias em relação às versões anteriores.

Alguns dos conceitos básicos de CSS:
- Seletores e Propriedades Básicas
    - *Seletores*: Indicam quais elementos HTML devem ser estilizados.
        ```css
        h1 {
            color: blue;
        }
        ```
    - *Propriedades* e *Valores*: Especificam como os elementos selecionados devem ser apresentados.
        ```css
        p {
            font-size: 16px;
            margin-bottom: 10px;
        }
        ```
- Cores e Unidades
    - *Cores*: Podem ser especificadas por nome, código hexadecimal, RGB, entre outros.
        ```css
        body {
            background-color: #f0f0f0;
        }
        ```
    - *Unidades*: Podem ser em pixels, porcentagens, em, rem...
        ```css
        div {
            width: 300px;
            margin: 0 auto;
        }
        ```
- Box Model: Define como as caixas (elementos) são apresentadas na página, incluindo margens, bordas, preenchimentos e o próprio conteúdo.
    ```css
    .box {
        margin: 10px;
        padding: 20px;
        border: 1px solid #ccc;
    }
    ```
- Flexbox e Grid - Recursos do CSS3
    - *Flexbox*: Um modelo de layout que simplifica o design de interfaces responsivas.
        ```css
        .container {
            display: flex;
            justify-content: space-between;
        }
        ```
    - *Grid*: Um sistema bidimensional que facilita a criação de layouts complexos.
        ```css
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }
        ```
- Transições e Animações - Recursos do CSS3
    - *Transições*: Permitem suavizar a mudança de propriedades ao longo do tempo.
        ```css
        button {
            transition: background-color 0.3s ease;
        }
        ```
    - *Animações*: Oferecem mais controle sobre as mudanças de estilo ao longo do tempo.
        ```css
        @keyframes move {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(100px);
            }
        }

        .element {
            animation: move 2s infinite alternate;
        }
        ```
Entendendo esses conceitos, já é possível criar e estilizar layouts em páginas web.

### Estilizando Elementos na Prática
A estilização de elementos em CSS permite controlar a apresentação visual de páginas web, personalizando cores, fontes, espaçamentos e outros aspectos visuais.

Sobre estilização, é necessário ter alguns conceitos em mente:
- Seletores
    - *Seletores*: Identificam os elementos HTML que serão estilizados.
        ```css
        /* Seleciona todos os elementos <p> */
        p {
            color: blue;
        }
        ```
    - *Seletores de Classe* e *ID*: Permitem estilizar elementos específicos.
        ```css
        /* Seleciona elementos com a classe 'destaque' */
        .destaque {
            font-weight: bold;
        }

        /* Seleciona o elemento com o ID 'cabecalho' */
        #cabecalho {
            font-size: 24px;
        }
        ```
-  Propriedades de estilo comuns
    - *Cores*: Especificadas em diferentes formatos (nome, hexadecimal, RGB, etc.).
        ```css
        body {
            background-color: #f0f0f0;
            color: #333;
        }
        ```
    - *Fontes* e *Texto*: Controlam o estilo do texto.
        ```css
        h1 {
            font-family: 'Arial', sans-serif;
            text-align: center;
        }
        ```
    - *Espaçamento* e *Margens*: Definem o espaço ao redor dos elementos.
        ```css
        p {
            margin-bottom: 10px;
            padding: 5px;
        }
        ```
- Box Model:
    - Consiste em margens, bordas, preenchimentos e o próprio conteúdo.
        ```css
        .caixa {
            margin: 10px;
            padding: 15px;
            border: 1px solid #ccc;
        }
        ```
- Posicionamento
    - *Position*: Controla o método de posicionamento do elemento.
        ```css
        .absoluto {
            position: absolute;
            top: 20px;
            left: 50px;
        }
        ```
    - *Flexbox* e *Grid* (CSS3): Sistemas de layout que oferecem maior controle.
        ```css
        .container {
            display: flex;
            justify-content: space-between;
        }
        ```

### Dimensão e Alinhamento em CSS

A manipulação de dimensões e o alinhamento de elementos são aspectos fundamentais da estilização em CSS, permitindo o controle preciso do layout e da apresentação visual.

Os principais conceitos relacionados a dimensão e alinhamento são:

- Dimensões
    - *Width* e *Height*: Determinam a largura e a altura de um elemento.
        ```css
        .caixa {
            width: 200px;
            height: 150px;
        }
        ```

    - *Max-width* e *Max-height*: Limitam a largura e altura máximas de um elemento.
        ```css
        .imagem {
            max-width: 100%;
            max-height: 200px;
        }
        ```

    - *Min-width* e *Min-height*: Estabelecem a largura e altura mínimas de um elemento.
        ```css
        .conteudo {
            min-width: 300px;
            min-height: 100px;
        }
        ```

-  Alinhamento
    - *Text-align*: Alinha o texto dentro de um elemento.
        ```css
        .paragrafo {
            text-align: center;
        }
        ```

    - *Vertical-align*: Controla o alinhamento vertical de elementos em relação a outros elementos.
        ```css
        img {
            vertical-align: middle;
        }
        ```

    - *Margin* e *Padding*: Influenciam o espaçamento ao redor dos elementos, afetando seu alinhamento.
        ```css
        .elemento {
            margin: 10px; /* Espaçamento externo */
            padding: 5px; /* Espaçamento interno */
        }
        ```

    - *Flexbox* e *Grid* (CSS3): Oferecem métodos avançados de alinhamento e distribuição de espaço.
        ```css
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        ```

## Resumo

O curso e o estudo abordou aspectos fundamentais de desenvolvimento web, destacando HTML5 para estruturação de conteúdo, CSS e CSS3 para estilização e layout. A compreensão dos seletores, propriedades, dimensões e alinhamentos em CSS é crucial para criar páginas visualmente atraentes e funcionais. Incorporar semântica com HTML5 e aplicar práticas avançadas como Flexbox e Grid proporciona uma base sólida para construir experiências de usuário modernas e responsivas. A constante exploração dessas tecnologias é essencial para acompanhar as melhores práticas e tendências em constante evolução no desenvolvimento web.

Para saber mais, acesse [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTML) a documentação da Mozilla sobre os recursos HMTL e [aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS) a documentação que aborda os recursos de CSS.
