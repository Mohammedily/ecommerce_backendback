const express = require('express')
const router = express()
const Product = require("../models/product");


router.post("/post", async(req,res) =>{
    const productdata = new Product(req.body);
   try{
     const data = await productdata.save();
     res.json(data);
}catch(error){
    console.error(err);
    res.status(500).send();
   }
})


router.get("/get", async(req, res) => {
    try{
      const product = await Product.find();
      res.json(product);
    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

router.get("/get/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const deee = await Product.findById({ _id: id })
      res.json(deee);
    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
})



module.exports = router;
