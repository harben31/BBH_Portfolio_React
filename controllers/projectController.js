const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        console.log(db);
        // console.log('req:', req);
        db.Project.find({})
            .then(dbModel => {
                console.log(dbModel)
                return res.json(dbModel)
            })
    }
};