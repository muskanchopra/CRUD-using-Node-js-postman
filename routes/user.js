const express = require('express');
const {getAllUsers, createUsers, deleteUser, updateUser} = require('../controllers/userController');
const router = express.Router();


router.get('/all', getAllUsers)


router.post('/create', createUsers)

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)
module.exports = router