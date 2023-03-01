
import query from "../database.js";
import crypto from 'crypto';

const access_roles = [
    'admin',
    'secretaire',
    'technicien'
]

const getauthorisation = async (id) => {
    var data = await query('SELECT u.id,r.nom FROM users u INNER JOIN roles r ON r.id = u.id_roles WHERE u.id=?;', [id]);
    return data;
}

export const getproduits = async () => {
    return await query('SELECT * FROM produits', []);
}

export const getproduitsbycategory = async (category) => {
    return await query('SELECT * FROM produits where id_category=?', [category]);
}

export const addclient = async (infos) => {
    infos.mot_de_passe = crypto.createHash('md5').update(infos.mot_de_passe).digest("hex");
    var data = [infos.nom, infos.prenom, infos.naissance, infos.telephone, infos.email, infos.mot_de_passe];
    await query("INSERT INTO users(id_roles, nom, prenom, naissance, telephone, email, mot_de_passe) VALUES (4,?,?,?,?,?,?)", data);
}