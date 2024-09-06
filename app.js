//const express = require('express');//traigo express (ya lo hice en server)
require('dotenv').config();//traigo dotenv
//const app = express();//app va a ser express
const port = process.env.PORT || 3000;//me traigo el puerto de mi archivo .env o por deafault 3000

const server = require('./models/server');//traigo el archivo server

const servidor = new Server();//instancio el servidor

servidor.listen()



