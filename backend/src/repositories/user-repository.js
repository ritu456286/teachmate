import { CrudRepository } from "./crud-repository.js";
import { User } from "../models/index.js";


export class UserRepository extends CrudRepository{
    constructor(model = User){ //default to User
        super(model);
    }

     //FIND BY EMAIL
    async findByEmail(email){
        const response = await this.model.findOne({email: email}, '-password').exec();
        return response;
    }
}