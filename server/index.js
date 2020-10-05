const express=require('express')

const app=express()

const mongoose=require('mongoose')


app.get('/',function(req,res){
    res.json('cap')
})
app.listen(3001,function(){
    console.log('running')
})

