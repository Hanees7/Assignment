const UserRepository = require('../repository/user-repository');
const ProductRepository = require('../repository/product-reository');
class ProductService {
    constructor(){
        this.userRepository = new UserRepository();
        this.productRepository = new ProductRepository();
    }

    async signin(data){
            const user = await this.userRepository.getBYUsername(data.username);
            console.log(user);
            if(user.length){
                if(data.password === user[0].password){
                    const newUser = {
                        _id:user[0]._id,
                        name: user[0].name,
                        cart : user[0].cart.length
                    }
                    return newUser;
                }
                else{
                    throw new Error('enter  valid password');
                }
            }
            else{
                // console.log("here");
                throw new Error('Throw makes it go boom!')
            }
    }
    async addToCart(productId, userId){
        try{
            const product = await this.productRepository.get(productId);
            const user = await this.userRepository.get(userId);
            if(product && user){
                const response  = await user.cart.push(productId);
                user.save();
                return user;
            }
            else{
                throw error;
            }
        }
        catch(error){
            return error;
        }
    }
    async getCartItems(userId){
        try{
            const response = await this.userRepository.getCartItems(userId);
            return response;
        }
        catch(error){
            console.log(error);
            return error;
        }
    }
    async create(data){
        try{
            const result  = await this.userRepository.create(data);
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async destroy(id){
        try{
            const result  = await userRepository.findByIdAndDelete(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }
    
    async get(id){
        try{
            const result  = await userRepository.findById(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async getAll(offset,limit){
        try{
            const response = await userRepository.find().skip(offset).limit(limit);
            return response;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async update(id ,data){
        try{
            const result  = await userRepository.findByIdAndUpdate(id , data , {new : true}); // because in currently scenario wee needed the updated result
            return result;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = ProductService;