import { Location, Voiture, Prix_Location } from '../models/index.js'
import { validationResult } from "express-validator"
import { Op, literal, fn } from '@sequelize/core';

export const addlocation = async (req, res) => {

    const { date_debut, date_fin, id_voiture } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    console.log("new errors", errors)

    let duree = (date_fin - date_debut) / (1000 * 60 * 60 * 24);

    if (duree < 1) {
        return res.status(400).json({ errors: "number de jours invalid!" })
    }
    const findvoiture = await Voiture.findByPk(id_voiture);
    if (findvoiture == null) {
        return res.status(400).json({ errors: "id voiture invalid!" })
    }

    const location = await Location.findAll({
        where: {
            id_voiture: id_voiture,
            date_fin: {
                [Op.gt]: date_debut
            },
            date_debut: {
                [Op.lt]: date_fin
            }
        }
    });
    if (location.length > 0) {
        return res.status(400).json({ errors: "voiture indisponible dans cette periode!" })
    }


    let type = { duree, date_debut, date_fin, id_voiture, id_user: req.userId };
    try {
        const result = await Location.create(type)
        res.status(201).json({ data: result, message: 'Location cree avec succes' })
        // res.redirect('/users/login')
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }

    res.status(201).json({ data: "ok" })
}

export const checklocation = async (req, res) => {

    const { date_debut, date_fin, id_voiture } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    console.log("new errors", errors)

    let duree = (date_fin - date_debut) / (1000 * 60 * 60 * 24);

    if (duree < 1) {
        return res.status(400).json({ errors: "number de jours invalid!" })
    }
    const findvoiture = await Voiture.findByPk(id_voiture);
    if (findvoiture == null) {
        return res.status(400).json({ errors: "id voiture invalid!" })
    }

    const location = await Location.findAll({
        where: {
            id_voiture: id_voiture,
            date_fin: {
                [Op.gt]: date_debut
            },
            date_debut: {
                [Op.lt]: date_fin
            }
        }
    });

    if (location.length > 0) {
        return res.status(400).json({ errors: "voiture indisponible dans cette periode!" })
    }

    res.status(201).json({ data: "ok" })
}

export const locationprice = async (req, res) => {
    const { date_debut, date_fin, id_voiture } = req.body;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    console.log("new errors", errors)

    let duree = (date_fin - date_debut) / (1000 * 60 * 60 * 24);

    if (duree < 1) {
        return res.status(400).json({ errors: "number de jours invalid!" })
    }

    const result = await Voiture.findByPk(id_voiture, {
        include: [{
            model: Prix_Location,
            as: 'prix',
            required: true
        }]
    })
    if (result == null) {
        return res.status(400).json({ errors: "id voiture invalid!" })
    }

    const prices = result.dataValues.prix.dataValues;
    let price = 0;
    if (duree >= 365 && prices.prix_par_annee != null) {
        price = (duree / 365) * prices.prix_par_annee;
    } else if ((duree >= 28 && duree <= 31)  && prices.prix_par_mois != null) {
        price = (duree / 31) * prices.prix_par_mois;
    }else if (duree >= 7 && prices.prix_par_semain != null) {
        price = (duree / 7) * prices.prix_par_semain;
    }else if (duree > 0 && prices.prix_par_jour != null) {
        price = duree * prices.prix_par_jour;
    }
    if(price == 0){
        return res.status(400).json({ errors: "aucun prix trouve!" })
    }
    res.status(201).json({ data: {price:price}, message: 'le prix total de location' })
}

export const getlocation = async (req, res) => {
    try {
        const result = await Location.findAll({ where: { id_user: req.userId } });
        res.status(200).json({ data: result, message: "Tous les locations de voiture" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const Deletelocation = async (req, res) => {
    try {
        const result = await Location.destroy({ where: { id: req.body.id } });
        res.status(200).json({ data: result, message: "location de voiture supprimer" })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const getlocationById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await Location.findByPk(id)
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updatelocation = async (req, res) => {
    const { id, duree, date_debut, id_voiture, date_fin, succursale_reture } = req.body
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await Location.findByPk(id);
        result.duree = (duree != null ? duree : result.duree);
        result.date_debut = (date_debut != null ? date_debut : result.date_debut);
        result.id_voiture = (id_voiture != null ? id_voiture : result.id_voiture);
        result.date_fin = (date_fin != null ? date_fin : result.date_fin);
        result.succursale_reture = (succursale_reture != null ? succursale_reture : result.succursale_reture);
        await result.save();
        const edited = await Location.findByPk(id);
        res.status(200).json({ data: edited })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}