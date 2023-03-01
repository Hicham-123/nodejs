import express from 'express';
import appclient from "./Controllers/ClientController.js";
import appprodui from './Controllers/ProduitController.js';
import apppanier from './Controllers/PanierController.js';
import appcommand from './Controllers/CommandController.js';
const router = express.Router();

router.use("/client",appclient);
router.use("/produit",appprodui);
router.use("/panier",apppanier);
router.use("/command",appcommand);


export default router;