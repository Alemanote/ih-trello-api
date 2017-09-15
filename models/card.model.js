const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        required: 'Card needs a title'
    },
    description: String,
    dueDate: Date,
    position: Number,
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        require: true,
        required: 'Card needs a list owner'
    }
}, { timestamps : true});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;