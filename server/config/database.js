const  mongoose  = require("mongoose");

 const connect = async ()=>{
    await mongoose .connect('mongodb://localhost/cart_dev');
}
module.exports = connect;
