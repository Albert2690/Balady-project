import express from 'express'
import { createStudent, editStudent ,getStudentDetials} from '../controllers/studentController.js'

const studentRouter = express.Router()

studentRouter.post('/create-student',createStudent)
studentRouter.put('/edit-student',editStudent)
studentRouter.get('/get-student/:id',getStudentDetials)


export default studentRouter