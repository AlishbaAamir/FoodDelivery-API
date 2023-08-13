const { Schema, model } = require('mongoose')

const CategorySchema = new Schema(
    {
        CategoryName: {
            type: String,
            unique: true,
            require: true
        },
        CategoryImage:{
             type : String,
             require: true
        }
    }
)
const Category = model('category', CategorySchema)
module.exports = Category