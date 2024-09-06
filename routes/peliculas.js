//mismo nombre que el controlador
const {Router} = require('express');//es un contenedor con las rutas para llevarlo a modelo
const {getPeliculas, getestrenos}= require('../controllers/peliculas');//traigo (desestructurando) unicamente el controlador get pliculas
const rutas = Router();//instancio el contenedor

//este metodo get dice donde esta la ruta? (/peliculas) ok, donde esta la logica (getestrenos) aca, y la trae
rutas.get('/peliculas' , getestrenos)
rutas.get('/peliculas' , getpopulares)

module.exports = rutas;//exporto el modulo