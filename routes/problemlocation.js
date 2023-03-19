import { Router } from "express";
import { addproblem,Deleteproblem,getproblem,getproblemById } from "../controllers/problemlocation.js";
import { verifierToken, isst, isBasic } from '../auth/autorisations.js'
import { addproblemRoles } from "../validations/voitureValidation.js";

const problem_router = Router();

problem_router.post('/',addproblemRoles,verifierToken,isst,addproblem);
problem_router.delete('/',verifierToken,isst,Deleteproblem);
problem_router.get('/',verifierToken,isst, getproblem);
problem_router.get('/:id',verifierToken,isst, getproblemById);

export default problem_router;