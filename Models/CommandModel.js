import { getpanier,commandpanier } from "./PanierModel.js";
import query from "../database.js";

export const getcommand = async (id) => {
    return await query('SELECT * FROM `commands` WHERE id=?', [id]);
}

export const paniertocommand = async (id) => {
    var panier = await getpanier(id);
    var montant = 0;
    var data = Date.now();
    panier.forEach(element => {
        montant += element.prix*element.Quantite;
    });
    await query("INSERT INTO `commands`(`id_users`, `montant`, `date`) VALUES (?,?,?);",[id,montant,data.toString()]);
    var command_id = await query("SELECT `id` FROM `commands` WHERE  id_users=? AND montant=? AND date=?",[id,montant,data]);
    return await commandpanier(id,command_id.id);
}

export const deletecommand = async (id,idclient) =>{
    await query("DELETE FROM `commands` WHERE `id`=? AND `id_users`=?",[id,idclient])
}

