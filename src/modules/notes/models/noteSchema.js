import mongoose from "mongoose";
// import mongoose from "../../../shared/db/connection.js";
import { AppConstants } from "../../../shared/utils/app-constants.js";
import { SchemaTypes } from "mongoose";
const schemaName = AppConstants.SCHEMA.NOTE_SCHEMA
const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    title: {type:SchemaTypes.String, required:true, unique:true}, 
    descr : {type:SchemaTypes.String},
    cdate : {type:SchemaTypes.Date},
    importance : {type:SchemaTypes.String}
});

const NotesModel = mongoose.model(schemaName, NoteSchema);
export default NotesModel;