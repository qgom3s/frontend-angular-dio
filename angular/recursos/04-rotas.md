# Rotas no Angular

> As rotas em Angular são uma poderosa ferramenta para criar aplicativos web interativos e navegáveis, permitindo aos usuários navegar entre diferentes partes do aplicativo de forma eficiente e intuitiva. Elas desempenham um papel crucial na criação de aplicativos de página única (SPAs) e fornecem uma experiência de usuário moderna e responsiva.

As rotas em Angular são configuradas usando o módulo de roteamento (`RouterModule`) e a diretiva `router-outlet`. Você pode definir rotas no arquivo de configuração de rotas (`app-routing.module.ts` por padrão) e vincular essas rotas aos componentes correspondentes. Além disso, você pode usar recursos como parâmetros de rota, rotas aninhadas e redirecionamentos para criar uma navegação mais avançada e dinâmica.

### Conceitos e Recursos com Rotas

As rotas em Angular são uma parte essencial do desenvolvimento de aplicativos da web, permitindo uma navegação eficiente e flexível entre diferentes partes do aplicativo.

Alguns conceitos e recursos importantes:

- Anatomia de Rotas:
    - **RouterModule**: O módulo de rotas que fornece funcionalidades para definir e gerenciar rotas em um aplicativo Angular.
    - **RouterModule.forRoot()**: Método usado para definir as rotas principais do aplicativo no módulo raiz.
    - **RouterModule.forChild()**: Método usado para definir rotas em módulos secundários.

- Como Criar uma Rota:
    - As rotas são definidas em um arquivo de configuração de rotas (normalmente `app-routing.module.ts`) usando o método `RouterModule.forRoot()` ou `RouterModule.forChild()`.

- Rotas Coringa (wildcard routes):
    - São rotas que correspondem a qualquer URL que não corresponda a nenhuma rota definida.
    - São usadas para lidar com URLs inválidas ou para redirecionar para uma página de erro 404.

- Navegando entre Páginas com RouterLink:
    - Diretiva usada para criar links de navegação entre diferentes partes do aplicativo.
    - É aplicada a elementos HTML como `<a>` ou `<button>` para criar links que navegam para rotas específicas.

- ActivatedRoute:
    - Serviço fornecido pelo Angular que fornece informações sobre a rota ativa e seus parâmetros.
    - Usado para acessar parâmetros de rota e queryParams, permitindo que os componentes recuperem e utilizem esses valores.

- Recuperando Parâmetros das Rotas:
    - São valores passados na própria URL e capturados pela rota para uso no componente correspondente.
    - Recuperados usando o serviço ActivatedRoute e a propriedade `params`.

- Recuperando QueryParams de Rotas:
    - São valores passados na URL como parte da query string.
    - Recuperados usando o serviço ActivatedRoute e a propriedade `queryParamMap`.

- Redirecionamento por Componente:
    - É o processo de navegação automática para outra rota ou URL.
    - Pode ser realizado programaticamente no código do componente usando o serviço Router ou através de configurações de roteamento.

- Rotas Children:
    - São rotas aninhadas dentro de outras rotas, permitindo uma hierarquia de navegação.
    - São úteis para organizar rotas em grupos relacionados e para criar layouts de aplicativos complexos.

- Parâmetros de Rotas Children:
    - São parâmetros de rota definidos em rotas filhas que herdam o contexto das rotas pai.
    - Permitem passar dados específicos para componentes aninhados dentro de rotas filhas.

Dominar os conceitos e recursos das rotas é fundamental para criar aplicativos Angular bem estruturados e navegáveis.

### Rotas na Prática

Criei uma aplicação Angular simples que demonstra o uso de rotas, abordando os conceitos e recursos que você mencionou. Siga os passos abaixo:

1. **Criação do Projeto Angular**:
   Vamos criar um novo projeto Angular chamado `rotas-app`:
   ```bash
   ng new rotas-app --routing
   ```
   O argumento `--routing` adiciona o módulo de roteamento automaticamente ao projeto.

2. **Definição das Rotas**:
   Vamos definir algumas rotas simples em nosso aplicativo. Abra o arquivo `app-routing.module.ts` no diretório `src/app` e defina as rotas da seguinte maneira:

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';

   import { HomeComponent } from './home/home.component';
   import { AboutComponent } from './about/about.component';
   import { ContactComponent } from './contact/contact.component';

   const routes: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     { path: 'home', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'contact', component: ContactComponent },
     { path: '**', redirectTo: '/home' } // Rota coringa
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
   ```

   Neste exemplo, definimos quatro rotas principais: `home`, `about`, `contact`, e uma rota coringa que redireciona para a página inicial.

3. **Criação dos Componentes**:
   Vamos criar os componentes `Home`, `About` e `Contact`. Execute os seguintes comandos no terminal:

   ```bash
   ng generate component home
   ng generate component about
   ng generate component contact
   ```

4. **Atualização dos Componentes**:
   Em cada componente recém-criado (`home.component.html`, `about.component.html` e `contact.component.html`), adicione um conteúdo simples, como um título para identificá-los.

5. **Configuração do Navigation**:
   Abra o arquivo `app.component.html` e adicione links de navegação usando a diretiva `routerLink`:

   ```html
   <ul>
     <li><a routerLink="/home">Home</a></li>
     <li><a routerLink="/about">About</a></li>
     <li><a routerLink="/contact">Contact</a></li>
   </ul>
   <router-outlet></router-outlet>
   ```

   O elemento `<router-outlet>` é onde o componente correspondente à rota atual será renderizado.

6. **Adicionando Parâmetros de Rota**:
   Para demonstrar a recuperação de parâmetros de rota, podemos adicionar uma rota com um parâmetro dinâmico. Por exemplo, em `app-routing.module.ts`, podemos adicionar a seguinte rota:

   ```typescript
   { path: 'products/:id', component: ProductComponent }
   ```

   Em seguida, podemos recuperar o parâmetro `id` no componente `ProductComponent` usando `ActivatedRoute`.

7. **Execução da Aplicação**:
   Inicie o servidor de desenvolvimento para executar o aplicativo:

   ```bash
   ng serve --open
   ```

   Isso abrirá automaticamente o navegador com a aplicação em execução. 
   
Agora você pode clicar nos links de navegação para ver as rotas funcionando. Certifique-se de que o conteúdo correspondente a cada rota seja exibido conforme o esperado.
