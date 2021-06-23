const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    screenShot: {
        data: buffer,
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    technology: {
        type: String,
        required: true
    },
    collaborators:{
        type: String,
        required: true,
    }
});

const Project = new mongoose.model('Project', projectSchema);

module.exports = Project;