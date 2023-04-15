import { Router } from "express";
import { addCar,getCar,deleteCar,getCarById } from "../controllers/voiture.js";
import { verifierToken, isAdmin,istechnicien } from '../auth/autorisations.js'
import { addcar } from "../validations/voitureValidation.js";

const voiture_router = Router();

voiture_router.post('/',addcar,verifierToken,istechnicien,addCar);
voiture_router.delete('/',verifierToken,isAdmin,deleteCar);
voiture_router.get('/', getCar);
voiture_router.get('/:id', getCarById);

export default voiture_router;