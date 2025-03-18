const express = require('express')
const userRouter = express.Router()
const {createOne,getOne,getMany,updateOne,deleteOne} = require('../controllers/userController')

userRouter.post('/', createOne)
userRouter.get('/:userId', getOne)
userRouter.get('/', getMany)
userRouter.put('/:userId', updateOne)
userRouter.delete('/:userId', deleteOne)

module.exports = userRouter