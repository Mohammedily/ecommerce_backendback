const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true
    },
    title: {
        type:String,
        required: true
    },
   price: {
        type:Number,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    category: {
        type:String,
        required: true
    },
    rating: {
        type:Number,
        required: true
    },
    count:{
        type:String,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;