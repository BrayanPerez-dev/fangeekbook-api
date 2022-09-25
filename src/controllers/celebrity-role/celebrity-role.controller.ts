import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class CelebrityRoleController {
   static create =async (req:Request,res:Response) => {
    try {
        const celebrityRoleInstance: iCatalogueAttributes = await models.CelebrityRole.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[celebrityRoleInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const celebrityRoleInstance: iCatalogueInstance = await models.CelebrityRole.findOne({where:{id:req.params.id}});

        if(!celebrityRoleInstance){
            return sendResponse(res,404,'The Celebrity Role does not exists')
        }

        return successResponse(res,200,[celebrityRoleInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const celebrityRoleInstance: Array<iCatalogueInstance> = await models.CelebrityRole.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,celebrityRoleInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const celebrityRoleInstance = await models.CelebrityRole.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!celebrityRoleInstance){
            return sendResponse(res,404,'The Celebrity Role does not exists')
        }

        celebrityRoleInstance.update({...<iCatalogueAttributes>req.body});
        celebrityRoleInstance.save();

        successResponse(res,200,[celebrityRoleInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const celebrityRoleInstance = await models.CelebrityRole.findOne({
            where:{
                id:req.params.id
            }
        })

        if(!celebrityRoleInstance){
            return sendResponse(res,404,'The Celebrity Role trying to delete does not exists')
        }
        celebrityRoleInstance.update({status: false});
        celebrityRoleInstance.save();

        successResponse(res, 200, [celebrityRoleInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default CelebrityRoleController;