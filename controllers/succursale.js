import { Succursale, Voiture } from '../models/index.js'
import { validationResult } from "express-validator"


export const addsuccursale = async (req, res) => {

    const {nom,description,Ville } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    console.log("new errors", errors)

    let succursale = {nom,description,Ville };
    try {
        const result = await Succursale.create(succursale)
        res.status(201).json({ data: result, message: 'succursale cree avec succes' })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getsuccursale = async (req, res) => {
    try {
        const result = await Succursale.findAll();
        res.status(200).json({ data: result, message: "Tous les succursales recus" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const Deletesuccursale = async (req, res) => {
    try {
        const result = await Succursale.destroy({ where: { id: req.body.id } });
        res.status(200).json({ data: result, message: "succursale supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getSuccursaleById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await Succursale.findByPk(id)
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}