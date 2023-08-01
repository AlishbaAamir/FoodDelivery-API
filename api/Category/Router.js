const app = require('express')
const router = app.Router()
const {categoryByName, categoryById, createCategory, updateCategory, deleteCategory }  = require('./Controller')

router.get('/categoryByName', categoryByName )
router.get('/categoryById', categoryById )
router.post('/createCategory', createCategory)
router.put('/updateCategory', updateCategory)
router.delete('/deleteCategory', deleteCategory )
   
  module.exports = router
