import UserModel from "../models/userSchema.js";
export const userService = {
    async addUser(userObject){
       try{
        const doc = await UserModel.create(userObject);
        return doc;
       }
       catch(err){
        throw err;
       }
    },
    async viewUser(){
        try{
            const docs = UserModel.find({}).exec();
            return docs;
        }
        catch(err){
            throw err;
        }
    },
    async deleteUser(email){
        try{
            const result = await UserModel.deleteOne({email:email});
            return result;
        }
        catch(err){
            throw err;
        }
    },
    async updateProfile(password){
        try{
            const result = await UserModel.updateOne({password:password});
            
        }
        catch(err){
            throw err;
        }
    }
}