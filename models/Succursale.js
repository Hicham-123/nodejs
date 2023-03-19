//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";

import { DataTypes } from 'sequelize'

//Modele de la table Succursale
const Succursale = database.define('Succursale', {
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    Ville: { type: DataTypes.STRING, allowNull: false  },
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Succursale


  