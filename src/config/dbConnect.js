import mongoose from "mongoose";

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://anthoni:12345@anthoni.opu3fpu.mongodb.net/Node"); // utilizar string de conexão disponivel no site do banco de dados

let db = mongoose.connection;

export default db;