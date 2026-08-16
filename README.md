# 📦 API CRUD de Gestão de Estoque — Oficina Integra SI

Bem-vindo ao repositório modelo da **Oficina Prática de Construção de API RESTful com Node.js, TypeScript e MongoDB (NoSQL)** da Integra SI!

Este projeto é um **Starter Template (Skeleton)** desenvolvido especialmente para workshops de 2 horas. Ele já traz toda a infraestrutura da aplicação pronta (tipagem, rotas, manipuladores de erro e middlewares), permitindo que você foque o tempo da aula na implementação prática dos comandos do **Mongoose** e do **Express**.

---

## 🚀 Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/) (v18 ou superior)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Framework Web:** [Express.js](https://expressjs.com/)
- **Banco de Dados (NoSQL):** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (ou MongoDB Local)
- **ODM (Object Data Modeling):** [Mongoose](https://mongoose.com/)
- **Execução em Desenvolvimento:** `ts-node-dev` (hot-reload automático)

---

## 📂 Estrutura do Projeto

```text
crud-integraSi-alunos/
├── src/
│   ├── config/
│   │   └── database.ts        # Conexão com o banco de dados MongoDB
│   ├── controllers/
│   │   └── productController.ts # Regras de negócio e handlers do CRUD
│   ├── models/
│   │   └── Product.ts         # Modelagem da coleção e Schema Mongoose
│   ├── routes/
│   │   └── productRoutes.ts   # Definição dos endpoints REST da API
│   ├── types/
│   │   └── product.ts         # Interfaces e Tipos TypeScript (IProduct, Category)
│   ├── app.ts                 # Servidor Express principal e middlewares
│   └── seed.ts                # Script para popular o banco com dados de teste
├── .env.example               # Modelo de variáveis de ambiente
├── package.json               # Dependências e scripts de execução
├── tsconfig.json              # Configurações do compilador TypeScript
└── README.md                  # Este guia explicativo
```

---

## 🛠️ Passo a Passo para Configuração e Execução

### 1. Clonar o Repositório e Instalar Dependências

No terminal do seu computador, execute:

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Acesse a pasta do projeto
cd crud-integraSi-alunos

# Instale as dependências
npm install
```

### 2. Configurar Variáveis de Ambiente (`.env`)

Crie um arquivo `.env` na raiz do projeto copiando o arquivo `.env.example`:

```bash
cp .env.example .env
```

Abra o arquivo `.env` e configure a sua string de conexão com o **MongoDB Atlas** (ou MongoDB Local):

```env
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster0.ck757d8.mongodb.net/oficina-estoque?retryWrites=true&w=majority
```

> 💡 **Dica:** Durante a oficina, o instrutor fornecerá a string de conexão de testes pronta caso você não queira criar um cluster no Atlas.

---

### 3. Principais Comandos

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento com **hot-reload** na porta `3000`. |
| `npm run seed` | Executa o script que limpa e popula o banco com 8 produtos iniciais de teste. |
| `npm run build` | Compila o código TypeScript para JavaScript na pasta `dist/`. |
| `npm start` | Executa o código JavaScript compilado em produção. |

---

## 🎯 Roteiro de Desenvolvimento na Oficina (`// TODO:`)

Durante o workshop, você e o instrutor completarão as partes assinaladas com `// TODO:` nos seguintes arquivos:

1. **`src/config/database.ts`**:
   - Conectar ao MongoDB com `await mongoose.connect(mongoUri)`.
2. **`src/models/Product.ts`**:
   - Definir os campos e validações do `productSchema` (`name`, `sku`, `category`, `quantity`, `price`, `minStock`).
3. **`src/controllers/productController.ts`**:
   - Implementar os métodos do Mongoose dentro das funções do controller:
     - Listar produtos: `Product.find().sort(...)`
     - Buscar por ID: `Product.findById(...)`
     - Criar produto: `new Product(...).save()`
     - Atualizar produto: `Product.findByIdAndUpdate(...)`
     - Deletar produto: `Product.findByIdAndDelete(...)`
4. **`src/routes/productRoutes.ts`**:
   - Mapear os verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`) para as funções do controller.
5. **`src/app.ts`**:
   - Acoplar o roteador `productRoutes` na aplicação com `app.use('/', productRoutes)`.
6. **`src/seed.ts`**:
   - Completar o script de carga inicial com `Product.deleteMany({})` e `Product.insertMany(INITIAL_PRODUCTS)`.

---

## 📡 Documentação dos Endpoints da API REST

A API disponibiliza os seguintes endpoints sob a URL base `http://localhost:3000`:

| Método HTTP | Endpoint | Descrição | Status de Sucesso |
| :---: | :--- | :--- | :---: |
| **GET** | `/health` | Verifica a saúde do servidor da API | `200 OK` |
| **GET** | `/products` | Retorna a lista de todos os produtos do estoque | `200 OK` |
| **GET** | `/products/:id` | Retorna os detalhes de um produto por ID | `200 OK` |
| **POST** | `/products` | Cadastra um novo produto no estoque | `201 Created` |
| **PUT** | `/products/:id` | Atualiza os dados de um produto existente | `200 OK` |
| **DELETE** | `/products/:id` | Remove um produto do estoque pelo ID | `200 OK` |

---

### 📝 Exemplos de Request e Response (JSON)

#### 1. Criar Produto (`POST /products`)
**Payload de Envio (Request Body):**
```json
{
  "name": "Teclado Mecânico RGB",
  "sku": "ELE-009",
  "category": "Eletrônicos",
  "quantity": 15,
  "price": 299.90,
  "minStock": 5
}
```

**Resposta de Sucesso (`201 Created`):**
```json
{
  "id": "66be9f871234567890abcdef",
  "name": "Teclado Mecânico RGB",
  "sku": "ELE-009",
  "category": "Eletrônicos",
  "quantity": 15,
  "price": 299.9,
  "minStock": 5,
  "createdAt": "2026-08-16T18:00:00.000Z",
  "updatedAt": "2026-08-16T18:00:00.000Z"
}
```

#### 2. Resposta de Erro - SKU Duplicado (`400 Bad Request`)
```json
{
  "message": "SKU já cadastrado. Utilize um SKU exclusivo."
}
```

---

## 🖥️ Integração com o Front-end

Esta API foi projetada para ser consumida diretamente pela aplicação Web em React de Gestão de Estoque.
Para conectar o Front-end à sua API local:
1. Certifique-se de que o backend esteja rodando na porta `3000` (`http://localhost:3000`).
2. O servidor possui o middleware `cors()` habilitado, permitindo que a aplicação React acesse os endpoints sem bloqueios no navegador.

---

## 🤝 Créditos e Licença

Desenvolvido para a **Oficina Integra SI**.
Projeto sob a licença [ISC](LICENSE).
