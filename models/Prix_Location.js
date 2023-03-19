//Importer la base de donnee pour creer les modeles
import { DataTypes } from "sequelize";
import database from "../connexion.js";

//Modele de la table Prix_Location

const Prix_Location = database.define('Prix_Location', {
    prix_par_jour: { type: DataTypes.DOUBLE, allowNull: false },
    prix_par_semain: { type: DataTypes.DOUBLE },
    prix_par_mois: { type: DataTypes.DOUBLE },
    prix_par_annee: { type: DataTypes.DOUBLE},
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Prix_Location

