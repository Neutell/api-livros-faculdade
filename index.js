const express= require('express');
const app= express();
require('dotenv').config()
const router = require ('./routes/routes')
app.use('/',router)
app.use (express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())





app.listen(process.env.PORT_NODE,()=>{console.log('app ok')})