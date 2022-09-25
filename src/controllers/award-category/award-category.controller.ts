import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class AwardCategoryController {
   static create =async (req:Request,res:Response) => {
    try {
        const awardCategoryInstance: iCatalogueAttributes = await models.AwardCategory.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[awardCategoryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const awardCategoryInstance: iCatalogueInstance = await models.AwardCategory.findOne({where:{id:req.params.id}});

        if(!awardCategoryInstance){
            return sendResponse(res,404,'The Award Category does not exists')
        }

        return successResponse(res,200,[awardCategoryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const awardCategoryInstance: Array<iCatalogueInstance> = await models.AwardCategory.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,awardCategoryInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const awardCategoryInstance = await models.AwardCategory.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!awardCategoryInstance){
            return sendResponse(res,404,'The Award Type does not exists')
        }

        awardCategoryInstance.update({...<iCatalogueAttributes>req.body});
        awardCategoryInstance.save();

        successResponse(res,200,[awardCategoryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const awardCategoryInstance = await models.AwardCategory.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!awardCategoryInstance){
            return sendResponse(res,404,'The Award Type trying to delete does not exists')
        }
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default AwardCategoryController;