const express = require("express");
const router = express.Router();
const fruits = require("../controllers/fruits")

router.get('/', fruits.index)

router.get('/:name', fruits.show);

router.post('/', fruits.create) // Create new fruit

router.patch('/:name', fruits.update) // Partial update only

router.delete('/:name', fruits.destroy);

module.exports = router;
