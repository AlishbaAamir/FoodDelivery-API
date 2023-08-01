const Item = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()
 
 const itemByRestuarent = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
       const allItem = await Item.find()
   res.json({
item : allItem

 })
}
catch (error) {
      res.status(400).json({
          message: "Error"
      })
  }  
   
  }

  const itemByCategory = async (req, res) => {
    const { categoryByName } = req.query


    try {
        await connect(process.env.MONGO_URI)
        const item = await Item.findOne({ categoryByName })
        res.json({ item })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  }

  const createItem = async (req, res) => {
    const {ItemName, Price, Category, Restuarent, thumbnail, description} = req.body
    if(!ItemName || !Price || !Category || !Restuarent || !thumbnail || !description){
       res.json({
        message: "Missing Required Field"
       })
    }
    else {
        
        try {
           await connect(process.env.MONGO_URI)
           const checkExisting =await Item.exists({ItemName, Price, Category, Restuarent, thumbnail, description})
           if(checkExisting){
            res.json({
                message : "Item Already Existing"
            })
           }
           else{
            await Item.create({ItemName, Price, Category, Restuarent, thumbnail, description})
            const allItem = await Item.find()
            res.status(400).json({
            message:"conn",
            item : allItem
           })}
          
        
        } catch (error) {
            res.json({
                message : "Error"
            })
        }
    }
    
  }

  const updateItem = async (req, res) => {
    const {_id, Price, description, thumbnail } = req.body

    const filter = {_id };
const update = { Price, description, thumbnail };

    try {
          await connect(process.env.MONGO_URI)    
         await Item.findOneAndUpdate(filter, update, {
            new: true
          });

          const item = await Item.find()

          res.json({
            message: "Update Suceesfully",
            item
          })
          
    } catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }  
  }
 const deleteItem  = async (req, res) => {
    const { _id } = req.body


    try {
        await connect(process.env.MONGO_URI)
         await Item.deleteOne({ _id })
         const item = await Item.find()
res.status(200).json({ 
    message: "Delete Successfully",
    item })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  }


  module.exports = {itemByRestuarent, itemByCategory, createItem, updateItem, deleteItem}