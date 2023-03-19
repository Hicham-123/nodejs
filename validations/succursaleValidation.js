import { body } from "express-validator";

export const succursaleRules =[
    body('nom').notEmpty().withMessage('le nom n\'ai pas valid!'),
    body('description').notEmpty().isLength({min:10,max:500}).withMessage('le description doit avoir entre 10 et 500 caracter!'),
    body('Ville').notEmpty().withMessage('la Ville n\'ai pas valid!'),
]
