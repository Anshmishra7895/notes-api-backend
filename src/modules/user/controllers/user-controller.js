import { STATUS_CODE } from "../../../shared/utils/app-constants.js";
import { userService } from "../services/user-service.js";



const userController = {

    async viewUserProfile(request, response){
        try{
            const docs = await userService.viewUser();
            response.status(STATUS_CODE.SUCCESS).json({'user' : docs});
        }
        catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message: 'Problem in fetching the data'});
            console.log(err);
        }
    },

    async deleteUserProfile(request, response){
            const email = request.query.email;
            await userService.deleteUser(email).then((result)=> {
                response.status(STATUS_CODE.SUCCESS).json({message : 'User deleted successfully', result})
            }).catch((err) => {
            response.status(STATUS_CODE.RESOURCE_NOT_FOUND).json({message : 'Some error occur while deleting'});
            console.log(err);
        })
    },

    async addNewUser(request, response){
        const userBody = request.body;
        try{
            const doc = await userService.addUser(userBody);
            if(doc && doc.email){
                response.status(STATUS_CODE.SUCCESS).json({message:'User added successfully'})
            }
            else{
                response.status(STATUS_CODE.RESOURCE_NOT_FOUND).json({message:'Not able to add'});
            }
        }
        catch(err){
            response.json({message: 'Error while adding the data'});
            console.log(err);
        }
    },

    async updateUserProfile(request, response){
        
    }
}

export default userController;