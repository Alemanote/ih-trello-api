var express = require('express');
var router = express.Router();

const lists = require('../controllers/lists.controller');

router.get('/', lists.getAll);
router.post('/', lists.create);
router.put('/:id', lists.edit);
router.delete('/:id', lists.remove);

module.exports = router;