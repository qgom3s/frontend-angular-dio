# Módulos Angular

> Em Angular, os módulos são uma maneira de organizar e encapsular diferentes partes de um aplicativo. Eles agrupam componentes, diretivas, pipes e serviços relacionados, fornecendo uma unidade coesa de funcionalidade. 

Os módulos ajudam a dividir o aplicativo em partes menores e mais gerenciáveis, facilitando o desenvolvimento, teste e manutenção. Um aplicativo Angular geralmente possui pelo menos um módulo raiz, chamado AppModule, e pode conter módulos adicionais para organizar funcionalidades específicas. Os módulos são definidos usando a função `@NgModule`, onde são declarados os componentes, diretivas e pipes que pertencem ao módulo, bem como quaisquer módulos externos que devem ser importados. Isso promove a modularidade, reusabilidade e escalabilidade do aplicativo Angular.

### Definição de Módulos

Os módulos em Angular são uma maneira de organizar e estruturar um aplicativo Angular. Eles ajudam a dividir a aplicação em partes menores e mais gerenciáveis, fornecendo uma unidade coesa de funcionalidade. Em essência, um módulo é um container que agrupa componentes, diretivas, pipes e serviços relacionados.

**Anatomia de um Módulo**:

Um módulo em Angular é definido usando a função `@NgModule`, que é um decorador que fornece metadados sobre o módulo. Aqui está a anatomia básica de um módulo em Angular:

1. **Declarações (declarations)**:
   - Aqui você lista os componentes, diretivas e pipes que pertencem ao módulo. Isso torna esses artefatos disponíveis para uso dentro do módulo.

2. **Imports (imports)**:
   - Aqui você importa outros módulos cujas funcionalidades você deseja usar dentro deste módulo. Isso pode incluir os módulos do Angular, bem como módulos personalizados definidos em seu aplicativo.

3. **Providers (providers)**:
   - Aqui você lista os serviços que serão fornecidos e compartilhados em todo o módulo. Isso permite que os serviços sejam injetados em componentes e outros serviços dentro do módulo.

4. **Exports (exports)**:
   - Opcionalmente, você pode listar componentes, diretivas e pipes que devem ser exportados do módulo. Isso os tornará disponíveis para outros módulos que importam este módulo.

5. **Bootstrap (bootstrap)**:
   - Este metadado é usado apenas no módulo raiz (AppModule) e indica o componente que deve ser inicializado quando o aplicativo Angular é iniciado.

**O que você precisa saber para utilizar Módulos em Angular**:

- **Criar Módulos Personalizados**:
   - Você aprenderá a criar módulos personalizados para organizar e encapsular funcionalidades relacionadas em seu aplicativo.

- **Importar e Exportar Módulos**:
   - Você entenderá como importar módulos externos em seus módulos personalizados e como exportar componentes, diretivas e pipes para uso em outros módulos.

- **Injeção de Dependência**:
   - Você compreenderá como utilizar a injeção de dependência para fornecer e injetar serviços dentro de módulos e componentes.

- **Organização do Código**:
   - Você aprenderá a dividir seu aplicativo em módulos menores e mais específicos, seguindo as melhores práticas de organização de código em Angular.

Ao dominar os conceitos acima, você estará bem equipado para utilizar módulos de forma eficaz em seus aplicativos Angular, promovendo modularidade, reusabilidade e escalabilidade do código.

### Módulos na Prática

Vou criar uma aplicação simples que demonstra o uso de módulos em Angular. Neste exemplo, será criado dois módulos: um módulo raiz (AppModule) e um módulo secundário (FeatureModule). O módulo secundário exportará um componente que será usado pelo módulo raiz.

1. Crie um novo projeto Angular:

    ```bash
    ng new modulo-app
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd modulo-app
    ```

3. Crie um novo módulo secundário chamado `feature`:

    ```bash
    ng generate module feature
    ```

4. Dentro do módulo `feature`, crie um novo componente chamado `feature-component`:

    ```bash
    ng generate component feature/feature-component
    ```

5. Abra o arquivo `src/app/feature/feature-component.component.ts` e adicione o seguinte código para exibir uma mensagem simples:

    ```typescript
    import { Component, OnInit } from '@angular/core';

    @Component({
    selector: 'app-feature-component',
    templateUrl: './feature-component.component.html',
    styleUrls: ['./feature-component.component.css']
    })
    export class FeatureComponentComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    }
    ```

6. Abra o arquivo `src/app/feature/feature-component.component.html` e adicione o seguinte código para exibir uma mensagem simples:

    ```html
    <p>Este é um componente de recurso!</p>
    ```

7. No módulo `feature`, abra o arquivo `src/app/feature/feature.module.ts` e atualize-o para exportar o componente `FeatureComponentComponent`:

    ```typescript
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FeatureComponentComponent } from './feature-component/feature-component.component';

    @NgModule({
    declarations: [FeatureComponentComponent],
    imports: [
        CommonModule
    ],
    exports: [FeatureComponentComponent] // Exportando o componente
    })
    export class FeatureModule { }
    ```

8. Agora, no módulo raiz (`AppModule`), abra o arquivo `src/app/app.module.ts` e importe o módulo `FeatureModule`:

    ```typescript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { FeatureModule } from './feature/feature.module'; // Importando o módulo

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FeatureModule // Importando o módulo
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

9. Por fim, abra o arquivo `src/app/app.component.html` e adicione o seguinte código para usar o componente exportado do módulo secundário:

    ```html
    <app-feature-component></app-feature-component>
    ```

10. Execute o aplicativo Angular:

    ```bash
    ng serve --open
    ```

Você perceberá, ao implementar essa aplicação simples, que o componente do módulo secundário está sendo usado no módulo raiz. Este é um exemplo básico de como usar módulos em Angular para organizar e reutilizar componentes.