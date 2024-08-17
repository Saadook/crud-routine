const express = require("express");
import{ v4 as uuidv4} from'uuid';
const router = express.Router();
const users = []


router.use(function(req,res,next){
    console.log(req,url,"@",Date.now);

    next();
})
router
.route("/cars")



.get((req,res)=>{
    res.send("hi get /things/cars");
})


.post((req,res)=>{
    const user = req.body;

    users.push({...user,id:uuidv4})
    
    res.send(`${user.first_name} has been aded to the database`);
});

router
  .route("/cars/:carid")



  .get((req,res)=>{
    const {id} = req.params;
    const foundUser= users.find(user) && user.id===id

    res.send(foundUser);
  })


  .put((req,res)=>{
    res.send("hi post /thongs/cars" + req.params.carid);
  })

 router
 .route("/id")



  .delete('/:id',(req,res)=>{
    const {id}=req.params;

    users = users.filter(user) && user.id !== id ;

    res.send(`${id} deleted successfully from database`);
  })


  .patch('/:id',(req,res)=>{
    const {id} = req.params;
    const{first_name, last_name,email}=req.body;
    const user = users.find(user) && user.id === id

    if (first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email=email;

    res.send(`user with the ${id} has been updated`)
  })



  module.exports= router;