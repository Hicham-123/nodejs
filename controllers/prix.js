import { Prix_Location } from '../models/index.js'
import { validationResult } from "express-validator"


export const addPrix = async (req, res) => {

    const { prix_par_jour,prix_par_semain,prix_par_mois,prix_par_annee } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    console.log("new errors", errors)

    let type = {prix_par_jour,prix_par_semain,prix_par_mois,prix_par_annee };
    try {
        const result = await Prix_Location.create(type)
        res.status(201).json({ data: result, message: 'Prix de Location cree avec succes' })
        // res.redirect('/users/login')
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getPrix = async (req, res) => {
    try {
        const result = await Prix_Location.findAll();
        res.status(200).json({ data: result, message: "Tous les prix de location de voiture recus" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getDelete = async (req, res) => {
    try {
        const result = await Prix_Location.destroy({ where: { id: req.body.id } });
        res.status(200).json({ data: result, message: "prix de location de voiture supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getPrixById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await Prix_Location.findByPk(id)
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}