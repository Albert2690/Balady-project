import StudentModel from "../models/studentModel.js"
import cloudinary from "../utils/cloudinary.js"
import qrcode from 'qrcode'




const createStudent = async(req,res)=>{
    try{
      console.log(req.body,'bodyy')
  
        const {name,municipal,id_Number,
            honesty,sex,health_Certificate_Number,
            date_Of_issue_Of_Health_Certificate_AD,
            health_Certificate_Issue_Date_Hijri,
            health_Certificate_ExpiryDate_Gregorian,
            health_Certificate_ExpiryDate_Hijri,occupation}  = req.body.student
            const image = req.body.image

            // const existingStudent = await StudentModel.findOne({id_Number:1})
            // if(existingStudent){
            //    return  res.status(409).json({error:'User already exists'})
            // }

            const student = await StudentModel.create({
                studentName:name,
                municipal:municipal,
                id_Number:id_Number,
                honesty:honesty,
                sex:sex,
                health_Certificate_Number:Number(health_Certificate_Number),
                date_Of_issue_Of_Health_Certificate_AD: new Date(date_Of_issue_Of_Health_Certificate_AD),
                health_Certificate_Issue_Date_Hijri:new Date(health_Certificate_Issue_Date_Hijri),
                health_Certificate_ExpiryDate_Gregorian:new Date(health_Certificate_ExpiryDate_Gregorian),
                health_Certificate_ExpiryDate_Hijri:new Date(health_Certificate_ExpiryDate_Hijri),
                occupation:occupation,
                image:image,
                


            })

           
           
            if(student){
                const redirectUrl = `http://localhost:7007/student/${student._id}`;

                const generateAndUploadQrCode = async (data) => {
                    try {
                      const qrCode = await qrcode.toDataURL(data);
                      const uploadResponse = await cloudinary.uploader.upload(qrCode, {
                        upload_preset: 'balady_preset',
                      });
    
                      console.log(uploadResponse.secure_url,'qr-code')
                      console.log('success')
                      return uploadResponse.secure_url;
                    } catch (error) {
                      console.error('Error generating or uploading QR code:', error);
                      throw error;
                    }
                  };
    
              
                const qrData = JSON.stringify({ studentName: 'jayan',redirectUrl });
                const qrCodeImageUrl = await generateAndUploadQrCode(qrData);
    
    
              
                console.log(student._id,'id is consoling')
                res.status(201).json({success:true,student})
            }else{
                res.status(403).json({error:'Student creation failed'})
            }

    }catch(err){
      console.log(err)
      res.status(500).json({error:'Interal server Error'})
    }
  } 
 
  
  const editStudent = async(req,res)=>{
    try{
  
    let updatedStudent
    }catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
  
    }
  }
const getStudentDetials = async(req,res)=>{
    try{
        const studentId = req.params
        const student = await StudentModel.findOne({studentId})
        if(student){
            res.status(200).json({success:true,student})
        }else{
            res.status(404).json({error:'User not found'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
}

  export {
    createStudent,editStudent,getStudentDetials
  }