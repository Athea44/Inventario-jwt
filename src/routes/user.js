const express = require("express")
const { createUsuario , getAllUser, getUserById, deleteUsuarioID, actualizarUsuario, getAllUserActive} = require('../controllers/usuario');
const router = express.Router()
const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../validators/helpers/validateHelper')
const { validarJWT }= require('../middlewares/validar-jwt')
const {validarRolAdmin} = require('../middlewares/validar-rol-admin')

// create user
router.post("/", [
  check('name')
    .exists()
    .not()
    .isEmpty(),
    check('email')
    .exists()
    .not()
    .isEmpty(),
    check('estado')
    .exists()
    .not()
    .isEmpty(),
    check('clave')
    .exists()
    .not()
    .isEmpty(),
    check('rol')
    .exists()
    .not()
    .isEmpty(),
    validarJWT,
    validarRolAdmin,
    (req, res, next) => {
        validateResult(req, res, next)
    }
], createUsuario );


router.get("/", [
  validarJWT
], getAllUser);

  
router.get("/active", [validarJWT], getAllUserActive);


router.get("/:id", [validarJWT], getUserById);


router.delete("/:id", [validarJWT,
validarRolAdmin], deleteUsuarioID);


router.put("/:id" , [validarJWT, validarRolAdmin], actualizarUsuario);

module.exports = router;