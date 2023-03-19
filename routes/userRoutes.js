import { Router } from "express";
import { addUser, getAllUsers,getUserById, userLogin,createUserRole,getUserRole,deleteUser } from "../controllers/users.js";
import { verifierToken, isBasic, issecretaire, isAdmin } from '../auth/autorisations.js'
import { inscriptionRules,loginRules } from "../validations/userValidation.js";

const user_router = Router()

user_router.post('/register',inscriptionRules ,addUser);
user_router.post('/login',loginRules, userLogin);
user_router.post('/role',verifierToken,isAdmin, createUserRole);
user_router.get('/role/:id',verifierToken,isAdmin, getUserRole);
user_router.get('/',verifierToken,issecretaire, getAllUsers);
user_router.get('/:id',verifierToken,isBasic, getUserById);
user_router.delete('/:id',verifierToken,isBasic, deleteUser);
user_router.delete('/',verifierToken,isAdmin, deleteUser);


export default user_router