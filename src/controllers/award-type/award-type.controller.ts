import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class AwardTypeController {
   static create =async (req:Request,res:Response) => {
    try {
        const awardTypeInstance: iCatalogueAttributes = await models.AwardType.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[awardTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const awardTypeInstance: iCatalogueInstance = await models.AwardType.findOne({where:{id:req.params.id}});

        if(!awardTypeInstance){
            return sendResponse(res,404,'The Award Type does not exists')
        }

        return successResponse(res,200,[awardTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const awardTypeInstance: Array<iCatalogueInstance> = await models.AwardType.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,awardTypeInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const awardTypeInstance = await models.AwardType.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!awardTypeInstance){
            return sendResponse(res,404,'The Award Type does not exists')
        }

        awardTypeInstance.update({...<iCatalogueAttributes>req.body});
        awardTypeInstance.save();

        successResponse(res,200,[awardTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const awardTypeInstance = await models.AwardType.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!awardTypeInstance){
            return sendResponse(res,404,'The Award Type trying to delete does not exists')
        }

        awardTypeInstance.update({status: false});
        awardTypeInstance.save();

        successResponse(res, 200, [awardTypeInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default AwardTypeController;