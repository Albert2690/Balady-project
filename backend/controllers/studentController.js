import StudentModel from "../models/studentModel.js";
import cloudinary from "../utils/cloudinary.js";
import qrcode from "qrcode";
import dotenv from "dotenv";

dotenv.config();




const createStudent = async (req, res) => {
  try {
    console.log(req.body, "body");

    const {
      name,
      municipal,
      id_Number,
      honesty,
      sex,
      health_Certificate_Number,
      date_Of_issue_Of_Health_Certificate_AD,
      health_Certificate_Issue_Date_Hijri,
      health_Certificate_ExpiryDate_Gregorian,
      health_Certificate_ExpiryDate_Hijri,
      occupation,
      nationality,
      Educational_Program_End_Date,
      facility_Number,
      facility_Name,
      type_Of_Educational_Program,
      license_Number
    } = req.body.student;
    const image = req.body.image;

    const existingStudent = await StudentModel.findOne({ id_Number });
    if (existingStudent) {
      return res.status(400).json({ message: "User already exists" });
    }

    const student = new StudentModel({
      studentName: name,
      municipal,
      id_Number:id_Number,
      honesty,
      sex,
      health_Certificate_Number: Number(health_Certificate_Number),
      date_Of_issue_Of_Health_Certificate_AD: new Date(date_Of_issue_Of_Health_Certificate_AD),
      health_Certificate_Issue_Date_Hijri: new Date(health_Certificate_Issue_Date_Hijri),
      health_Certificate_ExpiryDate_Gregorian: new Date(health_Certificate_ExpiryDate_Gregorian),
      health_Certificate_ExpiryDate_Hijri: new Date(health_Certificate_ExpiryDate_Hijri),
      occupation,
      image,
      nationality,
      Educational_Program_End_Date: new Date(Educational_Program_End_Date),
      facility_Number,
      facility_Name,
      type_Of_Educational_Program,
      license_Number:Number(license_Number)
    });

    await student.save();

    

    const generateAndUploadQrCode = async (data) => {
      try {
        const qrCode = await qrcode.toDataURL(data);
        const uploadResponse = await cloudinary.uploader.upload(qrCode, {
          upload_preset: "balady_preset",
        });

        return uploadResponse.secure_url;
      } catch (error) {
        console.error("Error generating or uploading QR code:", error);
        throw error;
      }
    };

    // const qrData = `${process.env.CLIENT_URL}user/${student._id}`;
   
    const qrData = `${process.env.CLIENT_URL}Eservices/HealthIssue/PrintedLicenses/?uuid=${student._id}`
    console.log(qrData,'qr of the user ')
    const qrCodeImageUrl = await generateAndUploadQrCode(qrData);
    console.log(qrCodeImageUrl,'qrcodeedata')

    student.qr_code = qrCodeImageUrl;
    await student.save();
    console.log(student,'after qr code savign') 

    res.status(201).json({ success: true, student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


const editStudent = async (req, res) => {
  try {
    const  id = req.body.studentId
    console.log('updating',req.body.student)
    const {
     
      studentName,
      municipal,
      id_Number,
      honesty,
      sex,
      health_Certificate_Number,
      date_Of_issue_Of_Health_Certificate_AD,
      health_Certificate_Issue_Date_Hijri,
      health_Certificate_ExpiryDate_Gregorian,
      health_Certificate_ExpiryDate_Hijri,
      occupation,
      nationality,
      Educational_Program_End_Date,
      facility_Number,
      facility_Name,
      license_Number,
      type_Of_Educational_Program,
    } = req.body.student;

    const image = req.body.image;
    console.log(id,'id from updating')

    const updatedStudent = await StudentModel.findOneAndUpdate(
      { _id:id }, 
      {
        studentName,
        municipal: municipal,
        honesty: honesty,
        sex: sex,
        health_Certificate_Number: Number(health_Certificate_Number),
        date_Of_issue_Of_Health_Certificate_AD: new Date(date_Of_issue_Of_Health_Certificate_AD),
        health_Certificate_Issue_Date_Hijri: new Date(health_Certificate_Issue_Date_Hijri),
        health_Certificate_ExpiryDate_Gregorian: new Date(health_Certificate_ExpiryDate_Gregorian),
        health_Certificate_ExpiryDate_Hijri: new Date(health_Certificate_ExpiryDate_Hijri),
        occupation: occupation,
        image: image,
        nationality: nationality,
        Educational_Program_End_Date: Educational_Program_End_Date,
        facility_Number: facility_Number,
        facility_Name: facility_Name,
        type_Of_Educational_Program: type_Of_Educational_Program,
        id_Number:id_Number,
        license_Number:license_Number
      },
      { new: true } 
    );

    if (updatedStudent) {
      return res.status(200).json({ success: true, student: updatedStudent });
    } else {
      return res.status(404).json({ error: "Student not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



const getStudentDetials = async (req, res) => {
  try {
    const studentId = req.params;
    console.log(studentId,'student')
    const student = await StudentModel.findOne({ _id:studentId.id,is_listed:true }); 

    if (student) {
      res.status(200).json({ success: true, student });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStudents = async(req,res)=>{
  try{
   const students = await StudentModel.find()
   console.log(students,'students')
    if(students){
     res.status(200).json({success:true,students})
    }
   
  }catch(err){
    console.log(err)
    res.status(500).json({error:"Internal Server Error"})
  }
}
const editlisting = async (req, res) => {
  
  try {
    const { id } = req.body;
    console.log(id,'while editing')
    const existingStudent = await StudentModel.findOne({ _id: id });
    if (existingStudent) {
      existingStudent.is_listed = !existingStudent.is_listed;
      await existingStudent.save();
      console.log("donee");
      res.status(204).json({ message: "Updated Successfully", succes: true });
    } else {
      res.status(404).json({ message: "Services not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
}

const deleteStudent = async (req, res) => {
  try {
    console.log(req.body,'body')
    const { id } = req.body;
    console.log(id,'delteid')
    const deleted = await StudentModel.deleteOne({ _id: id });
    console.log(deleted,'delete')
    if (deleted.deletedCount > 0) {
      res.status(200).json({ message: "User Deleted Successfully", success: true });
    } else {
      res.status(400).json({ message: "Couldn't delete the user", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}


export { createStudent, editStudent, getStudentDetials ,getStudents,editlisting,deleteStudent};