const Restuarent = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()


const getAllRestuarent = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
       const allRestuarent = await Restuarent.find()
   res.json({
restuarent : allRestuarent

 })
}
catch (error) {
      res.status(400).json({
          message: "Error"
      })
  }  
   
  }
  const restuarentByName = async (req, res) => {
    const {  RestuarentName } = req.query


    try {
        await connect(process.env.MONGO_URI)
        const restuarent = await Restuarent.findOne({ RestuarentName })
        res.json({ restuarent })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  }

 const restuarentById = async (req, res) => {
    const { _id } = req.query


    try {
        await connect(process.env.MONGO_URI)
        const restuarent = await Restuarent.findOne({ _id })
        res.json({ restuarent })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  }
  

 const createRestuarent = async (req, res) => {
    const {RestuarentName, RestuarentImage,City, Adress } = req.body

    if(!RestuarentName || !RestuarentImage || !City || !Adress){
    res.json({
        message: "Missing Required Field"
    })
    }
    else{
        try {
            await connect(process.env.MONGO_URI)
        const checkExisting =await Restuarent.exists({RestuarentName, RestuarentImage, City, Adress})
if(checkExisting){
    res.json({
        message: "Category Already Exists"
    })
}
else{
    await Restuarent.create({RestuarentName, RestuarentImage,City, Adress })
    const allRestuarent = await Restuarent.find()

    res.status(400).json({
        message : "DB Connected",
        restuarent : allRestuarent
    })
}
        } catch (error) {
            res.status(200).json({
                message: "Error"
            })  
        }
    }
    
  }

 const updateRestuarent = async(req, res) => {
    const {_id, RestuarentImage} = req.body

    const filter = {_id };
const update = { RestuarentImage };

    try {
          await connect(process.env.MONGO_URI)    
         await Restuarent.findOneAndUpdate(filter, update, {
            new: true
          });

          const restuarent = await Restuarent.find()

          res.json({
            message: "Update Suceesfully",
            restuarent
          })
          
    } catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }  
  }

 const deleteRestuarent = async (req, res) => {
    const { _id } = req.body


    try {
        await connect(process.env.MONGO_URI)
         await Restuarent.deleteOne({ _id })
         const restuarent = await Restuarent.find()
res.status(200).json({ 
    message: "Delete Successfully",
    restuarent })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
  }

  module.exports = {getAllRestuarent, restuarentById, restuarentByName, createRestuarent, updateRestuarent, deleteRestuarent}