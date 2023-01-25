import express from 'express'
import { body } from 'express-validator';
import { login, register } from '../controllers/auth.controller.js';
import { validarCampos } from '../middlewares/valida-campos.js';

const router = express.Router();

router.post('/register', [
    body('email', 'Formato de email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', 'Formato incorrecto, mínimo 6 caracteres')
        .trim()
        .isLength({ min: 6 }),
    body('password')
        .custom((value, { req }) => {
            if (value !== req.body.repassword) {
                throw new Error('No coinciden las contraseñas')
            }
            return value;
        }),
    validarCampos
], register)

router.post('/login', [
    body('email', 'Formato de email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', 'Formato incorrecto, mínimo 6 caracteres')
        .trim()
        .isLength({ min: 6 }),
    validarCampos
], login)


export default router;