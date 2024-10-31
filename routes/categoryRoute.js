const express = require('express')
const { testFunction, postCategory, categoryList, categoryDetials, updateCategory, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()

router.get('/demo', testFunction)
router.post('/postcategory', postCategory) // to insert data we have to put method post
router.get('/categorylist', categoryList)
router.get('/categorydetail/:id', categoryDetials)
router.put('/updatecategory/:id', updateCategory)
router.delete('/deletecategory/:id', deleteCategory)

module.exports=router
