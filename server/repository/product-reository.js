const Product = require('../models/product');


class ProductRepository { 
    async create(data){
        try{
            const result  = await Product.create(data);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id){
        try{
            const result  = await Product.findByIdAndDelete(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    
    async get(id){
        try{
            const result  = await Product.findById(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(offset,limit){
        try{
            const response = await Product.find().skip(offset).limit(limit);
            return response;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async update(id ,data){
        try{
            const result  = await Product.findByIdAndUpdate(id , data , {new : true}); // because in currently scenario wee needed the updated result
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = ProductRepository;
