const express = require('express')
const router = express()
const Product = require("../models/product");


router.post("/post", async(req,res) =>{
   try{
   const { title, price,  image, category, rating, count  } = req.body ;
   
   const Productdata = new Product({
    title, price, image, category, rating, count
   })
   const newdata = Productdata.save()
   res.json(newdata)
}catch(error){
    console.error(err);
    res.status(500).send();
   }
})


router.get("/get", async(req, res) => {
    try{
      const product = new Product.find();
      res.json(product);
    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

router.get("/get/:id", async(req, res) => {
    try{
        const deee = new Product.findById(req.params.id)
      res.json(deee);
    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
})



module.exports = router;
