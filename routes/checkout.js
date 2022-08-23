var express = require('express');
const { route } = require('./nails');
var router = express.Router();
const app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const nails = require('../models').Nails

router.use(express.json());


router.post('/checkout', async(req, res) => {
    try{
            
        const lineItems = req.body.items.map(async(item) => {
                    const getNails = await nails.findByPk(item.id)
                    
                    return{ 
                        
                        price_data: {
                            currency: 'usd',
                            unit_amount: getNails.dataValues.price * 100 ,
                            
                            product_data: {
                                name: getNails.dataValues.title,
                                description: getNails.dataValues.description,
                                // images: `www.${process.env.SERVER_URL}/nails/${getNails.dataValues.id}`
                            },
                             
                        },  
                      
                        quantity: 1
                    
                    }
                })

       const promiseItems = await Promise.all(lineItems)

       console.log(promiseItems)
        const session = await stripe.checkout.sessions.create({
                
                payment_method_types: ['card'],
                shipping_address_collection: {
                    allowed_countries: ['US', 'CA'],
                  },
                  shipping_options: [
                    {
                      shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                          amount: 1000,
                          currency: 'usd',
                        },
                        display_name: 'Shipping USPS',
                        // Delivers between 5-7 business days
                        delivery_estimate: {
                          minimum: {
                            unit: 'business_day',
                            value: 5,
                          },
                          maximum: {
                            unit: 'business_day',
                            value: 7,
                          },
                        }
                      }
                    }],
                mode: 'payment',
                line_items: promiseItems,
                // automatic_tax: {
                //     enabled: true,
                //   },
                success_url: process.env.SUCCESS_URL,
                cancel_url: process.env.FAILURE_URL,
        })

        
        res.json({url: session.url})
    }catch(err){
        console.log(err)
    }
})

module.exports = router;