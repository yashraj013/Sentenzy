import express from "express"
import jsonwebtoken from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import { userModel } from "../models/user.models.js"

export const register = async (req, res) => {
    const {username, useremail, password, preferredTime} = req.body;
    // 1. Validate input
    if(!username || !useremail || !password){
        return res.json({sucess: false, message: "missing credentials"})
    }
    try{
        //Check if user already exists 
        const existUser = await userModel.findOne({useremail})
        if(existUser){
            return res.json({sucess: false, message: "User with this email already exists"})
        }

        //hashPassword
        const hashedPassword = await bcrypt.hash(password, 10);

        //add user in database
    }
    catch(error){
        return res.json({success: false, message: error.message})
    }
}