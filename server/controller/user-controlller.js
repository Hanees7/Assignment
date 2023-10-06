const UserService = require("../service/user-service");
const ProductService = require("../service/product-service");
const userService = new UserService();
const productService = new ProductService();
// const signUp= async(req,res)=>{
//     try{
//         const response = await userService.signup({
//             email: req.body.email,
//             password: req.body.password,
//             name : req.body.name
//         });
//         return res.status(201).json({
//             sucess: true,
//             message:'Sucessfully created a new user',
//             data : response,
//             err: {}
//         });
//     }
//     catch(error){
//         console.log(error);
//         return res.status(500).json({
//             message: "something went wrong",
//             data: {},
//             sucess: false,
//             err: error
//         });
//     }
// }
const getProducts = async(req,res) => {
    try{
        const product  = await productService.getAll(req.body.offset , req.body.limit);
        return res.status(200).json({
            message: 'sucessfully logged in',
            success : true,
            data : product,
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}
const login = async(req,res) => {
    try{
        const user  = await userService.signin(req.body);
        return res.status(200).json({
            message: 'sucessfully logged in',
            success : true,
            data : user,
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}

const createUser = async(req,res) => {
    try{
        const user  = await userService.create(req.body);
        return res.status(200).json({
            message: 'sucessfully created the account',
            success : true,
            data : user,
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}

const addToCart = async(req,res) => {
    try{
        const item  = await userService.addToCart(req.body.productId , req.body.userId);
        return res.status(200).json({
            message: 'item added to cart',
            success : true,
            data : item,
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}

const getCartItems = async(req,res) => {
    try{
        console.log(req.body.userId);
        const products  = await userService.getCartItems(req.body.userId);
        console.log(products);
        return res.status(200).json({
            message: 'sucessfully fetched all the items',
            success : true,
            data : products,
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}
module.exports = {
    createUser,
    addToCart,
    getCartItems,
    login,
    getProducts
}