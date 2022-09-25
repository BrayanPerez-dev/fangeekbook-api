import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class FilmCategoryController {
   static create =async (req:Request,res:Response) => {
    try {
        const filmCategoryInstance: iCatalogueAttributes = await models.FilmCategory.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[filmCategoryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const filmCategoryInstance: iCatalogueInstance = await models.FilmCategory.findOne({where:{id:req.params.id}});

        if(!filmCategoryInstance){
            return sendResponse(res,404,'The Film Category does not exists')
        }

        return successResponse(res,200,[filmCategoryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const filmCategoryInstance: Array<iCatalogueInstance> = await models.FilmCategory.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,filmCategoryInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const filmCategoryInstance = await models.FilmCategory.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!filmCategoryInstance){
            return sendResponse(res,404,'The Film Category does not exists')
        }

        filmCategoryInstance.update({...<iCatalogueAttributes>req.body});
        filmCategoryInstance.save();

        successResponse(res,200,[filmCategoryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const filmCategoryInstance = await models.FilmCategory.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!filmCategoryInstance){
            return sendResponse(res,404,'The Film Category trying to delete does not exists')
        }

        filmCategoryInstance.update({status: false});
        filmCategoryInstance.save();

        successResponse(res, 200, [filmCategoryInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default FilmCategoryController;