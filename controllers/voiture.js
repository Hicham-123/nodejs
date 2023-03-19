import { Voiture, Type_Voiture, Succursale, Prix_Location } from '../models/index.js'
import { validationResult } from "express-validator"


export const addCar = async (req, res) => {

    const { nom, annee, description, type_voiture, succursale, prix_location } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    console.log("new errors", errors)

    let voiture = { nom, annee, description, type_voiture, succursale, prix_location };
    try {
        const result = await Voiture.create(voiture)
        res.status(201).json({ data: result, message: 'Voiture cree avec succes' })
        // res.redirect('/users/login')
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getCar = async (req, res) => {
    try {
        const result = await Voiture.findAll()
        res.status(200).json({ data: result, message: "Tous les voiturs recus" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const deleteCar = async (req, res) => {
    try {
        const result = await Voiture.destroy({ where: { id: req.body.id } });
        res.status(200).json({ data: result, message: "voiture supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getCarById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await Voiture.findByPk(id,{include: [{
            model: Type_Voiture,
            as: 'type',
            required: true
          },{
            model: Prix_Location,
            as: 'prix',
            required: true
          },{
            model: Succursale,
            as: 'succ',
            required: true
          }]})
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}