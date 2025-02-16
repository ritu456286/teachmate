import { Teacher } from "../models/index.js";
import { User } from "../models/index.js";
import { UserRepository } from "./index.js";


export class TeacherRepository extends UserRepository{
    constructor(){
        super(Teacher);
    }
}
