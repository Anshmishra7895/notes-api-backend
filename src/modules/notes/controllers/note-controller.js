import { noteService } from "../services/note-service.js";
import { STATUS_CODE } from "../../../shared/utils/app-constants.js";



const noteController = {

    async getAllNotes(request, response){
        try{
            const docs = await noteService.readAllNotes();
            response.status(STATUS_CODE.SUCCESS).json({'notes' : docs});
        }
        catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message: 'Problem in fetching the data'});
            console.log(err);
        }
    },

    async deleteNote(request, response){
            const title = request.query.title;
            await noteService.deleteNote(title).then((result)=> {
                response.status(STATUS_CODE.SUCCESS).json({message : 'Note deleted successfully', result})
            }).catch((err) => {
            response.status(STATUS_CODE.RESOURCE_NOT_FOUND).json({message : 'Some error occur while deleting'});
            console.log(err);
        })
    },

    async addNote(request, response){
        const noteBody = request.body;
        try{
            const doc = await noteService.addNote(noteBody);
            if(doc && doc.title){
                response.status(STATUS_CODE.SUCCESS).json({message:'Note added successfully'})
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

    async updateOne(request, response){
        try {
            // Extract the update criteria and updated fields from the request
            const { criteria, updatedFields } = request.body;
    
            // Use the criteria to find the documents that need to be updated
            const result = await noteService.updateOne(criteria, { $set: updatedFields });
    
            // `result` will contain the update operation result from MongoDB
            // It can be used to check how many documents were updated.
    
            // Send a success response to the client
            response.json({ message: 'Documents updated successfully', result });
        } catch (err) {
            // Handle errors and send an error response to the client
            response.status(500).json({ error: 'An error occurred while updating documents' });
        }
    }
}

export default noteController;