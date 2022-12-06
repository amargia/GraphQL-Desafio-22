import '../connection/connection.js';
// import mongoose from "mongoose";

// try {
//     const url = "mongodb://localhost:27017/contenedores";
//     mongoose.connect(url)
//     console.log("Conectado a MongoDB");
//     } catch (error) {
//         console.log("Error al conectar a MongoDB");
// }

class ContenedorMongoDB {
    constructor(model) {
        this.model = model;
    }

    async list() {
        try {
            const array = await this.model.find({});
            return array;
        } catch (error) {
            throw new Error(`No se pudo leer el archivo. Error: ${error}`);
        }
    }

    async getById(id) {
        try {
            const item = await this.model.findOne({ _id: id });
            return item;
        } catch (error) {
            throw new Error(`No se pudo leer el archivo. Error: ${error}`);
        }
    }

    async save(item) {
        try {
            const newItem = new this.model(item);
            await newItem.save();
            return newItem;
        } catch (error) {
            throw new Error(`No se pudo guardar el archivo. Error: ${error}`);
        }
    }

    async deleteById(id) {
        try {
            const item = await this.model.findOneAndDelete({ _id: id });
            return `Elemento ${item} eliminado`;
        } catch (error) {
            throw new Error(`No se pudo borrar el archivo. Error: ${error}`);
        }
    }

    async changeById(id, item) {
        try {
            const newItem = await this.model.findOneAndUpdate({ _id: id }, item);
            return `Elemento actualizado correctamente: ${newItem}`;
        } catch (error) {
            throw new Error(`No se pudo actualizar el archivo. Error: ${error}`);
        }
    }
}

export default ContenedorMongoDB;