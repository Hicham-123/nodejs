import { Type_Voiture } from '../models/index.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator"


export const addType = async (req, res) => {

    const { marque,description,model } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    console.log("new errors", errors)

    let type = {marque,description,model };
    try {
        const result = await Type_Voiture.create(type)
        res.status(201).json({ data: result, message: 'Type de Voiture cree avec succes' })
        // res.redirect('/users/login')
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getType = async (req, res) => {
    try {
        const result = await Type_Voiture.findAll();
        res.status(200).json({ data: result, message: "Tous les types de voiturs recus" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getDelete = async (req, res) => {
    try {
        const result = await Type_Voiture.destroy({ where: { id: req.body.id } });
        res.status(200).json({ data: result, message: "type de voiture supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getTypeById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await Type_Voiture.findByPk(id)
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}