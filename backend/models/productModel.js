import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String, request:true},
    description: {type:String, request:true},
    price: {type:Number, request:true},
    image: {type:Array, request:true},
    category: {type:String, request:true},
    subCategory: {type:String, request:true},
    sizes: {type:Array, request:true},
    bestseller: {type:Boolean},
    date: {type:Number, request:true},
})
const productModel = mongoose.model.product || mongoose.model("product",productSchema)

export default productModel