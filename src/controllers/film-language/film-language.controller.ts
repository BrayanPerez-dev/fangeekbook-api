import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class FilmLanguageController {
   static create =async (req:Request,res:Response) => {
    try {
        const filmLanguageInstance: iCatalogueAttributes = await models.FilmLanguage.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[filmLanguageInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const filmLanguageInstance: iCatalogueInstance = await models.FilmLanguage.findOne({where:{id:req.params.id}});

        if(!filmLanguageInstance){
            return sendResponse(res,404,'The Film Language does not exists')
        }

        return successResponse(res,200,[filmLanguageInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const filmLanguageInstance: Array<iCatalogueInstance> = await models.FilmLanguage.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,filmLanguageInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const filmLanguageInstance = await models.FilmLanguage.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!filmLanguageInstance){
            return sendResponse(res,404,'The Film Language does not exists')
        }

        filmLanguageInstance.update({...<iCatalogueAttributes>req.body});
        filmLanguageInstance.save();

        successResponse(res,200,[filmLanguageInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const filmLanguageInstance = await models.FilmLanguage.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!filmLanguageInstance){
            return sendResponse(res,404,'The Film Language trying to delete does not exists')
        }

        filmLanguageInstance.update({status: false});
        filmLanguageInstance.save();

        successResponse(res, 200, [filmLanguageInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default FilmLanguageController;