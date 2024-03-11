# LifeCycle Hooks Angular

> Lifecycle hooks, ou ganchos do ciclo de vida, são métodos especiais fornecidos pelo Angular que permitem que você execute lógica específica em determinados pontos do ciclo de vida de um componente Angular.

Esses métodos são executados automaticamente pelo Angular em momentos-chave durante a criação, atualização e destruição de um componente. Isso permite que você controle o comportamento do componente em diferentes fases de sua existência.

Existem vários ganchos de ciclo de vida disponíveis em Angular, cada um correspondendo a um estágio específico do ciclo de vida do componente.

### Introdução
O ciclo de vida de um componente em Angular consiste em uma série de etapas que ocorrem desde sua criação até sua destruição. Cada etapa é representada por um hook do ciclo de vida, que são métodos especiais executados automaticamente em momentos específicos durante a vida útil do componente.

O ``ng`` é uma convenção comumente usada em Angular para denotar elementos, diretivas, e classes relacionadas ao framework. Por exemplo, ``ngModel`` é uma diretiva usada para criar vinculação de dados bidirecional em formulários, ``ngIf`` é uma diretiva usada para renderização condicional de elementos no template, e assim por diante.

Já o ``ng generate`` é um comando da CLI do Angular usado para gerar automaticamente diferentes artefatos em um projeto Angular, como componentes, diretivas, serviços, etc. Ao executar o comando ``ng generate component nome-do-componente``, a CLI cria automaticamente os arquivos necessários para um novo componente, incluindo arquivos TypeScript, HTML, CSS e modificações em outros arquivos do projeto, como o módulo onde o componente será declarado. Isso economiza tempo e esforço na criação e configuração de novos componentes.

### O ``ng generate`` em Ação!

Suponha que você queira criar um novo componente chamado "meu-componente". Você pode usar o seguinte comando na linha de comando:

```bash
ng generate component meu-componente
```

Após executar este comando, a CLI do Angular irá gerar automaticamente os arquivos necessários para o novo componente. Por exemplo:

```
CREATE src/app/meu-componente/meu-componente.component.css (0 bytes)
CREATE src/app/meu-componente/meu-componente.component.html (29 bytes)
CREATE src/app/meu-componente/meu-componente.component.spec.ts (635 bytes)
CREATE src/app/meu-componente/meu-componente.component.ts (276 bytes)
UPDATE src/app/app.module.ts (421 bytes)
```

Aqui está o que cada arquivo gerado contém:

- `meu-componente.component.css`: Arquivo CSS para estilizar o novo componente.
- `meu-componente.component.html`: Arquivo HTML do template do componente.
- `meu-componente.component.spec.ts`: Arquivo de teste para testar o novo componente.
- `meu-componente.component.ts`: Arquivo TypeScript que define a lógica do novo componente.
- `app.module.ts`: O módulo do aplicativo é atualizado automaticamente para declarar o novo componente.

Além disso, o novo componente será automaticamente registrado no módulo do aplicativo para que possa ser usado em outros componentes do projeto.

Isso demonstra como o comando `ng generate` é útil para criar rapidamente novos componentes em um projeto Angular, economizando tempo e esforço na configuração manual dos arquivos necessários.

### Momentos de ciclo de vida
Os hooks de ciclo de vida em Angular permitem que você execute lógica personalizada em diferentes momentos durante a vida útil de um componente, desde a inicialização até a destruição. Cada hook tem um propósito específico e é útil para diferentes tipos de tarefas, ajudando você a criar aplicativos Angular mais robustos e eficientes.

Existem oito hooks de ciclo de vida em Angular: ``ngOnChanges``, ``ngOnInit``, ``ngDoCheck``, ``ngAfterContentInit``, ``ngAfterContentChecked``, ``ngAfterViewInit``, ``ngAfterViewChecked`` e ``ngOnDestroy``. Cada hook é chamado em um momento específico durante o ciclo de vida de um componente, permitindo que você execute lógica personalizada em diferentes estágios.

Vamos ver alguns destes recursos:

- ``ngOnInit``: o método é chamado uma vez após a inicialização do componente. É útil para inicializar variáveis, configurar assinaturas de observáveis e realizar lógica de inicialização.
    ```typescript
    ngOnInit() {
    // Inicialização de variáveis
    this.dados = this.servico.getDados();
    // Configuração de assinaturas de observáveis
    this.subscription = this.observable.subscribe(() => { /* ... */ });
    ```
- `ngOnChanges`: o método é chamado sempre que uma alteração é detectada nas entradas (`@Input`) do componente. É útil para responder a mudanças nos dados de entrada e executar lógica correspondente.
    ```typescript
    ngOnChanges(changes: SimpleChanges) {
        if (changes.valorAtual) {
        console.log('O valor atual foi alterado para: ', changes.valorAtual.currentValue);
        }
    ```
- `ngDoCheck`: o método é chamado durante cada detecção de alteração manual e é útil para detecção de alterações personalizadas e otimizações de desempenho.
    - **ordem de execução**: `ngDoCheck` é chamado após `ngOnChanges` e `ngOnInit`.
    ```typescript
        ngDoCheck() {
        // Lógica de detecção de alterações personalizada
    ```
Além do método `ngDoCheck` principal, há subeventos associados que são chamados para detectar alterações em diferentes aspectos do componente, como `ngAfterContentChecked` e `ngAfterViewChecked`. Esses subeventos permitem que você execute lógica específica após a verificação de alterações no conteúdo e na visualização do componente.

Durante o ciclo de vida do componente, `ngDoCheck` é chamado antes de `ngAfterContentChecked` e `ngAfterViewChecked`. Essa ordem permite que você detecte e reaja a alterações nos dados do componente antes de atualizar o conteúdo e a visualização.

- `ngOnDestroy`: o método é chamado uma vez, justo antes do componente ser destruído e removido do DOM. É útil para limpar recursos, cancelar assinaturas de observáveis e interromper temporizadores.
    ```typescript
    ngOnDestroy() {
    // Limpeza de recursos
    this.subscription.unsubscribe();
    ```

### Conclusão
Os hooks de ciclo de vida em Angular permitem que você execute lógica personalizada em diferentes momentos durante a vida útil de um componente, desde a inicialização até a destruição. Cada hook tem um propósito específico e é útil para diferentes tipos de tarefas, ajudando você a criar aplicativos Angular mais robustos e eficientes.