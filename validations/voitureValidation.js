import { body } from "express-validator";

export const addcar =[
    body('nom').notEmpty().withMessage('le nom de la voiture n\'ai pas valid!'),
    body('annee').notEmpty().isLength({min:4,max:4}).withMessage('l\'annee de la voiture doit etre sous form YYYY.'),
    body('description').notEmpty().isLength({min:10,max:500}).withMessage('le description doit avoir entre 10 et 500 caracter!'),
    body('type_voiture').notEmpty().isInt().withMessage('type de voiture invalid!'),
    body('succursale').notEmpty().isInt().withMessage('succursale invalid!'),
    body('prix_location').notEmpty().isInt().withMessage('prix de location invalid!')
]

export const addtypecar =[
    body('marque').notEmpty().withMessage('la marque de voiture est invalid!'),
    body('model').notEmpty().withMessage('la model de voiture est invalid!'),
    body('description').notEmpty().isLength({min:10,max:500}).withMessage('le description doit avoir entre 10 et 500 caracter!'),
]

export const addrentprice =[
    body('prix_par_jour').notEmpty().isFloat().withMessage('la marque de voiture est invalid!'),
    body('prix_par_semain'),
    body('prix_par_mois'),
    body('prix_par_annee'),
]

export const addproblemRoles =[
    body('idlocation').notEmpty().isInt().withMessage('la marque de voiture est invalid!'),
    body('frais').notEmpty().isDecimal().withMessage('la model de voiture est invalid!'),
    body('problem').notEmpty().isLength({min:10,max:500}).withMessage('le problem doit avoir entre 10 et 500 caracter!'),
]