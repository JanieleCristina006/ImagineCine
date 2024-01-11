  # ImagiCine

## Visão Geral

O ImagiCine é um aplicativo web que utiliza a API do The Movie Database (TMDb) para exibir os 12 primeiros filmes em cartaz. Ao clicar em um filme, o usuário pode visualizar uma página detalhada com informações como capa do filme, sinopse, avaliação e botões para salvar o filme e assistir ao trailer no YouTube.

## Funcionalidades

- **Listagem de Filmes em Cartaz:**
  Ao carregar a página, o ImagiCine exibe os 12 primeiros filmes em cartaz utilizando a API do TMDb.

- **Detalhes do Filme:**
  Ao clicar em um filme, o usuário é redirecionado para uma página que exibe a capa do filme, sinopse, avaliação e botões adicionais.

- **Salvar Filme:**
  Na página de detalhes do filme, o usuário pode clicar no botão "Salvar" para adicionar o filme à lista de "Meus Filmes".
  O status do salvamento é armazenado localmente usando o localStorage, impedindo que o mesmo filme seja salvo novamente.

- **Notificações:**
  Ao salvar um filme com sucesso, uma notificação será exibida informando que o filme foi salvo com sucesso.
  Se o usuário tentar salvar o mesmo filme novamente, uma notificação será exibida indicando que o filme já foi salvo.

- **Trailer do Filme:**
  Na página de detalhes do filme, o usuário pode clicar no botão "Trailer" para pesquisar e assistir ao trailer do filme no YouTube.

## Instalação das Dependências

```bash
cd imagicine
npm install axios react react-dom react-icons react-router-dom react-toastify



