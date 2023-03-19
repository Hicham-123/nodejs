import { Router } from "express";
import { addPrix,getPrix,getDelete,getPrixById } from "../controllers/prix.js";
import { verifierToken, isAdmin,issecretaire } from '../auth/autorisations.js'
import { addrentprice } from "../validations/voitureValidation.js";

const prix_router = Router();

prix_router.post('/',addrentprice,verifierToken,issecretaire,addPrix);
prix_router.delete('/',verifierToken,isAdmin,getDelete);
prix_router.get('/',verifierToken, getPrix);
prix_router.get('/:id',verifierToken, getPrixById);

export default prix_router;