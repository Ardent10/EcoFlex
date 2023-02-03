const express      = require("express");
const mongoose     = require("mongoose");
const dotenv       = require("dotenv");
dotenv.config();
const userRoute    = require("./routes/user");
const authRoute    = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute    = require("./routes/cart");
const orderRoute   = require("./routes/order");
const stripeRoute  = require("./routes/stripe");
const cors         = require("cors");

const app = express();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("MongoDB connected!"))
    .catch((err)=>{
        console.log(err);
    });;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout",stripeRoute);

if(process.env.NODE_ENV=="production"){
    app.use(express.static("Eco-Flex/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'Eco-Flex','index.html'));
    })
}

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend Server started on port 5000");
})
