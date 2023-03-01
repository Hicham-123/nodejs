import express from "express";
import { getproduits, getproduitsbycategory } from "../Models/ProduitModel.js";
const appprodui = express.Router();

appprodui.get("/", async (req, res) => {
    if (!req.query.category)
        res.json(await getproduits());
    else {
        res.json(await getproduitsbycategory(req.query.category));
    }
});

export default appprodui;