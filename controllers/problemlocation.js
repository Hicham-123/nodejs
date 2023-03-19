import { Problem_Location } from '../models/index.js'
import { validationResult } from "express-validator"


export const addproblem = async (req, res) => {

    const { idlocation,problem,frais } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    console.log("new errors", errors)

    let type = {idlocation,problem,frais };
    try {
        const result = await Problem_Location.create(type)
        res.status(201).json({ data: result, message: 'problem ajouter avec succes' })
        // res.redirect('/users/login')
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getproblem = async (req, res) => {
    try {
        const result = await Problem_Location.findAll();
        res.status(200).json({ data: result, message: "Tous les problem recus" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const Deleteproblem = async (req, res) => {
    try {
        const result = await Problem_Location.destroy({ where: { id: req.body.id } });
        res.status(200).json({ data: result, message: "problem supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getproblemById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await Problem_Location.findByPk(id)
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}