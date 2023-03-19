import { Router } from "express";
import { addType,getType,getDelete,getTypeById } from "../controllers/type.js";
import { verifierToken, isAdmin,istechnicien } from '../auth/autorisations.js'
import { addtypecar } from "../validations/voitureValidation.js";

const type_router = Router();

type_router.post('/',addtypecar,verifierToken,istechnicien,addType);
type_router.delete('/',verifierToken,isAdmin,getDelete);
type_router.get('/', getType);
type_router.get('/:id', getTypeById);

export default type_router;