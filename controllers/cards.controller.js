const mongoose = require('mongoose');
const Card = require('../models/card.model');

module.exports.create = (req, res, next) => {
    Card.create(req.body)
        .then(card => res.status(201).json(card))
        .catch(err => next(err));
}

module.exports.edit = (req, res, next) => {
    res.status(501).json({ message: 'Unimplemented' });
}

module.exports.move = (req, res, next) => {
    res.status(501).json({ message: 'Unimplemented' });
}

module.exports.remove = (req, res, next) => {
    Card.remove({ _id: req.params.id})
        .then(deleted => {
            if (deleted.result.n > 0) {
                res.status(204).json();
            } else {
                res.status(404).json({ message: 'Card not found' });
            }
        })
        .catch(err => next(err));
}