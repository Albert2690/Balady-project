import express from 'express'
import {login, register} from '../controllers/adminController.js'
import authenticateAdmin from '../middlewares/adminAuth.js'
import { editlisting, getStudentDetials, getStudents,deleteStudent } from '../controllers/studentController.js'

const adminRouter = express.Router()


adminRouter.post('/login',login)
adminRouter.get('/register',register)
adminRouter.get('/get-student/:id',authenticateAdmin,getStudentDetials)
adminRouter.get('/students',authenticateAdmin,getStudents)
adminRouter.put('/edit-listing',authenticateAdmin,editlisting)
adminRouter.delete('/delete-student',authenticateAdmin,deleteStudent)



// adminRouter.get('/login',(req,res)=>{
//     console.log('request reaching')
//     res.send('Succefull login api')
// })


export default adminRouter