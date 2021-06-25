import axios from 'axios';

export default {
    getProjects: function() {
        return axios.get('/api/projects');
    },
    getOneProject: function(id) {
        return axios.get(`/api/project/${id}`)
    },
    addProject: function(projectData) {
        return axios.post('/api/projects', projectData);
    },
    deleteProject: (id) => {
        return axios.delete(`/api/projects/${id}`)
    }
};