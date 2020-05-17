const express=require('express')
var bodyParser = require('body-parser')
const app=express()
const port=3000;

app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set('view engine','ejs')
require('./routes')(app);

app.listen(port,(req,res)=>{
    console.log("App is running on port "+ port);
})