const {User} = require('../models')
module.exports.createOne= async(req, res, next)=>{
    try{
        const {body} = req
        const user = await User.create(body)
        res.status(201).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.getOne=async(req, res, next)=>{
    try{
        const {params: {userId}} = req
        const user = await User.findById(userId)
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.getMany=async(req, res, next)=>{
    try{
        const user = await User.find({})
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.updateOne=async(req, res, next)=>{
    try{
        const {body, params: {userId}} = req
        const user = await User.findByIdAndUpdate(userId, body)
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.deleteOne=async(req, res, next)=>{
    try{
        const {params: {userId}} = req
        const user = await User.findByIdAndDelete(userId)
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}
