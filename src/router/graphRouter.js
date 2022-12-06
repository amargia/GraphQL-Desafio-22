import { Router } from 'express';
import schema from '../middlewares/buildSchema.js';
import { graphqlHTTP } from 'express-graphql';
import { getProducts, getProductById, createProduct, updateProducts, deleteProducts } from '../controllers/productsGraphQL.js';

const graphql = Router();

graphql.use('/', graphqlHTTP({
    schema: schema,
    rootValue: {
        getProducts: getProducts,
        getProductById: getProductById,
        createProduct: createProduct,
        updateProducts: updateProducts,
        deleteProducts: deleteProducts,
    },
    graphiql: true,
}));

export default graphql;