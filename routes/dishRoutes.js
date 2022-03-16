const express = require('express');
const router = express.Router();
const { getDishes, createDish, updateDish, deleteDish } = require('../controllers/dishController');


router.route("/").get(getDishes).post(createDish);

router.route("/:id").put(updateDish).delete(deleteDish)






module.exports = router