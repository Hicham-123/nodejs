import express from "express";
import { addclient, getclient } from "../Models/ClientModel.js";
import idclient from "../securite.js";
const appclient = express.Router();

var client = {
"id":idclient()
}

//get client info
appclient.get("/",async (req,res)=>{
    res.json(await getclient(client,req.query.id));
});

//add client info
appclient.post("/",async (req,res)=>{
    res.json(await addclient(req.body));
});

export default appclient;