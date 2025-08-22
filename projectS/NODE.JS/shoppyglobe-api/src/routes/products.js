import {Router} from 'express';
import {Product} from '../models/Product.js';
const r=Router();
r.get('/',async(req,res,next)=>{try{const products=await Product.find().sort({createdAt:-1});return res.status(200).json(products);}catch(e){next(e);}});
r.get('/:id',async(req,res,next)=>{try{const product=await Product.findById(req.params.id);if(!product)return res.status(404).json({error:'Product not found'});return res.status(200).json(product);}catch(e){next(e);}});
export default r;
