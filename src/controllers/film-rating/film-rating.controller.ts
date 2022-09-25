import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class FilmRatingController {
   static create =async (req:Request,res:Response) => {
    try {
        const filmRatingInstance: iCatalogueAttributes = await models.FilmRating.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[filmRatingInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const filmRatingInstance: iCatalogueInstance = await models.FilmRating.findOne({where:{id:req.params.id}});

        if(!filmRatingInstance){
            return sendResponse(res,404,'The Film Rating does not exists')
        }

        return successResponse(res,200,[filmRatingInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const filmRatingInstance: Array<iCatalogueInstance> = await models.FilmRating.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,filmRatingInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const filmRatingInstance = await models.FilmRating.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!filmRatingInstance){
            return sendResponse(res,404,'The Film Rating does not exists')
        }

        filmRatingInstance.update({...<iCatalogueAttributes>req.body});
        filmRatingInstance.save();

        successResponse(res,200,[filmRatingInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const filmRatingInstance = await models.FilmRating.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!filmRatingInstance){
            return sendResponse(res,404,'The Film Rating trying to delete does not exists')
        }

        filmRatingInstance.update({status: false});
        filmRatingInstance.save();

        successResponse(res, 200, [filmRatingInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default FilmRatingController;