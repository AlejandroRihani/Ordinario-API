const mongoose = require("mongoose")

//isbn, name, author, publisher, pubDate

const libroSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    pubDate:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Libro", libroSchema)