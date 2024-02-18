import { StatusCodes } from "http-status-codes";

import Test from '../models/TestModel.js'


export const createTest = async(req, res) => {

    const test = await Test.create(req.body);
    res.status(StatusCodes.CREATED).json({test})
}

export const getAllTests = async(req, res) => {

    const {name, language, tags, difficulty} = req.query;

    console.log(req.query.name)

    const queryObject = {
       
    }

    if(name){
        queryObject.$or = [
            { name: { $regex: name, $options: 'i' } },
          ];
    }

    if(language && language !== 'all'){
        queryObject.language = language;
    }

    if(tags && tags !== 'all'){
        queryObject.tags = tags;
    }

    if(difficulty && difficulty !== 'all'){
        queryObject.difficulty = difficulty;
    }

  


    const tests = await Test.find(queryObject);

    res.status(StatusCodes.OK).json({tests})
}

export const getTest = async(req, res) => {
    const test = await Test.findById(req.params.id);
    res.status(StatusCodes.OK).json({test});
}