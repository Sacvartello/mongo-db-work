const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        min:[0, 'Age must be positive'],
        required:true
    },

})

const User = mongoose.model('User', userShema)
module.exports= User