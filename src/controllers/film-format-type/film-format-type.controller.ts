import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class FilmFormatTypeController {
   static create =async (req:Request,res:Response) => {
    try {
        const filmFomatTypeInstance: iCatalogueAttributes = await models.FilmFormatType.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[filmFomatTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const filmFormatTypeInstance: iCatalogueInstance = await models.FilmFormatType.findOne({where:{id:req.params.id}});

        if(!filmFormatTypeInstance){
            return sendResponse(res,404,'The Film Format Type does not exists')
        }

        return successResponse(res,200,[filmFormatTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const filmFormatTypeInstance: Array<iCatalogueInstance> = await models.FilmFormatType.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,filmFormatTypeInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const filmFormatTypeInstance = await models.FilmFormatType.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!filmFormatTypeInstance){
            return sendResponse(res,404,'The Film Format Type does not exists')
        }

        filmFormatTypeInstance.update({...<iCatalogueAttributes>req.body});
        filmFormatTypeInstance.save();

        successResponse(res,200,[filmFormatTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const filmFormatTypeInstance = await models.FilmFormatType.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!filmFormatTypeInstance){
            return sendResponse(res,404,'The Film Format Type trying to delete does not exists')
        }
        filmFormatTypeInstance.update({status: false});
        filmFormatTypeInstance.save();

        successResponse(res, 200, [filmFormatTypeInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default FilmFormatTypeController;