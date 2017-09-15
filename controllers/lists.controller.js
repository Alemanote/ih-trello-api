mongoose = require('mongoose');
const List = require('../models/list.model');

module.exports.getAll = (req, res, next) => {
    List.find()
        .populate('cards')
        .then(lists => res.json(lists))
        .catch(err => next(err) );
}

module.exports.create = (req, res, next) => {
    List.create(req.body)
        .then(list => res.status(201).json(list))
        .catch(err => next(err) );
}

module.exports.edit = (req, res, next) => {
    res.status(501).json({ message: 'Unimplemented' });
}

module.exports.remove = (req, res, next) => {
    res.status(501).json({ message: 'Unimplemented' });
}