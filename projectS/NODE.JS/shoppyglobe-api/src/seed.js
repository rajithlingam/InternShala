import dotenv from 'dotenv';
import {connectDB} from './utils/db.js';
import {Product} from './models/Product.js';
dotenv.config();
const sample=[{name:'Wireless Mouse',price:799,description:'Ergonomic wireless mouse',stock:50},{name:'Mechanical Keyboard',price:3499,description:'Blue switches, RGB backlight',stock:30},{name:'USB-C Charger',price:999,description:'65W fast charger',stock:100}];
(async()=>{await connectDB();await Product.deleteMany({});const docs=await Product.insertMany(sample);console.log(`Inserted ${docs.length} products`);process.exit(0);})();
