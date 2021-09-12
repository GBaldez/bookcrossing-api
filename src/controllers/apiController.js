const CB = require('../models/CBmodel');

exports.getAll = async (req, res) => {
    CB.find({}).then((cb) => {
        res.send(cb);
    });
};

exports.getById = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await CB.findById(id);
        //colocar no middleware
        if (!book) {
            res.status(404).send({ message: "Book was not found."});
            return;
        }
        return res.send({book});
    } catch(err){
        res.status(500).send({error: err});
    }
};


module.exports.details = (req, res, next) =>{
        let lng = parseFloat(req.query.lng);
        let lat = parseFloat(req.query.lat);
        
        CB.aggregate([{
          '$geoNear': {
          "near": { 'type': 'Point',
          "coordinates": [parseFloat(lng), parseFloat(lat)] },
          "spherical": true,
          "distanceField": 'dist',
          "$limit": 3,
          "$maxDistance": 100000
        }
         }])
          .then(pi => res.send(pi))
          .catch(next);
};

//next chama o próximo middleware caso ocorra um erro.
exports.create = (req, res, next) => {
     CB.create(req.body).then((cb)=> {
        res.send(cb);
    }).catch(next);
};

exports.update = (req, res, next) => {
    CB.findByIdAndUpdate({_id: req.params.id},
        req.body).then(() =>{
            CB.findOne({_id:req.params.id}).then((cb) => {
                res.send(cb);
            });
        }).catch(next);
};

exports.delete = (req, res, next) => {
    CB.findByIdAndRemove({_id:
    req.params.id}).then((cb) => {
        res.send(cb);
    }).catch(next);
};