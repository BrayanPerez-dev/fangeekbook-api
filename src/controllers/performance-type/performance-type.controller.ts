import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class PerformanceTypeController {
   static create =async (req:Request,res:Response) => {
    try {
        const performanceTypeInstance: iCatalogueAttributes = await models.PerformanceType.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[performanceTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const performanceTypeInstance: iCatalogueInstance = await models.PerformanceType.findOne({where:{id:req.params.id}});

        if(!performanceTypeInstance){
            return sendResponse(res,404,'The Performance Type does not exists')
        }

        return successResponse(res,200,[performanceTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const performanceTypeInstance: Array<iCatalogueInstance> = await models.PerformanceType.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,performanceTypeInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const performanceTypeInstance = await models.PerformanceType.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!performanceTypeInstance){
            return sendResponse(res,404,'The Performance Type does not exists')
        }

        performanceTypeInstance.update({...<iCatalogueAttributes>req.body});
        performanceTypeInstance.save();

        successResponse(res,200,[performanceTypeInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const performanceTypeInstance = await models.PerformanceType.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!performanceTypeInstance){
            return sendResponse(res,404,'The Performance Type trying to delete does not exists')
        }

        performanceTypeInstance.update({status: false});
        performanceTypeInstance.save();

        successResponse(res, 200, [performanceTypeInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default PerformanceTypeController;