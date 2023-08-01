const { Schema, model } = require('mongoose')

const ItemSchema = new Schema(
    {
        ItemName:{
            type: String,
            unique: true,
            require: true 
        },
        Price:{
            type: String,
            required: true
        },
        Category:{
            type: String,
            require: true
        },
        Restuarent:{
            type: String,
        require: true
        },
        thumbnail:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        }
    })

    const Item = model('item', ItemSchema)
    module.exports = Item