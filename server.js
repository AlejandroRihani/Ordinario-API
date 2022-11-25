require("dotenv").config();
const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose");

//crear server
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
port = process.env.PORT || 3001;
app.use("/libros", require("./routes/libros-routes"));

//conexion DB   
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

//setear manejo enevntos
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos"));

//iniciar server
app.listen(port, () => console.log("el server esta escuchando..."));