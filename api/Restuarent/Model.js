const { Schema, model } = require('mongoose')

const RestuarentSchema = new Schema(
    {
        RestuarentName:{
            type: String,
            unique: true,
            require: true 
        },
        RestuarentImage:{
            type: String,
            required: true
        },
        City:{
            type: String,
            require: true,
        },
        Adress:{
            type: String,
            unique: true,
            require: true
        }
    })

    const Restuarent = model('restuarent', RestuarentSchema)
    module.exports = Restuarent