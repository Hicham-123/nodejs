//Importer la base de donnee pour creer les modeles
import { DataTypes } from "sequelize";
import database from "../connexion.js";

//Modele de la table Problem_Location

const Problem_Location = database.define('Problem_Location', {
    idlocation:{type:DataTypes.INTEGER,allowNull:false},
    problem: { type: DataTypes.STRING, allowNull: false },
    frais: { type: DataTypes.DOUBLE},
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Problem_Location

