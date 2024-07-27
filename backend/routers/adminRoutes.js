import express from 'express'
import {login} from '../controllers/adminController.js'

const adminRouter = express.Router()


adminRouter.post('/login',login)
adminRouter.get('/login',(req,res)=>{
    console.log('request reaching')
    res.send('Succefull login api')
})


export default adminRouter