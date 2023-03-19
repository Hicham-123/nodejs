//Importer la base de donnee pour creer les modeles
import { DataTypes } from "sequelize";
import database from "../connexion.js";

//Modele de la table Location

const Location = database.define('Location', {
    id_voiture:{type:DataTypes.INTEGER,allowNull:false},
    id_user:{type:DataTypes.INTEGER,allowNull:false},
    duree: { type: DataTypes.INTEGER, allowNull: false},
    date_debut: { type: DataTypes.DATE, allowNull: false },
    date_fin: { type: DataTypes.DATE, allowNull: true },
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Location

