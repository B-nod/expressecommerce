const express = require("express")
const { postProduct, productlist, productDetails, updateProduct, deleteProduct } = require("../controllers/productController")
const router = express.Router()

router.post('/postproduct', postProduct)
router.get('/productlist', productlist)
router.get('/productdetails/:id', productDetails),
router.put('/updateproduct/:id', updateProduct),
router.delete('/deleteproduct/:id', deleteProduct)


module.exports = router