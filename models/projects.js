const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {type: String, required:true},
    github: {type: String, required:true},
    description: {type: String, required:false},
    image: {type: String, required:true}
    
})

module.exports = mongoose.model("Project", projectSchema);