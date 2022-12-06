import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Product {
    _id: ID!,
    name: String,
    price: Int,
    stock: Int,
    code: String,
    description: String,
    thumbnail: String,
    timestamp: String,
  }
  input ProductInput {
    name: String,
    price: Int,
    stock: Int,
    code: String,
    description: String,
    thumbnail: String,
  }
  type Query {
    getProductById(_id: ID!): Product,
    getProducts: [Product],
  }
  type Mutation {
    createProduct(datos: ProductInput): Product
    updateProducts(_id: ID!, datos: ProductInput): Product,
    deleteProducts(_id: ID!): Product,
  }
`);

export default schema;