//mismo nombre que la ruta

const getestrenos = function (req, res) {
    res.json({name:'controlador de estrenos'})
    }

const getpopulares = function (req, res) {
    res.json({name:'controlador de populares'})
    }

module.exports = {//exportar los metodos
    getestrenos,
    getpopulares
}