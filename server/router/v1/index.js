const express = require('express');
const {createUser , getCartItems , addToCart ,login , getProducts} = require("../../controller/user-controlller");
const router = express.Router();

router.post("/create" , createUser);
router.post("/addToCart" , addToCart);
router.post("/getCartProducts", getCartItems);
router.post("/Login",login)
router.get("/products", getProducts);

module.exports = router;