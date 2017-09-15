var express = require('express');
var router = express.Router();

const cards = require('../controllers/cards.controller');

router.post('/', cards.create);
router.put('/:id', cards.edit);
router.put('/:id/move', cards.move);
router.delete('/:id', cards.remove);

module.exports = router;