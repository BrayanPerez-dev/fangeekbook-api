import {Request, Response} from 'express';
import models from '../../../models';
import { iDistribuitorAttributes,iDistribuitorInstance } from '../../../models/distributor';
import { sendResponse, successResponse } from '../../utils/responses';

class DistributorController {
   static create =async (req:Request,res:Response) => {
    try {
        const distributorInstance: iDistribuitorAttributes = await models.Distributor.create({...<iDistribuitorAttributes>req.body});
        return successResponse(res,201,[distributorInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const distributorInstance: iDistribuitorInstance = await models.Distributor.findOne({where:{id:req.params.id}});

        if(!distributorInstance){
            return sendResponse(res,404,'The Distributor does not exists')
        }

        return successResponse(res,200,[distributorInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const distributorInstance: Array<iDistribuitorInstance> = await models.Distributor.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,distributorInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const distributorInstance = await models.Distributor.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!distributorInstance){
            return sendResponse(res,404,'The Distributor does not exists')
        }

        distributorInstance.update({...<iDistribuitorAttributes>req.body});
        distributorInstance.save();

        successResponse(res,200,[distributorInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const distributorInstance = await models.Distributor.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!distributorInstance){
            return sendResponse(res,404,'The Distributor trying to delete does not exists')
        }

        distributorInstance.update({status: false});
        distributorInstance.save();

        successResponse(res, 200, [distributorInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default DistributorController;