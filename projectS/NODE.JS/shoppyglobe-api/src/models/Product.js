import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},price:{type:Number,required:true,min:0},description:{type:String,default:''},stock:{type:Number,required:true,min:0}}, {timestamps:true});
export const Product=mongoose.model('Product', schema);
