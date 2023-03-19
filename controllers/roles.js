import { Role } from '../models/index.js'

// await Address.sync()

export const addRole = async (req, res) => {

    const { nom } = req.body
    const newRole = { nom }

    try {
        const result = await Role.create(newRole)
        res.status(201).json({ data: result, message: 'Role cree avec succes' })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getAllRoles = async (req, res) => {
    try {
        const result = await Role.findAll({ include: 'Role' })
        res.status(200).json({ data: result, message: "Tous les roles recus" })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const createRoleUser = async (req, res) => {
    const roleId = req.params.id
    if (!roleId) res.status(404).json({ error: true, message: error.message })

    const { user_name, password } = req.body
    const newUser = { user_name, password }

    try {
        const currentRole = await Role.findByPk(roleId)
        const result = await currentRole.createUser(newUser)
        res.status(201).json({ data: result, message: 'Utilisateur ajoute' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getRoleUser = async (req, res) => {
    const roleId = req.params.id
    if (!roleId) res.status(404).json({ error: true, message: error.message })

    try {
        const currentRole = await Role.findByPk(roleId)
        const result = await currentRole.getUsers()
        res.status(200).json({ data: result, message: 'Roles retournes' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}