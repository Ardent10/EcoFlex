const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_SEC_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req,res)=>{   
    
//     stripe.charges.create(
//     {
//         source:req.body.tokenId,
//         amount:req.body.amount,
//         currency:"INR",

//     },(stripeErr, stripeRes)=>{
//         if(stripeErr){
//             res.status(500).json(stripeErr);
//         }
//         else{
//             res.status(200).json(stripeRes);
//         }
//     });

        stripe.customers.create({
            
            email: req.body.stripeEmail,
            source: req.body.tokenId,
            name: "User",
            address: req.body.address,
        })
        .then((customer) => {
            return stripe.charges.create({
                amount: req.body.amount, 
                description: "Ecoflex Product",
                currency: "INR",
                customer: customer.id,
            });
        })
        .then((charge) => {
            res.send("Success"); // If no error occurs
        })
        .catch((err) => {
            res.send(err); // If some error occurs
        });
});


module.exports = router;