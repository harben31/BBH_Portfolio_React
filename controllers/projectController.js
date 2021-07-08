const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Project.find({})
            .then(dbModel => {
                return res.json(dbModel);
            });
    }
};