import express from "express";
import { addpanier, getpanier, deletepanier, updatepanier } from "../Models/PanierModel.js";
import idclient from "../securite.js";

const apppanier = express.Router();

var client = {
    "id": idclient()
}

apppanier.get("/", async (req, res) => {
    res.json(await getpanier([client.id]));
});

apppanier.post("/", async (req, res) => {
    var data = [client.id, req.body.id_produit, req.body.quantite];
    if (req.body.quantite > 0)
        res.json(await addpanier(data));
    else
        res.json(await getpanier(client.id, req.query.id));
});

apppanier.delete("/", async (req, res) => {
    var data = [client.id, req.body.id_produit];
    res.json(await deletepanier(data));
});

apppanier.put("/", async (req, res) => {
    var data = [req.body.quantite, req.body.id_produit, client.id];
    if (req.body.quantite <= 0) {
        data = [client.id, req.body.id_produit];
        res.json(await deletepanier(data));
    } else {
        res.json(await updatepanier(data));
    }
});

export default apppanier;