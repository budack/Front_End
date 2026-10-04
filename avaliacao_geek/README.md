# 🎬 Avaliação Geek

Aplicação web desenvolvida com **Angular** para praticar conceitos fundamentais de desenvolvimento Front-End, utilizando uma galeria de filmes com pesquisa, informações dinâmicas e controle de status de visualização.

O projeto foi desenvolvido como atividade prática para exercitar **interpolação, property binding, event binding, two-way binding, estruturas de controle do Angular e manipulação de dados no TypeScript**.

## ✨ Funcionalidades

- 🎞️ Exibição de filmes em formato de cards
- 🖼️ Exibição dinâmica das capas dos filmes
- 🏷️ Exibição de título, gênero e nota
- 🔎 Pesquisa de filmes pelo título
- 👁️ Filtro de filmes em destaque quando não há pesquisa
- ✅ Alternância entre "Assistido" e "Marcar como assistido"
- 🔄 Atualização dinâmica dos dados exibidos na interface
- 📱 Interface estilizada com CSS

## 🧠 Conceitos praticados

### Interpolação

Utilização de `{{ }}` para exibir informações do objeto diretamente no HTML, como título, gênero e nota.

### Property Binding

Utilização de bindings como `[src]` e `[alt]` para definir propriedades dos elementos HTML de acordo com os dados do filme.

### Event Binding

Utilização de `(click)` para executar uma função no TypeScript e alterar o status de visualização do filme.

### Two-way Binding

Utilização de `[(ngModel)]` para manter o campo de pesquisa sincronizado com a variável `busca`.

### Renderização com @for e @if

O projeto utiliza a sintaxe moderna do Angular para:

- Percorrer a lista de filmes com `@for`
- Alterar o conteúdo do botão com `@if`

### Pesquisa e filtragem

A aplicação possui um getter chamado `filmesExibidos`, responsável por determinar quais filmes serão apresentados.

Quando não existe uma pesquisa, são exibidos somente os filmes marcados como destaque. Quando o usuário pesquisa, a aplicação filtra os filmes pelo título.

## 🛠️ Tecnologias utilizadas

- **Angular 22**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Angular Forms**
- **RxJS**
- **Node.js / npm**
- **Vitest**

## 📂 Estrutura principal

```
avaliacao_geek/
├── public/
├── src/
│   ├── app/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   ├── server.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Como executar

### 1. Pré-requisitos

Tenha instalado:

- **Node.js**
- **npm**

### 2. Instalar as dependências

Dentro da pasta do projeto:

```bash
npm install
```

### 3. Iniciar o servidor

```bash
npm start
```

Ou:

```bash
ng serve
```

Depois, acesse:

```
http://localhost:4200/
```

## 🔨 Build

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos gerados ficarão na pasta `dist/`.

## 🧪 Testes

Para executar os testes configurados com Vitest:

```bash
npm test
```

## 🎯 Objetivo do projeto

O objetivo principal é consolidar conhecimentos de **Angular e desenvolvimento Front-End**, trabalhando com dados dinâmicos, componentes, bindings, eventos, formulários e filtros.

Além de servir como atividade acadêmica, o projeto faz parte da prática de construção de aplicações web utilizando tecnologias modernas do ecossistema JavaScript.

## 📌 Próximas melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

- ⭐ Sistema de avaliação pelo usuário
- 🎭 Filtro por gênero
- 🔃 Ordenação por nota
- ➕ Cadastro de novos filmes pela interface
- 💾 Persistência dos dados
- 📱 Melhorias de responsividade
- 🎨 Evolução do design da interface

---

**Projeto desenvolvido por Vinicius Cristiano Budack dos Santos.**
