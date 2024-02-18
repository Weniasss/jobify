import { StatusCodes } from "http-status-codes";

import Discuss from '../models/DiscussModel.js'

export const createDiscuss = async(req, res) => {

    const discuss = await Discuss.create(req.body);
    res.status(StatusCodes.CREATED).json({discuss})
}

export const getAllDiscuss = async(req, res) => {

    const discuss = await Discuss.find();

    res.status(StatusCodes.OK).json({discuss})
}

export const updateDiscuss = async (req, res) => {
    const updatedDiscuss = await Discuss.findByIdAndUpdate(req.params.id,{
        $push: {commnents : req.body.commnents}
    })
    res.status(StatusCodes.OK).json({msg:'job modified',  discuss:updatedDiscuss });
}

export const getDiscuss = async (req, res) => {
    const discuss = await Discuss.findById(req.params.id);
    res.status(StatusCodes.OK).json({discuss});
}