import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class CelebrityTypeController {
   static create =async (req:Request,res:Response) => {
    try {
        const celebrityTypeInstance: iCatalogueAttributes = await models.CelebrityType.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[celebrityTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const celebrityTypeInstance: iCatalogueInstance = await models.CelebrityType.findOne({where:{id:req.params.id}});

        if(!celebrityTypeInstance){
            return sendResponse(res,404,'The Celebrity Type does not exists')
        }

        return successResponse(res,200,[celebrityTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const celebrityTypeInstance: Array<iCatalogueInstance> = await models.CelebrityType.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,celebrityTypeInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const celebrityTypeInstance = await models.CelebrityType.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!celebrityTypeInstance){
            return sendResponse(res,404,'The Celebrity Type does not exists')
        }

        celebrityTypeInstance.update({...<iCatalogueAttributes>req.body});
        celebrityTypeInstance.save();

        successResponse(res,200,[celebrityTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const celebrityTypeInstance = await models.CelebrityType.findOne({
            where:{
                id:req.params.id
            }
        })

        if(!celebrityTypeInstance){
            return sendResponse(res,404,'The Celebrity Type trying to delete does not exists')
        }
        celebrityTypeInstance.update({status: false});
        celebrityTypeInstance.save();

        successResponse(res, 200, [celebrityTypeInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default CelebrityTypeController;