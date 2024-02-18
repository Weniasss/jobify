import { StatusCodes } from "http-status-codes";

import Result from '../models/ResultModel.js'

export const createResult = async(req, res) => {
    const result = await Result.create(req.body);
    res.status(StatusCodes.CREATED).json({result})
}

export const getAllResults = async(req, res) => {
    const results = await Result.find()
    res.status(StatusCodes.OK).json({results})
}

export const getResultsById = async(req, res) => {
    console.log(req.body)

    const query = {userId: req.params.id}
    const results = await Result.find(query)
    res.status(StatusCodes.OK).json({ results})
}