
import { Request,Response } from "express";
import { User } from "../entities/user";


export const createUser=async(req: Request,res:Response)=>{

   const{firstname,lastname}=req.body;  //req.body.firstname

    
    const user=new User();
    user.firstname= firstname; //user.firstname=req.body.firstname
    user.lastname=lastname;

    await user.save();

    res.send(user);
}