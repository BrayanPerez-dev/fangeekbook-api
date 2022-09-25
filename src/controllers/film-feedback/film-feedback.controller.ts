import { Request,Response } from "express";
import models from '../../../models';
import {iAttributesFilmFeedback,iInstanceFilmFeedback} from '../../../models/filmfeedback'
import { sendResponse,successResponse } from "../../utils/responses";

class FilmFeebackController{
  
    static create = async (req:Request,res:Response) => {
        try {
            const filmFeedbackInstance : iAttributesFilmFeedback = await models.FilmFeedback.create({...<iAttributesFilmFeedback>req.body})
            successResponse(res,201,[filmFeedbackInstance])
        } catch (error:any) {
            console.log(error.message)
            sendResponse(res,500,'',error.errors[0])
        }
    }

    static get = async (req:Request,res:Response) => {
        try {
            const filmFeedbackInstance = await models.FilmFeedback.findAll({
                where:{
                    film_id:req.params.id  
                },
                include: [{
                    model:  models.User,
                }]
            })

            if(!filmFeedbackInstance){
                sendResponse(res,404,'The film feedback does not exist')
            }
            successResponse(res,200,[filmFeedbackInstance])
        } catch (error:any) {
            sendResponse(res,500,'',error.erros[0])
        }
    }
}

export default FilmFeebackController