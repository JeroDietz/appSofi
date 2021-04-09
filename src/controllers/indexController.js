const indexController = {
    home: function(req, res){
        return  res.render('index');
    },
    actividades: function(req,res){
        return res.render('actividades');
    },
    alimentacion: function(req,res){
        return res.render('alimentacion');
    },
    juegos: function(req,res){
        return res.render('juegos');
    }
}
module.exports = indexController;