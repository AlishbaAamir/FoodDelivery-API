const app = require('express')
const router = app.Router()
const {itemByRestuarent, itemByCategory, createItem, updateItem, deleteItem} = require('./Controller')

router.get('/itemByRestuarent', itemByRestuarent)
router.get('/itemByCategory', itemByCategory )
router.post('/createItem', createItem )
router.put('/updateItem', updateItem)
router.delete('/deleteItem', deleteItem )

  module.exports = router