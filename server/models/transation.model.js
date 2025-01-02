const mongoose = require("mongoose")

const transation  = new mongoose.Schema({
    id:{
        type:Number
    },
    title:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    sold:{
        type:Boolean
    },
    dateOfSale:{
        type:String
    }
})

const Transations = mongoose.model("Transation",transation);

module.exports = Transations;