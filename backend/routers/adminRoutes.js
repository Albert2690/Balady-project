import express from 'express'
import {login, register} from '../controllers/adminController.js'
import authenticateAdmin from '../middlewares/adminAuth.js'
import { getStudentDetials } from '../controllers/studentController.js'

const adminRouter = express.Router()


adminRouter.post('/login',login)
adminRouter.get('/register',register)
adminRouter.get('/get-student/:id',authenticateAdmin,getStudentDetials)

adminRouter.get('/login',(req,res)=>{
    console.log('request reaching')
    res.send('Succefull login api')
})


export default adminRouter