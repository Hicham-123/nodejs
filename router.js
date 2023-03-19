import express from 'express';

import user_router from './routes/userRoutes.js';
import type_router from './routes/type.js';
import prix_router from './routes/prix.js';

const router = express.Router();

router.use('/users', user_router)
router.use('/prix', prix_router)
router.use('/type', type_router)

export default router;