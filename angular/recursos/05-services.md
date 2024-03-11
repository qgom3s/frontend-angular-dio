# Services no Angular

> Os services desempenham um papel crucial na arquitetura de aplicativos Angular, ajudando a promover a modularidade, reusabilidade e manutenibilidade do código. Eles são uma parte fundamental do desenvolvimento de aplicativos robustos e escaláveis em Angular.

Em Angular, os serviços são classes TypeScript que fornecem funcionalidades específicas que podem ser compartilhadas em toda a aplicação. Eles são usados para encapsular lógicas de negócios, acesso a dados, comunicação com servidores, entre outras tarefas que não se encaixam na responsabilidade dos componentes.

### Conceitos e Recursos

As principais características dos serviços em Angular são:

- **Reutilizáveis**: Os serviços podem ser injetados em vários componentes, permitindo reutilização de código e centralização da lógica de negócios.

- **Injeção de Dependência**: Os serviços são injetados nos componentes por meio do sistema de injeção de dependência do Angular, o que facilita a manutenção e teste dos componentes.

- **Estado Compartilhado**: Os serviços podem ser usados para compartilhar estado entre diferentes partes da aplicação, garantindo consistência e sincronização de dados.

- **Comunicação com Servidores**: Os serviços são frequentemente utilizados para realizar operações de comunicação com servidores, como fazer requisições HTTP para buscar ou enviar dados.

- **Singleton**: Por padrão, os serviços são instanciados como singletons, ou seja, uma única instância do serviço é criada e compartilhada em toda a aplicação.

Um serviço em Angular é uma classe TypeScript comum que encapsula uma funcionalidade específica da aplicação, como acesso a dados, lógica de negócios ou comunicação com servidores.
- Um serviço geralmente é criado usando o comando `ng generate service nome-do-servico`.

Os serviços devem ser injetados nos componentes ou em outros serviços para serem utilizados.
   - A injeção de serviço é feita através do construtor dos componentes ou serviços, usando a palavra-chave `private` ou `public`.

   Exemplo:

     ```typescript
     constructor(private meuServico: MeuServico) {}
     ```

Os Observables são objetos que emitem uma sequência de valores ao longo do tempo. São amplamente utilizados para representar fluxos de dados assíncronos, como requisições HTTP e eventos do usuário.
   - São importados do módulo `rxjs` e podem ser criados usando métodos como `of`, `from`, `interval`, entre outros.

Para receber e processar os valores emitidos por um Observable, é necessário se inscrever no Observable usando o método `subscribe()`.

O método `subscribe()` recebe uma ou mais funções de callback que serão executadas quando novos valores forem emitidos, quando ocorrer um erro ou quando o Observable for concluído.

Exemplo:

 ```typescript
     this.meuServico.getDados().subscribe(
       dados => console.log(dados),
       erro => console.error(erro),
       () => console.log('Concluído')
     );
 ```

Os serviços em Angular são classes que encapsulam funcionalidades específicas da aplicação e são injetados em componentes ou outros serviços para serem utilizados. Eles podem retornar Observables para representar fluxos de dados assíncronos, e os componentes que consomem esses serviços podem se inscrever nesses Observables usando o método `subscribe()` para receber e processar os valores emitidos.

### Services na Prática

Vou criar um exemplo simples de um serviço em Angular que simula um serviço de autenticação de usuário. Este serviço terá métodos para fazer login e logout, e um método para verificar se o usuário está autenticado.

1. **Criação do Serviço**:
   crie um serviço chamado `auth.service` usando o Angular CLI:
   ```bash
   ng generate service auth
   ```

2. **Implementação do Serviço**:
   abra o arquivo `auth.service.ts` gerado no diretório `src/app`, e adicione o seguinte código:

   ```typescript
   import { Injectable } from '@angular/core';
   import { Observable, of } from 'rxjs';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthService {
     private isLoggedIn = false;

     constructor() { }

     login(): Observable<boolean> {
       // Simula um processo de login bem-sucedido
       this.isLoggedIn = true;
       return of(true);
     }

     logout(): Observable<boolean> {
       // Simula um processo de logout bem-sucedido
       this.isLoggedIn = false;
       return of(true);
     }

     isAuthenticated(): Observable<boolean> {
       // Retorna um Observable com o estado de autenticação do usuário
       return of(this.isLoggedIn);
     }
   }
   ```

3. **Uso do Serviço em um Componente**:
   agora usar esse serviço em um componente para realizar operações de login, logout e verificar se o usuário está autenticado. Abra um componente (por exemplo, `app.component.ts`) e adicione o seguinte código:

   ```typescript
   import { Component } from '@angular/core';
   import { AuthService } from './auth.service';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent {
     constructor(private authService: AuthService) {}

     fazerLogin(): void {
       this.authService.login().subscribe(() => {
         console.log('Usuário logado com sucesso!');
       });
     }

     fazerLogout(): void {
       this.authService.logout().subscribe(() => {
         console.log('Usuário deslogado com sucesso!');
       });
     }

     verificarAutenticacao(): void {
       this.authService.isAuthenticated().subscribe((autenticado) => {
         if (autenticado) {
           console.log('Usuário autenticado.');
         } else {
           console.log('Usuário não autenticado.');
         }
       });
     }
   }
   ```

4. **Utilização no Template do Componente**:
   por fim, resta usar os métodos do serviço no template do componente (`app.component.html`):
   
   ```html
   <button (click)="fazerLogin()">Fazer Login</button>
   <button (click)="fazerLogout()">Fazer Logout</button>
   <button (click)="verificarAutenticacao()">Verificar Autenticação</button>
   ```

Com isso, tem-se um serviço em Angular para gerenciar a autenticação do usuário e o utiliza em um componente para realizar operações de login, logout e verificação de autenticação.