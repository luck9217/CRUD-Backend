
import { Request,Response } from "express";
import { User } from "../entities/user";

//Query create new user
export const createUser=async(req: Request,res:Response)=>{

   try {
       
       const{firstname,lastname}=req.body;  //req.body.firstname
    

       //throw new Error ('my error!!!'); // error test
       
       const user=new User();
       user.firstname= firstname; //user.firstname=req.body.firstname
       user.lastname=lastname;
    
       await user.save();
    
       res.send(user);
   } catch (error) {
       
    if(error instanceof Error){
        return res.status(500).json({message:error.message});
    }
   }
   
}

//Query select Id
export const getUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await User.findOneBy({ id: parseInt(id) });
  
      if (!user) return res.status(404).json({ message: "User not found" });
  
      return res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

//Query update id selected
  export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const user = await User.findOneBy({ id: parseInt(id) });
      if (!user) return res.status(404).json({ message: "Not user found" });
  
      await User.update({ id: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

//query delete id selected
  export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await User.delete({ id: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "User not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

//Query select * user
  export const getUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };