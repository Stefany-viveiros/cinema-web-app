# Cinema Web App

Aplicação web de cinema desenvolvida com JavaScript, HTML e CSS, com integração à API do The Movie Database (TMDB) para consumo de dados dinâmicos sobre filmes.

O projeto simula uma experiência completa de navegação e compra dentro de uma plataforma de cinema, reunindo catálogo de filmes, seleção de sessões, escolha de assentos e compra de produtos da bomboniere em uma única interface.

## Sobre o projeto

O Cinema Web App foi desenvolvido com foco em transformar uma interface de catálogo de filmes em uma experiência próxima de uma aplicação real.

Além da apresentação dos filmes, a aplicação trabalha com diferentes fluxos de interação, como seleção de assentos, carrinho de produtos e simulação de compra de ingressos.

O projeto também foi estruturado de forma modular, separando responsabilidades relacionadas ao consumo da API, interface, assentos e carrinho.

## Funcionalidades

### Catálogo de filmes

* Listagem de filmes em cartaz utilizando dados da API TMDB
* Exibição de filmes em destaque e estreias
* Banner dinâmico para apresentação dos filmes
* Atualização das informações a partir de dados externos

### Seleção de assentos

* Visualização dos assentos disponíveis
* Simulação de ocupação
* Seleção de lugares durante o fluxo de compra

### Ingressos

* Simulação de seleção e compra de ingressos
* Integração da escolha de assentos ao fluxo da experiência do usuário

### Bomboniere

* Catálogo de produtos
* Adição de produtos ao carrinho
* Controle dos itens selecionados
* Simulação de compra integrada à experiência do cinema

### Modo sessão

O projeto também possui um modo de sessão pensado para proporcionar uma experiência mais imersiva ao usuário durante a utilização da aplicação.

## Tecnologias

* HTML5
* CSS3
* JavaScript
* API REST
* TMDB API
* Git
* GitHub

## Integração com API

A aplicação utiliza a API do The Movie Database (TMDB) para obter informações atualizadas sobre filmes.

Essa integração permite que o conteúdo apresentado pela aplicação seja baseado em dados externos, evitando a necessidade de manter todo o catálogo diretamente no código da aplicação.

A comunicação com a API é realizada por meio de JavaScript.

## Organização do projeto

```text
cinema-web-app/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── main.js
│   ├── seats.js
│   └── cart.js
```

A separação dos arquivos permite organizar diferentes responsabilidades da aplicação:

* `api.js` — comunicação com a API de filmes
* `main.js` — lógica principal e interação da interface
* `seats.js` — gerenciamento da seleção de assentos
* `cart.js` — lógica relacionada ao carrinho da bomboniere
* `style.css` — estilos e apresentação visual
* `index.html` — estrutura principal da aplicação

## Experiência do usuário

Um dos objetivos do projeto foi trabalhar não apenas a apresentação dos filmes, mas também os fluxos de interação.

A aplicação simula uma jornada em que o usuário pode:

1. Explorar os filmes disponíveis;
2. Visualizar informações de destaque;
3. Selecionar uma opção;
4. Escolher seus assentos;
5. Adicionar produtos à bomboniere;
6. Visualizar o carrinho;
7. Simular a compra.

Essa abordagem permitiu trabalhar conceitos de UX, organização de fluxos e construção de interfaces interativas.

## Configuração da API

Para utilizar a integração com o TMDB, é necessário possuir uma chave de API.

No arquivo `js/api.js`, configure sua chave:

```javascript
const API_KEY = 'SUA_API_KEY_AQUI';
```

A chave deve ser mantida fora do código público em uma aplicação real, utilizando variáveis de ambiente e outras práticas de proteção de credenciais.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/Stefany-viveiros/cinema-web-app.git
```

Entre na pasta:

```bash
cd cinema-web-app
```

Depois, abra o projeto em um servidor local ou utilize uma extensão como Live Server no VS Code.

## Melhorias planejadas

O projeto possui possibilidades de evolução para uma arquitetura mais completa, incluindo:

* Sistema de autenticação de usuários
* Banco de dados para filmes, usuários, sessões e pedidos
* Integração com pagamentos online
* Exibição de trailers
* Histórico de compras
* Melhorias de responsividade
* Migração da interface para React
* Desenvolvimento de backend próprio
* Deploy em ambiente cloud

## Aprendizados

O desenvolvimento do projeto permitiu praticar conceitos importantes de desenvolvimento web, principalmente:

* Consumo e integração com APIs REST
* Manipulação do DOM
* JavaScript modular
* Eventos e interações de usuário
* Construção de fluxos de compra
* Gerenciamento de estado no frontend
* Organização de código
* Experiência do usuário
* Git e GitHub

## Status

Em desenvolvimento.

## Autora

**Stefany Viveiros Barboza**


## Licença

Este projeto está sob a licença MIT.
