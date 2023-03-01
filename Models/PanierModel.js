import query from "../database.js";

export const getpanier = async (id) => {
    return await query('SELECT prod.nom,prod.description,prod.prix,p.id_produit,p.Quantite from users u INNER JOIN panier p on p.id_users = u.id INNER JOIN produits prod on prod.id = p.id_produit WHERE p.id_command IS NULL AND u.id=?;', id);
}

export const addpanier = async (infos) => {
    await query("INSERT INTO `panier`(`id_users`, `id_produit`, `Quantite`) VALUES (?,?,?);",infos);
    return await getpanier(infos[0]);
}

export const deletepanier = async (infos) => {
    await query("DELETE FROM `panier` WHERE `id_users`=? AND `id_produit`=?;",infos);
    return await getpanier(infos[0]);
}

export const updatepanier = async (infos) => {
    await query("UPDATE panier SET Quantite=? WHERE id_produit=? AND id_users=?;",infos);
    return await getpanier(infos[2]);
}

export const commandpanier = async (id,id_command) => {
    await query("UPDATE panier SET id_command=? WHERE id_users=? AND id_command IS NULL;",[id_command,id]);
    return await getpanier(id);
}