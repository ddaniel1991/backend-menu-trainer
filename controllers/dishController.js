const asyncHandler = require('express-async-handler');

// @desc Get Dishes
//@route  GET /api/dishes
//@access Private

const getDishes = async (req,res) => {
    res.json({message: "Get Dishes"});

}

// @desc Create a Dish
//@route  Post /api/dishes
//@access Private

const createDish = asyncHandler(async (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.json({message: "Create Dish"});

})

// @desc Update Dish
//@route  PUT /api/dishes/:id
//@access Private

const updateDish = asyncHandler(async (req,res) => {
    res.json({message: `Update Goal ${req.params.id}`});

})

// @desc Delete Dish
//@route  DELETE /api/dishes
//@access Private

const deleteDish = asyncHandler(async (req,res) => {
    res.json({message: `Delete Goal ${req.params.id}`});

})



module.exports = {
    getDishes, 
    createDish, 
    updateDish, 
    deleteDish
}