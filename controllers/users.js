import { User } from '../models/index.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator"

// import dotenv from 'dotenv'
// const tokenSecret = dotenv.config().parsed.TOKEN_SECRET

// await Address.sync()





export const createUserRole = async (req, res) => {
    const userId = req.body.id
    if (!userId) res.status(404).json({ error: true, message: error.message })

    const { nom } = req.body
    if (nom != "admin" && nom != "secretaire" && nom != "technicien")
        res.status(401).json({ error: true, message: "le Role " + nom + " n'ai pas valid!" })
    const newRole = { nom }

    try {
        const currentUser = await User.findByPk(userId)
        const result = await currentUser.createRole(newRole)
        res.status(201).json({ data: result, message: 'Role ajoute' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getUserRole = async (req, res) => {
    const userId = req.params.id
    if (!userId) res.status(404).json({ error: true, message: error.message })
    try {
        const currentUser = await User.findByPk(userId)
        const result = await currentUser.getRoles()
        res.status(200).json({ data: result, message: 'Roles retournes' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


















export const addUser = async (req, res) => {

    const { nom, prenom,naissance,email,mot_de_passe } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)

    //hachage du mot de passe
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10)

    const newUser = { nom, prenom,naissance,email, mot_de_passe: hashedPassword }

    try {
        const result = await User.create(newUser)
        res.status(201).json({ data: result, message: 'Utilisateur cree avec succes' })
        // res.redirect('/users/login')
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}


export const userLogin = async (req, res) => {
    const { email, mot_de_passe } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    if (email) {
        try {
            const user = await User.findOne({ where: { email } })
            // console.log("User pass", user, "req pass", password)

            if (!user) res.status(404).json({ message: "No such user exists" })

            //Verification en comparant les mots de passe
            const verifyPassword = await bcrypt.compare(mot_de_passe, user.mot_de_passe)

            //Si les mots de passe sont identiques
            if (verifyPassword) {
                let payload = { id: user.id }
                let token = jwt.sign(payload, process.env.TOKEN_SECRET)
                res.status(200).json({ data: { id: user.id,token } })
            } else {
                res.status(401).json({ message: "Le mot de passe est incorrect" })
            }

        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const result = await User.findAll({attributes: ['id', 'nom', 'prenom', 'naissance','photo','telephone','email'], include: 'Roles' })
        res.status(200).json({ data: result, message: "Tous les utilisateurs recus" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}


export const getUserById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await User.findByPk(id, {attributes: ['id', 'nom', 'prenom', 'naissance','photo','telephone','email'], include: 'Roles' })
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const result = await User.destroy({ where: { id: req.userId } });
        res.status(200).json({ data: result, message: "user supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const deleteUseradmin = async (req, res) => {
    try {
        const result = await User.destroy({ where: { id: req.body.id } });
        res.status(200).json({ data: result, message: "user supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}