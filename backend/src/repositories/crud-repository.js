import { AppError } from "../utils/error/app-error.js";
import { StatusCodes } from "http-status-codes";

export class CrudRepository {
    constructor(model){
        this.model = model;
    }

    //CREATE
    async create(data) { //data : {field: val}
        return await this.model.create(data);
    }

    //RETRIEVE: all
    async getAll(){
        return await this.model.find({});
        // this.model.find({}).lean(); // Use .lean() for performance
    }

    //RETRIEVE: by id
    async getById(id){
        const response = await this.model.findById(id);
        return response;
    }

    //UPDATE
    async update(id, data) { 
        const response =  await this.model.findByIdAndUpdate(id, data, {new: true});
        if(!response){
            throw new AppError("Unable to find the resource", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    //DELETE
    async delete(id){
        const response = await this.model.findByIdAndDelete(id);
        if(!response){
            throw new AppError("Unable to find the resource", StatusCodes.NOT_FOUND);
        }
        return response;
    }

   
}