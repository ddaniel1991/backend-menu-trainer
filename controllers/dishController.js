const asyncHandler = require('express-async-handler');

const Dish = require('../models/dishModel')
// @desc Get Dishes
//@route  GET /api/dishes
//@access Private

const getDishes = async (req,res) => {
    const dishes = await Dish.find()
    res.status(200).json(dishes)

}

// @desc Create a Dish
//@route  Post /api/dishes
//@access Private

const createDish = asyncHandler(async (req,res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a dish name')
    }

    const dish = await Dish.create({

        name: req.body.name,
        description: req.body.description
        
    })

    
    res.status(200).json(dish);

}) 

// @desc Update Dish
//@route  PUT /api/dishes/:id
//@access Private

const updateDish = asyncHandler(async (req,res) => {

    const dish = await Dish.findById(req.params.id)

    if(!dish) {
        res.status(400)
        throw new Error("Dish not found")
    }

    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedDish);

})

// @desc Delete Dish
//@route  DELETE /api/dishes
//@access Private

const deleteDish = asyncHandler(async (req,res) => {
    const dish = await Dish.findById(req.params.id)

    if(!dish) {
        res.status(400)
        throw new Error("Dish not found")
    }

    await dish.remove()
    res.status(200).json({id: req.params.id});

})



module.exports = {
    getDishes, 
    createDish, 
    updateDish, 
    deleteDish
}