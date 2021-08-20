require('dotenv').config();
const path = require('path')
const express = require('express')
const app = express();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/build')))

    app.get('*',(req,res)=> {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
}