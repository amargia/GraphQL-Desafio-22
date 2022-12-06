import { getAllProducts, getProduct, saveProduct, updateProduct, deleteProduct } from "../services/products.js";

const getProducts = async () => {
    const products = await getAllProducts();
    return products;
}

//get productById
const getProductById = async (id) => {
    const product = await getProduct(id);
    return product;
}

//create product
const createProduct = async (product) => {
    const { name, description, code, price, thumbnail, stock } = product.datos
    const newProduct = await saveProduct({ name, description, code, price, thumbnail, stock });
    return newProduct;
}

//update product
const updateProducts = async (product) => {   
    const { name, description, code, price, thumbnail, stock } = product.datos
    const info = await updateProduct(product._id, { name, description, code, price, thumbnail, stock });
    const data = { data: info };
    return data;
};

//delete product
const deleteProducts = async (product) => {  
    const info = await deleteProduct(product._id);
    const data = { data: info };
    return data;
};

export { getProducts, getProductById, createProduct, updateProducts, deleteProducts };