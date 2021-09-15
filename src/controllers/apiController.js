const CB = require('../models/CBmodel');


exports.test = (req, res) => {
    res.render('CB');
  };

exports.create = (req, res) => {
    res.render('createPI');
  };

exports.getAll = async (req, res) => {
    CB.find({}).then((cb) => {
        res.send(cb);
    });
};

exports.getById = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await CB.findById(id);
        
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
          .then(cb => res.send(cb))
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

exports.filterAll = async (req, res) => {
    let { name, author } = req.query;

    !name ? (name = "") : (name = name);
    !author ? (author = "") : (author = author);

    try {
        const books = await CB.find({
            name: { $regex: `${name}`, $options: 'i'},
            author: { $regex: `${author}`, $options: 'i'},
        });

        if (books.length === 0)
        return res.status(404).send({ erro: "Book wasn't found."});

        return res.send({books});
    } catch (err) {
        return res.status(500).send({ error: err.message});
    }
};