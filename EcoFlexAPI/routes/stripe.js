const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_SEC_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

// router.post("/payment", async(req,res)=>{   
    
// //     stripe.charges.create(
// //     {
// //         source:req.body.tokenId,
// //         amount:req.body.amount,
// //         currency:"INR",

// //     },(stripeErr, stripeRes)=>{
// //         if(stripeErr){
// //             res.status(500).json(stripeErr);
// //         }
// //         else{
// //             res.status(200).json(stripeRes);
// //         }
// //     });

//         stripe.customers.create({
            
//             email: req.body.stripeEmail,
//             source: req.body.tokenId,
//             name: "User",
//             address: req.body.address,
//         })
//         .then((customer) => {
//             return stripe.charges.create({
//                 amount: req.body.amount, 
//                 description: "Ecoflex Product",
//                 currency: "INR",
//                 customer: customer.id,
//             });
//         })
//         .then((charge) => {
//             res.send("Success"); // If no error occurs
//         })
//         .catch((err) => {
//             res.send(err); // If some error occurs
//         });

//         console.log("Request: ",req.body);

//         let error,status;

//         try {
//             const  {product, token} = req.body;    
//             const customer = await stripe.customers.create({
//                 email:token.email,
//                 source:token.id,
//             });

//             const charge = await stripe.charges.create(
//                 {
//                    amount:product.price*100,
//                    currency:"inr",
//                    customer:customer.id,
//                    receipt_email:token.email,
//                    description:`Purchased ${product.title}`,
                   
//                    shipping: {
//                         name:product.title,
//                         address:{
//                             line1:token.card.address_line1,
//                             city:token.card.address_city,
//                             state:address_state,
//                             country:token.card.address_country,
//                             postal_code:token.card.address_zip,
//                         },    
//                     },
//                 },
//             );
//             console.log("Charge: ", {charge});
//             status="Success";  
//         } 
//         catch (err) {
//             res.status(500).json("Error");
//             status="Failed";
//             console.log(err);    
//         }

//         res.json({error,status});


// });

const DOMAIN = 'https://ecoflex-shop.herokuapp.com';

router.post("/payment",async(req,res)=>{
    const {line_items,customer_email} = req.body; 
    // console.log(line_items,customer_email);

    if(!line_items || !customer_email){
      return res.status(400).json({error:"Missing some parameters"});
    }


    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          mode: "payment",
          line_items,
          customer_email,
          success_url: `${DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${DOMAIN}/canceled`,
          shipping_address_collection: {
            allowed_countries: ['IN', 'US',"CA","CN","IT"],
          },

        });
  
        res.status(200).json({sessionId: session.id,});
      } 
      catch (err) 
      {
        res.status(400).json({error:"An error occurred, unable to create session" });
        console.log(err);
      }
})

module.exports = router;
