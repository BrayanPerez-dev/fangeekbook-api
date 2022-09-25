import { Request,Response } from "express";
import models from '../../../models';
import {iAttributesFilmPicture,iInstanceFilmPicture} from '../../../models/filmpicture'
import { sendResponse,successResponse } from "../../utils/responses";

class FilmPictureController{
  
    static create = async (req:Request,res:Response) => {
        try {
            const filmPictureInstance : iAttributesFilmPicture = await models.FilmPicture.create({...<iAttributesFilmPicture>req.body})
            successResponse(res,201,[filmPictureInstance])
        } catch (error:any) {
            sendResponse(res,500,'',error.errors[0])
        }
    }

    static get = async (req:Request,res:Response) => {
        try {
            const filmPictureInstance = await models.FilmPicture.findAll({
                where:{
                    film_id:req.params.id
                }
            })
            if(!filmPictureInstance){
                sendResponse(res,404,'The film picture does not exist')
            }
            successResponse(res,200,[filmPictureInstance])
        } catch (error:any) {
            sendResponse(res,500,'',error.erros[0])
        }
    }
}

export default FilmPictureController