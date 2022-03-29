const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const route = require("./routes/product");
const dotenv = require("dotenv")
const stripe = require("stripe") (
    process.env.STRIPE
)



dotenv.config();

//datbase
connection();



//middleware
app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/product", route);

app.post("/payment", async(req,res) => {
    let status;
     try{
         const {items , token, totalPrice} = req.body;
         const idempotencyKey = uuid();
      
         const customer = await stripe.customers.create({
             email : token.email,
             source: token.id
         })
         
         const changes = await stripe.changes.create({
             amount: totalPrice,
             currency: "inr",
             customer: customer.id,
             receipt_email: token.email,
             description: `Purchased the ${items.name}`,
             shipping :{
                 name: token.card.name,
                 address:{
                     country : token.card.address_country,
                 },
             },
         },{ idempotencyKey }
         );
         status = "payment is sucessfull";
     console.log(changes)
     }catch(error){
         status = "payment is failure";
   console.log(error.message)
     }
   res.json(status);
 } )

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listen port ${port}...`))