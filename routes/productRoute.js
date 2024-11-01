const express = require("express")
const { postProduct, productlist, productDetails } = require("../controllers/productController")
const router = express.Router()

router.post('/postproduct', postProduct)
router.get('/productlist', productlist)
router.get('/productdetails/:id', productDetails)


module.exports = router