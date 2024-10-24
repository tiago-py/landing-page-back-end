# Ganhadores API

Uma API simples para gerenciar ganhadores de prêmios, construída com Node.js e MongoDB.

## Tecnologias Usadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- body-parser

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone <URL do repositório>
   cd ganhadores-api
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configuração do MongoDB:**
   - Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Crie um novo banco de dados e obtenha a URI de conexão.

4. **Configurar as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a seguinte linha ao arquivo `.env`:

     ```
     MONGODB_URI=<sua_uri_de_conexao>
     ```

   - (Opcional) Você também pode adicionar a variável `PORT` se quiser usar uma porta diferente da padrão:

     ```
     PORT=5000
     ```

## Uso

1. **Inicie o servidor:**

   ```bash
   node index.js
   ```

2. **Endpoints disponíveis:**

   - **Cadastrar Ganhador:**
     - **Método:** `POST`
     - **URL:** `/api/winners`
     - **Corpo da Requisição:**
       ```json
       {
           "name": "Nome do Ganhador",
           "cpf": "CPF do ganhador",
           "lucky_number": "numero da sorte",
           "prize": "Prêmio do Ganhador",
           "date": "YYYY-MM-DD" // Data do prêmio
       }
       ```

   - **Listar Ganhadores:**
     - **Método:** `GET`
     - **URL:** `/api/winners`

   - **Remover Ganhador:**
     - **Método:** `DELETE`
     - **URL:** `/api/winners/:id`
     - **Parâmetro:** `id` do ganhador a ser removido.
