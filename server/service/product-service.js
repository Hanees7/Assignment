const ProductRepository = require('../repository/product-reository');


class ProductService {
    constructor(){
        this.productRepository = new ProductRepository();
    }
    async create(data){
        try{
            const result  = await productRepository.create(data);
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async destroy(id){
        try{
            const result  = await productRepository.findByIdAndDelete(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }
    
    async get(id){
        try{
            const result  = await productRepository.findById(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async getAll(offset,limit){
        try{
            const response = await this.productRepository.getAll(offset , limit);
            return response;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async update(id ,data){
        try{
            const result  = await productRepository.findByIdAndUpdate(id , data , {new : true}); // because in currently scenario wee needed the updated result
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = ProductService;