mongoose = require('mongoose');
const _ = require('lodash');
const List = require('../models/list.model');
const Card = require('../models/card.model');

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
    List.findById(req.params.id)
        .then(list => {
            if (list) {
                _.merge(list, req.body);
                list.save()
                    .then(list => res.status(200).json(list))
                    .catch(err => next(err));
            } else {
                res.status(404).json({ message: 'List not found' })
            }
        })
        .catch(err => next(err));
}

module.exports.remove = (req, res, next) => {
    // TODO: validate id as a valid ObjectId 
    List.remove({_id : req.params.id})
        .then(removed => {
            if (removed.result.n > 0) {
                res.status(204).json()
            } else {
                res.status(404).json({ message: 'List not found'})
            }
        })
        .catch(err => next(err));
}