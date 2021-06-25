const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collabSchema = Schema ({
    name: {
        type: String,
        required: true
    },
    gitHubUrl: {
        type: String,
        required: true
    }
})

const projectSchema = new Schema({
    screenShot: {
        type: String,
    },
    repoUrl: {
        type: String,
        required: true
    },
    deployedUrl: {
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
    collaborators: collabSchema
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;