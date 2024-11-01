const express = require("express")
const { postProduct, productlist, productDetails, updateProduct, deleteProduct } = require("../controllers/productController")
const router = express.Router()
const upload = require('../middleware/fileUpload')

router.post('/postproduct',upload.single('product_image'), postProduct)
router.get('/productlist', productlist)
router.get('/productdetails/:id', productDetails),
router.put('/updateproduct/:id', upload.single('product_image'), updateProduct),
router.delete('/deleteproduct/:id', deleteProduct)


module.exports = router