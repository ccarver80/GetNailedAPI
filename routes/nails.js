var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload')
const app = express();
var bodyParser = require('body-parser')
const nodemailer = require("nodemailer");










app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const nails = require('../models').Nails
const custom = require('../models'). CustomOrders

router.use(express.json());
app.use(fileUpload())





//POST ROUTE FOR NAILS
router.post('/nails', async(req, res) => {
    try{
       
               
             const NewNails = await nails.create({picture: req.files.picture.data, title: req.body.title, description: req.body.description, size: req.body.size, shape: req.body.shape, price: req.body.price,})
           
           res.status(201);
}catch(err) {
        console.log(err)
}
})

router.post('/nail-custom', async(req, res) => {
    try{

        

        let file;
        let photo; 
        if(req.files === null){
            file = "none selected"
            photo = "none selected"
        }else {
            file = req.files.style2.data
            
        }

      


        const newCustom = await custom.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            style1: nails.findByPk(req.body.style1),
            style2: photo,
            shape: req.body.shape,
            length: req.body.length,
            rt: req.body.rt,
            ri: req.body.ri,
            rm: req.body.rm,
            rr: req.body.rm,
            rp: req.body.rp,
            lt: req.body.lt,
            li: req.body.li,
            lm: req.body.lm,
            lr: req.body.lr,
            lp: req.body.lp,
            specialRequests: req.body.specialRequests,
        })

        if(file != "none selected"){
            photo = `<img style='height:500px;' src=${process.env.HOST}nail-custom/${newCustom.id}/>`
        }

        let transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.EMAIL, // generated ethereal user
              pass: process.env.PASSWORD, // generated ethereal password
            },
          });

          let customer = await transporter.sendMail({
            from: '"Mandi Watson" <get_nailed_art@outlook.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Thank You for your request for a custom order!", // Subject line
            text: "Thank you for your interest in a custom set! I will review the order and get back to you on price shortly", // plain text body
            html: "<b>Thank you for your interest in a custom set! I will review the order and get back to you on price shortly</b>", // html body
          });

          let order = await transporter.sendMail({
            from: '"New CUSTOM Order" <get_nailed_art@outlook.com>', // sender address
            to: process.env.EMAIL, // list of receivers
            subject: "You Have A New Custom Order!", // Subject line
            
            html: `<h1>You have a new custom order from! ${req.body.firstName} ${req.body.lastName}</h1>
                    <p><b>Email:</b>${req.body.email}</p>
                    <p><b>Style picked:</b><img src=${process.env.HOST}nails/${req.body.style1}/><p>
                    <p><b>Submitted Photo:</b>${photo}</p>
                    <p><b>Shape:</b>${req.body.shape}</p>
                    <p><b>Length:</b>${req.body.length}</p>
                    <h1>Nail Size:</h1>
                    <p><b>Right Thumb:</b> ${req.body.rt}</p>
                    <p><b>Right Index:</b> ${req.body.ri}</p>
                    <p><b>Right Middle:</b> ${req.body.rm}</p>
                    <p><b>Right Ring:</b> ${req.body.rm}</p>
                    <p><b>Right Pinky:</b> ${req.body.rp}</p>
                    <p><b>Left Thumb:</b> ${req.body.lt}</p>
                    <p><b>Left Index:</b> ${req.body.li}</p>
                    <p><b>Left Middle:</b> ${req.body.lm}</p>
                    <p><b>Left Ring:</b> ${req.body.lr}</p>
                    <p><b>Left Pinky:</b> ${req.body.lp}</p>
                    <p><b>Special Requests:</b> ${req.body.specialRequests}</p>
                    
                      ` // html body
          });
         
        res.status(201).json({message: "Successfully submitted!! You will be receiving a email shortly, Please check your spam/junk folder."})
    }catch(err){
        res.json({message: "sorry there was and error on the server",
                    err: err
                                    })
        console.log(err)
    }
})

router.get('/nail-custom/:id', async(req, res) => {
    
    try{
        const customNail = await custom.findAll({
            where: {
                id: req.params.id
            }
        })
        
        res.end(customNail[0].style2)
        
    }catch(err){
        console.log(err)
    }
})

router.put('/nails/:id', async(req, res) => {
    try{
        const EditNails = await nails.update({picture: req.files.picture.data, title: req.body.title, description: req.body.description }, {
            where: {
                id: req.params.id
            }
        })
    }catch(err) {
        console.log(err)
    }
})

router.delete('/nails/:id', async(req, res) => {
    
    try{
        
        const destroyNails = await nails.findByPk(req.params.id)
     
          destroyNails.destroy()  
      
        
        res.status(204)
    }catch(err) {
        console.log(err)
    }
})

router.get('/nails/:id', async(req, res) => {

    
    try{
        const nailList = await nails.findAll({
            where: {
                id: req.params.id
            }
        })

        console.log(nailList[0].picture)
       
        res.end(nailList[0].picture)
        
    }catch(err){
        
        console.log(err)
    }
})


router.get('/nails', async(req, res) => {
    try{
        const nailList = await nails.findAll(); 
        res.send(nailList).status(200)
    }catch(err) {
        console.log(err)
    }
})


router.get('/nail-set/:id', async(req, res) => {
    try{
        const singleNailSet = await nails.findAll({
            where: {
                id: req.params.id
            }
        })

        res.send(singleNailSet).status(200)
    }catch(err) {
        console.log(err)
    }
})

module.exports = router;    