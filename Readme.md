# Aplicativo de Delivery

## Descrição

Este é um aplicativo de delivery desenvolvido com React no frontend e Node.js (com Express) no backend, utilizando MongoDB como banco de dados. Ele permite que os usuários visualizem e comprem produtos de um restaurante de forma online.

## Funcionalidades

- **Autenticação de Usuário**: Os usuários podem se autenticar para acessar o aplicativo.
- **Visualização de Produtos**: Os usuários podem visualizar uma lista de produtos disponíveis no restaurante.
- **Filtragem de Produtos**: Os usuários podem filtrar os produtos por categorias, como hambúrgueres, pizzas, sobremesas, etc.
- **Busca de Produtos**: Os usuários podem pesquisar produtos pelo nome.
- **Adição de Produtos ao Carrinho**: Os usuários podem adicionar produtos ao carrinho de compras.
- **Finalização de Pedido**: Os usuários podem finalizar o pedido após selecionar os produtos desejados.
- **Gerenciamento de Sessão**: A sessão do usuário é gerenciada para manter o estado de autenticação.

## Instalação e Execução

### Backend

1. Clone o repositório.

git clone <URL_DO_REPOSITORIO>

2. Navegue até o diretório do backend:

cd backend

3. Instale as dependências:

npm install

4. Configure as variáveis de ambiente no arquivo `.env`.

5. Inicie o servidor:

npm start


### Frontend

1. Navegue até o diretório do frontend:
cd frontend

2. Instale as dependências:

npm install

3. Inicie o aplicativo:

npm start


## Tecnologias Utilizadas

### Frontend

- React.js
- React Router
- Context API
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Gerenciamento de Estado

- Hooks
- Context API

### Autenticação

- JSON Web Tokens (JWT)

### Consulta Assíncrona

- React Query

### Outros Recursos

- Cors
- dotenv

## Estrutura do Projeto

delivery-app/
│
├── backend/ # Backend do aplicativo
│ ├── controllers/ # Controladores para roteamento e lógica de negócios
│ ├── models/ # Definição dos modelos do MongoDB
│ ├── routes/ # Definição das rotas da API
│ └── index.js # Ponto de entrada do servidor
│
└── frontend/ # Frontend do aplicativo
├── components/ # Componentes reutilizáveis
├── pages/ # Páginas do aplicativo
├── context/ # Contextos para gerenciamento de estado
├── api/ # Funções de API para comunicação com o backend
├── types/ # Tipos TypeScript
└── App.js # Componente principal do aplicativo React


## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções de bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## Contato

Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato comigo.
