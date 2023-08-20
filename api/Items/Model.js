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
        category:{
            type: String,
            require: true
        },
        restuarent:{
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