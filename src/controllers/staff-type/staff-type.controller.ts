import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class StaffTypeController {
   static create =async (req:Request,res:Response) => {
    try {
        const staffTypeInstance: iCatalogueAttributes = await models.StaffType.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[staffTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const staffTypeInstance: iCatalogueInstance = await models.StaffType.findOne({where:{id:req.params.id}});

        if(!staffTypeInstance){
            return sendResponse(res,404,'The Staff Type does not exists')
        }

        return successResponse(res,200,[staffTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const staffTypeInstance: Array<iCatalogueInstance> = await models.StaffType.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,staffTypeInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const staffTypeInstance = await models.StaffType.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!staffTypeInstance){
            return sendResponse(res,404,'The Staff Type does not exists')
        }

        staffTypeInstance.update({...<iCatalogueAttributes>req.body});
        staffTypeInstance.save();

        successResponse(res,200,[staffTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const staffTypeInstance = await models.StaffType.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!staffTypeInstance){
            return sendResponse(res,404,'The Staff Type trying to delete does not exists')
        }

        staffTypeInstance.update({status: false});
        staffTypeInstance.save();

        successResponse(res, 200, [staffTypeInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default StaffTypeController;