//este es nuestro servidor donde se exporta toda esta logica:
//utiizar express, definir un puerto y un metodo listen que escucha a la api

express = require('express');

class Server {//clase server

    Server() { //connstructor
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.rutas();
    }

    rutas(){
        this.app.use('/api/v1/peliculas'('../routes/peliculas'))
        //aca van las rutas de los compis
    }
    listen(){//funcion
        this.app.listen(port, () => {//escucho el puerto
            console.log(`la api esta escuchando el puerto: ${this.port}`)
          })
    }}

    module.exports = Server; //esto me permite exportar la clase para despues instanciarla en app.js