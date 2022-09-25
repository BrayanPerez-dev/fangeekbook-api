import { Request,Response } from "express";
import models from '../../../models';
import {iAttributesCelebrityPicture,iInstanceCelebrityPicture} from '../../../models/celebritypicture'
import { sendResponse,successResponse } from "../../utils/responses";

class CelebrityPictureController{
  
    static create = async (req:Request,res:Response) => {
        try {
            const celebrityPictureInstance : iAttributesCelebrityPicture = await models.CelebrityPicture.create({...<iAttributesCelebrityPicture>req.body})
            successResponse(res,201,[celebrityPictureInstance])
        } catch (error:any) {
            sendResponse(res,500,'',error.errors[0])
        }
    }

    static get = async (req:Request,res:Response) => {
        try {
            const celebrityPictureInstance = await models.CelebrityPicture.findAll({
                where:{
                    celebrity_id:req.params.id
                }
            })
            
            if(!celebrityPictureInstance){
                sendResponse(res,404,'The celebrity picture does not exist')
            }
            return successResponse(res,200,[celebrityPictureInstance])
        } catch (error:any) {

            sendResponse(res,500,'',error.erros[0])
        }
    }
}

export default CelebrityPictureController