import { CrudRepository } from "./crud-repository.js";
import { User } from "../models/index.js";

export class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}