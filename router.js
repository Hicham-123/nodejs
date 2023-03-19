import express from 'express';

import user_router from './routes/userRoutes.js';
import voiture_router from './routes/voiture.js';
import type_router from './routes/type.js';
import prix_router from './routes/prix.js';
import succursale_router from './routes/succursale.js';

const router = express.Router();

router.use('/users', user_router)
router.use('/prix', prix_router)
router.use('/type', type_router)
router.use('/succursale', succursale_router)
router.use('/voiture', voiture_router)

export default router;