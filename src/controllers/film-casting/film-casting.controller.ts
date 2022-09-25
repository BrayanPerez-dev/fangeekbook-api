import { Request,Response } from "express";
import models from '../../../models/index';
import {iAttributesFilmCasting,iInstanceFilmCasting} from '../../../models/filmcasting';
import { successResponse,sendResponse } from "../../utils/responses";


class FilmCastingController {
    static async create(req:Request,res:Response){

        try {
            const filmCastingInstance: iAttributesFilmCasting = await models.FilmCasting.create(<iAttributesFilmCasting>req.body)
            return successResponse(res,201,[filmCastingInstance])
        } catch (error:any) {
            return sendResponse(res,500,"",error.errors[0])
        }

    }

    static async get(req:Request,res:Response){
        try {
            const filmCastingInstance = await models.Celebrity.findAll({
                include: [
                    {
                      model: models.Film,
                      where: {
                        id: req.params.id,
                      },
                    },
                  ],
            })

            if(!filmCastingInstance){
                return sendResponse(res,400,"The film casting does not exist")
            }
            return successResponse(res,200,[filmCastingInstance])
        } catch (error:any) {
            sendResponse(res,500,"",error.errors[0])
        }
    }
}


export default FilmCastingController