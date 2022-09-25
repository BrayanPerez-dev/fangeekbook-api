import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class FilmGenreTypeController {
   static create =async (req:Request,res:Response) => {
    try {
        const filmGenreTypeInstance: iCatalogueAttributes = await models.FilmGenreType.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[filmGenreTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const filmGenreTypeInstance: iCatalogueInstance = await models.FilmGenreType.findOne({where:{id:req.params.id}});

        if(!filmGenreTypeInstance){
            return sendResponse(res,404,'The Film Genre Type does not exists')
        }

        return successResponse(res,200,[filmGenreTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const filmGenreTypeInstance: Array<iCatalogueInstance> = await models.FilmGenreType.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,filmGenreTypeInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const filmGenreTypeInstance = await models.FilmGenreType.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!filmGenreTypeInstance){
            return sendResponse(res,404,'The Film Genre Type does not exists')
        }

        filmGenreTypeInstance.update({...<iCatalogueAttributes>req.body});
        filmGenreTypeInstance.save();

        successResponse(res,200,[filmGenreTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const filmGenreTypeInstance = await models.filmGenreType.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!filmGenreTypeInstance){
            return sendResponse(res,404,'The Film Genre Type trying to delete does not exists')
        }
        filmGenreTypeInstance.update({status: false});
        filmGenreTypeInstance.save();

        successResponse(res, 200, [filmGenreTypeInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default FilmGenreTypeController;