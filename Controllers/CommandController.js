import { getcommand,paniertocommand } from "../Models/CommandModel.js";
import express from "express";
import idclient from "../securite.js";

const appcommand = express.Router();

appcommand.get("/",async (req,res) =>{
    res.json(await getcommand(5));
});

appcommand.post("/",async (req,res) =>{
    res.json(await paniertocommand(5));
});

appcommand.patch("/",async (req,res) =>{
    
})

appcommand.delete("/",async (req,res) =>{
    res.json(await deletecommand(req.body.id,idclient()));
})

export default appcommand;