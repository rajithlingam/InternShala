import mongoose from 'mongoose';
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},quantity:{type:Number,required:true,min:1}}, {timestamps:true});
export const CartItem=mongoose.model('CartItem', schema);
