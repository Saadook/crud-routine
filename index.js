const express = require("express");
const app = express()
const port = process.env.port || 8080;
const things = require("./routes/things");
const bodyParser = require("body-parser");
const users = [
   { first_name: "Sadok",
    last_name:"Ghanouchi",
    email:"sadok@email.com"
   },

   { first_name: "ali",
    last_name:"aloulou",
    email:"aloulou@email.com"
   }
]


app.use(express.json());
app.use("/things",things);

app.get("/",(req,res )=>{
    app.use(bodyParser.json)
res.send(users);
})

  app.listen(port,function(err){

if(err)console.log("error in server setup");

console.log("server listening on port",port);

  })