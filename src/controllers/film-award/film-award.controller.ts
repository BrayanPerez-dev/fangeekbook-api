import { Request,Response } from "express";
import models from '../../../models/index';
import {iAttributesFilmAward,iInstanceFilmAward} from '../../../models/filmaward';
import { successResponse,sendResponse } from "../../utils/responses";


class FilmAwardController {
    static async create(req:Request,res:Response){

        try {
            const filmAwardInstance: iAttributesFilmAward = await models.FilmAward.create({...<iAttributesFilmAward>req.body})
            return successResponse(res,201,[filmAwardInstance])
        } catch (error:any) {
            console.log(error.message)
            return sendResponse(res,500,"",error.errors[0])
        }

    }

    static async get(req:Request,res:Response){
        try {
            const filmAwardInstance = await  models.Film.findAll({
                where: {
                    id: req.params.id,
                  },
                  required: false,
                include: [
                {
                  model: models.AwardType,
                },
                {
                    model: models.AwardCategory,
                },     
            ]
        })

            if(!filmAwardInstance){
                return sendResponse(res,400,"The film award does not exist")
            }
            return successResponse(res,200,[filmAwardInstance])
        } catch (error:any) {
            sendResponse(res,500,"",error.errors[0])
        }
    }
}


export default FilmAwardController