const app = require('express')
const router = app.Router()

const {login, singup, getAllUsers, userByID, deleteUser, updateProfile} = require('./Controller')

router.post('/login', login)
router.post('/singup', singup)
router.get('/getAllUsers', getAllUsers)
router.get('/userByID', userByID)
router.delete('/deleteUser', deleteUser)
router.put('/updateProfile', updateProfile)





module.exports = router

