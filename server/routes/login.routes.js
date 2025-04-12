import express from 'express';
import SignUp from "../controllers/login_signup/signup.controller.js";
import Tempignup from '../controllers/login_signup/TempSignup.controller.js'
const router = express.Router();

router.post('/signup',SignUp);
router.post('/tempsignup',Tempignup)

export default router;