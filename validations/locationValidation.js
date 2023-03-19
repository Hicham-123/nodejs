import { body } from "express-validator";

export const locationRules =[
    body('date_fin').notEmpty().isISO8601().toDate().withMessage('la date de reservation doit etre sous form YYYY-MM-dd!'),
    body('date_debut').notEmpty().isISO8601().toDate().withMessage('la date de reservation doit etre sous form YYYY-MM-dd!'),
    body('id_voiture').notEmpty().withMessage('l\'ID de la voiture n\'ai pas valid!'),
]

export const returlocationRules =[
    body('date_fin').notEmpty().isISO8601().toDate().withMessage('la date de naissance doit etre sous form YYYY-MM-dd!'),
    body('succursale_reture').notEmpty().isInt().withMessage('l\'ID de la succursale n\'ai pas valid!'),
]

export const deletRules =[
    body('id').notEmpty().isInt().withMessage('l\'id n\'ai pas valid!')
]


export const updateRules =[
    body('id').notEmpty().isInt().withMessage('l\'id n\'ai pas valid!'),
    body('duree').notEmpty().isInt().withMessage('la duree n\'ai pas valid!'),
    body('date_debut').notEmpty().isISO8601().toDate().withMessage('la date de reservation doit etre sous form YYYY-MM-dd!'),
    body('id_voiture').notEmpty().withMessage('l\'ID de la voiture n\'ai pas valid!'),
    body('etat_location').notEmpty().withMessage('l\'ID de la etat n\'ai pas valid!'),
    body('date_fin').notEmpty().isISO8601().toDate().withMessage('la date de naissance doit etre sous form YYYY-MM-dd!'),
    body('succursale_reture').notEmpty().isInt().withMessage('l\'ID de la succursale n\'ai pas valid!')
]
