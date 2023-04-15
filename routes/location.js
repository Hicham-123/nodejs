import { Router } from "express";
import { addlocation,checklocation,getlocation,Deletelocation,getlocationById,updatelocation,locationprice } from "../controllers/location.js";
import { verifierToken, isAdmin, isBasic, isst } from '../auth/autorisations.js'
import { locationRules ,deletRules,updateRules} from "../validations/locationValidation.js";

const location_router = Router();

location_router.post('/',locationRules,verifierToken,isBasic,addlocation);
location_router.post('/price',locationRules,verifierToken,isBasic,locationprice);
location_router.post('/check',locationRules,verifierToken,isBasic,checklocation);
location_router.put('/',updateRules,verifierToken,isst,updatelocation)
location_router.delete('/',deletRules,verifierToken,isAdmin,Deletelocation);
location_router.get('/all/:id',verifierToken,isBasic,getlocation);
location_router.get('/:id',verifierToken,isBasic,getlocationById);


export default location_router;