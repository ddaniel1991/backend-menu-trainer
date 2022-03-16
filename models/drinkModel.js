const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            defualt: undefined
        },
        ingredients: {
            type: [String],
            default: undefined
        },
        image: {
            type: String,
        },
        allergens: {
            type: [String],
        }


    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Drink', drinkSchema)