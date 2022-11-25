const express = require("express");
const router = express.Router();
const librosController = require("../controllers/libros-controller");

router.post("/", librosController.createLibro);
//router.get("/hola", (req, res) => { res.send("Hola mundo!")});
router.get("/", librosController.findAllLibros);
router.put("/:id",librosController.updateLibro);
router.delete("/:id",librosController.deleteLibro);
module.exports = router;