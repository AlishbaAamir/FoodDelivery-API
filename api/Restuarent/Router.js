const app = require('express')
const router = app.Router()

const {restuarentByName, restuarentById, createRestuarent, updateRestuarent, deleteRestuarent } = require('./Controller')

router.get('/restuarentByName', restuarentByName)
router.get('/restuarentById', restuarentById)
router.post('/createRestuarent', createRestuarent)
router.put('/updateRestuarent', updateRestuarent)
router.delete('/deleteRestuarent', deleteRestuarent)

  module.exports = router