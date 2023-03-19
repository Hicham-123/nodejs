//Importer la base de donnee pour creer les modeles
import { DataTypes } from "sequelize";
import database from "../connexion.js";

//Modele de la table Voiture
export const Voiture = database.define('Voiture', {
    nom: { type: DataTypes.STRING, allowNull: false },
    annee: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Voiture



