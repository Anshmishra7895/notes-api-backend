import express from "express";
import { NOTE_ROUTES } from "../../../shared/utils/app-constants.js";
import noteController from '../controllers/note-controller.js';

const noteRoutes = express.Router();
noteRoutes.post(NOTE_ROUTES.ADD, noteController.addNote);
noteRoutes.get(NOTE_ROUTES.GET_ALL_NOTES, noteController.getAllNotes);
noteRoutes.delete(NOTE_ROUTES.DELETE_ONE, noteController.deleteNote);
noteRoutes.put(NOTE_ROUTES.UPDATE_ONE, noteController.updateOne)

export default noteRoutes;