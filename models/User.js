//Importer la base de donnee pour creer les modeles
import { DataTypes } from "sequelize";
import database from "../connexion.js";

//Modele de la table user
export const User = database.define('User', {
    prenom: { type: DataTypes.STRING, allowNull: false },
    nom: { type: DataTypes.STRING, allowNull: false },
    naissance: { type: DataTypes.DATE, allowNull: false },
    photo: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING, allowNull: false },
    mot_de_passe: { type: DataTypes.STRING, allowNull: false },
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default User



