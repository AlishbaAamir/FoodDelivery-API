const Category = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()

const categoryByName = async (req, res) => {
    
        try {
              await connect(process.env.MONGO_URI)
             const allCategory = await Category.find()
         res.json({
      category : allCategory
      
       })
}
  catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }  
    }
     
    
    
    

 const categoryById = async (req, res) => {
     const { _id } = req.query


    try {
        await connect(process.env.MONGO_URI)
        const category = await Category.findOne({ _id })
        res.json({ category })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  }

  const createCategory = async (req, res) => {
    const {CategoryName} = req.body
    if(!CategoryName){
        res.json({
            message: "Missing Required Field"
        })
    }
    else {
        try {
              await connect(process.env.MONGO_URI)
const checkExisting =await Category.exists({CategoryName})
if(checkExisting){
    res.json({
        message: "Category Already Exists"
    })
}
else{
    await Category.create({CategoryName})
const allCategory = await Category.find()
res.json({
      message: "Db connected",
      category : allCategory
       })
}
 } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }  
    }
      }

  const updateCategory = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }  
  }

 const deleteCategory = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }  
  }

  module.exports = {categoryByName, categoryById, createCategory, updateCategory, deleteCategory }
