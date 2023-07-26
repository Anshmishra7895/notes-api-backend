import NotesModel from "../models/noteSchema.js";
export const noteService = {
    async addNote(noteObject){
       try{
        const doc = await NotesModel.create(noteObject);
        return doc;
       }
       catch(err){
        throw err;
       }
    },
    async readAllNotes(){
        try{
            const docs = NotesModel.find({}).exec();
            return docs;
        }
        catch(err){
            throw err;
        }
    },
    async deleteNote(title){
        try{
            const result = await NotesModel.deleteOne({title:title});
            return result;
        }
        catch(err){
            throw err;
        }
    },
    async updateOne(title, updatefields){
        try{
            const result = await NotesModel.updateOne({title:title}, {$set: updatefields});
            
        }
        catch(err){
            throw err;
        }
    }


}