import { body } from "express-validator";

export const loginRules =[
    body('email').isEmail().notEmpty().withMessage('l\'email n\'ai pas valid!'),
    body('mot_de_passe').notEmpty().isLength({min:8}).withMessage('le mot de passe doit avoir plus de 7 caracteres.')
]

export const inscriptionRules =[
    body('prenom').notEmpty().withMessage('le prenom peut pas etre vide!'),
    body('nom').notEmpty().withMessage('le nom peut pas etre vide!'),
    body('naissance').notEmpty().isISO8601().toDate().withMessage('la date de naissance doit etre sous form YYYY-MM-dd!'),
    body('photo'),
    body('phone'),
    body('email').isEmail().notEmpty().withMessage('l\'email n\'ai pas valid!'),
    body('mot_de_passe').notEmpty().isLength({min:8}).withMessage('le mot de passe doit avoir plus de 7 caracteres.')
]
