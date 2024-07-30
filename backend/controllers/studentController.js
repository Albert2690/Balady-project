import StudentModel from "../models/studentModel.js";
import cloudinary from "../utils/cloudinary.js";
import qrcode from "qrcode";

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
    } = req.body.student;
    const image = req.body.image;

    const existingStudent = await StudentModel.findOne({ id_Number });
    if (existingStudent) {
      return res.status(409).json({ error: "User already exists" });
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

    const redirectUrl = `http://localhost:7007/student/${student._id}`;

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

    const qrData = JSON.stringify({ studentName: student._id, redirectUrl });
    const qrCodeImageUrl = await generateAndUploadQrCode(qrData);

    student.qr = qrCodeImageUrl;
    await student.save();

    res.status(201).json({ success: true, student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


const editStudent = async (req, res) => {
  try {
    const {
      id,
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
      license_Number,
      type_Of_Educational_Program,
    } = req.body.student;

    const image = req.body.image;

    const updatedStudent = await StudentModel.findOneAndUpdate(
      { _id:id }, 
      {
        studentName: name,
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
    const student = await StudentModel.findOne({ _id:studentId.id });

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
    const existingStudent = await StudentModel.findOne({ _id: id });
    if (existingStudent) {
      existingStudent.is_listed = !existingStudent.is_listed;
      await existingService.save();
      console.log("donee");
      res.status(204).json({ message: "Updated Successfully", succes: true });
    } else {
      res.status(404).json({ message: "Services not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
}

export { createStudent, editStudent, getStudentDetials ,getStudents,editlisting};