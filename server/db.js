const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@cluster0.8kmitww.mongodb.net/socialapp?retryWrites=true&w=majority").then(()=>{
    console.log("connectrd to the database");
}).catch(err =>{
    console.log('err', err)
})



