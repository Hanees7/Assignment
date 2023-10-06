const User = require('../models/user');

class UserRepository { 
    async create(data){
        try{
            const result  = await User.create(data);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id){
        try{
            const result  = await User.findByIdAndDelete(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    
    async get(id){
        try{
            const result  = await User.findById(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    async getBYUsername(username){
        try{
            const result  = await User.find({username : username});
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            return error;
        }
    }

    async getAll(offset,limit){
        try{
            const response = await User.find().skip(offset).limit(limit);
            return response;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async getCartItems(userId){
        try{
            const response = await User.findById(userId).populate({path : 'cart'});
            return response;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async update(id ,data){
        try{
            const result  = await User.findByIdAndUpdate(id , data , {new : true}); // because in currently scenario wee needed the updated result
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = UserRepository;
