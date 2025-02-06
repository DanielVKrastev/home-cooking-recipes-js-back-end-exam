import { Router } from "express";
import authService from "../services/auth-service.js";
import { AUTH_COOKIE_NAME } from "../constants-config.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    const userData = req.body;

    try{
        const token = await authService.register(userData);
        res.cookie(AUTH_COOKIE_NAME, token, { expiresIn: '2h', httpOnly: true });
        res.redirect('/');
    }catch(err){

    }
})

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
        const token = await authService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, token, { expiresIn: '2h', httpOnly: true });
        res.redirect('/');
    }catch(err){
        
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
})

export default authController;