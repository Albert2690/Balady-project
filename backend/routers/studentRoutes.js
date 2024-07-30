import express from 'express'
import authenticateAdmin from '../middlewares/adminAuth.js'
import { createStudent, editStudent ,getStudentDetials} from '../controllers/studentController.js'

const studentRouter = express.Router()

studentRouter.post('/create-student',authenticateAdmin,createStudent)
studentRouter.put('/edit-student',authenticateAdmin,editStudent)
studentRouter.get('/get-student/:id',getStudentDetials)


export default studentRouter