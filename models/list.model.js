const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        required: 'List needs a title'
    },
    position: Number,
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
}, { timestamps: true });

const List = mongoose.model('List', listSchema);
module.exports = List