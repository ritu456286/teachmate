import { Student } from "../models/index.js";
import { UserRepository } from "./index.js";


export class StudentRepository extends UserRepository{
    constructor(){
        super(Student);
    }
}