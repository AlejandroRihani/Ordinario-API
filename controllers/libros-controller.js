const Libro = require("../models/libro");

function createLibro(req, res) {
    console.log("Creando libro...");
    console.log(req.body);
    let libro = new Libro({
        id: req.body.id,
        name: req.body.name,
        author: req.body.author,
        publisher: req.body.publisher,
        pubDate: req.body.pubDate,
    });
    libro.save((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}
function findAllLibros(req,res){
    Libro.find().exec((error,libros)=>{
        if(error){
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            code:10,
            data: libros
        });
    })
}

function updateLibro(req,res){
    const libroId = req.params.id;
    const newLibro = req.body;
    //llamar a DB
    Libro.findByIdAndUpdate(libroId, newLibro, { new:true }, (error,result)=>{
        if(error){
            return res.status(500).json({
                error:true,
                message:"Server down",
                code:0 
            });
        }
        if(!result){
            return res.status(400).json({
                error:true,
                message:"Client down",
                code:0
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

function deleteLibro(req,res){
    const libro_Id = req.params.id;
    //llamar a DB
    Libro.findOneAndDelete({id: libro_Id},    (error,result)=>{
        if(error){
            return res.status(500).json({
                error:true,
                message:"Server down",
                code:0
            });
        }
        if(!result){
            return res.status(400).json({
                error:true,
                message:"Client down",
                code:0
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}
module.exports = {
    createLibro,
    findAllLibros,
    updateLibro,
    deleteLibro
}