import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        municipal: {
            type: String
        },
        id_Number: {
            type: Number
        },
        honesty: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        sex: {
            type: String
        },
        health_Certificate_Number: {
            type: Number
        },
        date_Of_issue_Of_Health_Certificate_AD: {
            type: Date
        },
        health_Certificate_Issue_Date_Hijri: {
            type: Date
        },
        health_Certificate_ExpiryDate_Gregorian: {
            type: Date
        },
        health_Certificate_ExpiryDate_Hijri: {
            type: Date
        },
        occupation:{
            type:String
        },
        image:{
            type:String
        },
        qr_code:{
            type:String
        },
        nationality:{
            type:String
        },
        Educational_Program_End_Date:{
            type:Date
        },
        facility_Number:{
            type:Number
        },
        facility_Name:{
            type:String
        },
        type_Of_Educational_Program:{
            type:String
        },
        license_Number:{
            type:Number
        },
        is_listed:{
            type:Boolean,
            default:true
        }
       
        
    },
    {
        timestamps: true
    }
);

const StudentModel = mongoose.model('Student', studentSchema);

export default StudentModel;
