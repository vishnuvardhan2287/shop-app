import express from 'express';
const router = express.Router();

import {authUser,registerUser,getUserProfile} from '../controllers/userControllers.js';

import {protect} from '../middleware/authMiddleware.js'

router.post('/register', registerUser)
router.post('/login',authUser)
router.get('/profile',protect,getUserProfile)

export default router;