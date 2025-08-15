import express from 'express';
import {
  registerUser,
  loginUser,
  getUserById,
} from '../controllers/Usercon.js';

const router = express.Router();


router.post('/register', registerUser);


router.post('/login', loginUser);


router.get('/:id', getUserById);

export default router;
