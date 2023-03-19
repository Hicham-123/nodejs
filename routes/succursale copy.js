import { Router } from "express";
import { addsuccursale,getsuccursale,Deletesuccursale,getSuccursaleById } from "../controllers/succursale.js";
import { verifierToken, isAdmin } from '../auth/autorisations.js'
import { succursaleRules } from "../validations/succursaleValidation.js";

const succursale_router = Router();

succursale_router.post('/',succursaleRules,verifierToken,isAdmin,addsuccursale);
succursale_router.delete('/',verifierToken,isAdmin,Deletesuccursale);
succursale_router.get('/', getsuccursale);
succursale_router.get('/:id', getSuccursaleById);

export default succursale_router;