# EMPRESAS WEB

<p align="center">
  <img src="./.github/logo-ioasys-pink.png"/>
</p>

Aplicação desenvolvida como teste de avaliação técnica pela ioasys.

## Introdução 👀

A aplicação consiste em uma interface integrada a uma [API](https://empresas.ioasys.com.br/api/v1) disponibilizada pela a ioasys.

O sistema conta com uma etapa de autenticação construida utilizando a arquitetura **oAuth**, além de fazer a listagem, filtro e detalhamento de empresas.

## API Connector 🔗

Além da aplicação frontend desenvolvida em **ReactJs**, foi criada um outro componente que funciona como um **Conector/Ponte** entre o frontend desenvolvido, e a api da ioasys.

### Motivo de desenvolvimento ❓

Esse novo componente foi construido pois a API disponibilizada pela ioasys tem um bloqueio de **CORS**, impedindo que aplicações web façam requisições diretamente á API, apenas serviços externos como é o exemplo do Postman que foi utilizado como documentação das rotas, ou uma API desenvolvida em NodeJs (que foi a forma que vi de resolver o problema, sem a necessiadade de realizar alguma alteração na API, liberando acesso no CORS).

Desse modo desenvolvi uma API que recebe requisições para as **mesmas rotas** presentes na documentação do Postman, e apenas repassa essa requisição para a API da ioasys. E nesse componente eu pude configurar o CORS para que aplicações web via browser possam realizar as requisições diretamente.

## Instabilidades na API 🛡️

Durante o desenvolvimento do projeto, reparei que ao realizar requisições para a API da ioasys, frequentemente ocorria TIMEOUT, tanto em testes realizados pelo Postman, como pelo componente connector desenvolvido.

Algumas requisições ocorriam sem problema algum, porém outras retornavam timeout. Logo optei por implementar um módulo/funcionalidade no componente connector para sempre que recebesse TIMEOUT como resposta da API, ele continuasse persistindo/re-tentando realizar a requisição novamente. Desse modo a aplicação fica mais estável sem respostas de erros inesperadas. Porém em contraponto ocorre ocasiões da requisição demorar um tempo consideravél para retornar os dados, pelo fato de sempre ficar reenviando a requisição quando recebe TIMEOUT.

## Executando a aplicação 🚀

### Prerequisitos

- NodeJs
- Algum gerenciador de pacotes (yarn ou npm)

### Instalando e executando

**Clonando o projeto**

```
  ~ git clone https://github.com/RaphaelOliveiraMoura/teste-ioasys-web.git
```

**Instalando dependências**

```
  ~/project_folder yarn install
  or
  ~/project_folder npm install
```

**Configurando variáveis de ambiente**

É necessario criar um arquivo chamado `.env` contendo as variáveis necessárias para a execução da aplicação na raiz do projeto. Para saber quais são estas variáveis, existe um arquivo chamado `.env.example` contendo o exemplo de como o .env deve ser preenchido.

Nesse projeto só foi utilizado a variável `REACT_APP_API_URL` que representa a URL da API que ele irá se comunicar.

Em teoria, essa variável iria conter a URL da API da ioasys (https://empresas.ioasys.com.br/api/v1) porém pelo fato do CORS bloquear as requisições é necessário utilizar a URL do **componente connector**.

### Executando o API Connector

O componente connector se encontra nesse [repositório](https://github.com/RaphaelOliveiraMoura/teste-ioasys-api-connector). Lá você irá encontrar o passo a passo para baixa-lo e executa-lo.

Por padrão o componente roda no seu localhost, na porta 3333, logo você deve configurar a variável de ambiente `REACT_APP_API_URL` com o valor `http://localhost:3333/api/v1`.

**Executando projeto** (em modo de desenvolvimento)

```
  ~/project_folder yarn start
  or
  ~/project_folder npm start
```

## Executando os testes 🔧

Para executar os testes com o modo watch ativado (aconselhado para desenvolvimento), execute o comando:

```
  ~/project_folder yarn test
```

Para executar com o modo de **coverage** (detalhando quais partes do código foram e não foram testadas), execute o comando:

```
  ~/project_folder yarn coverage
```
