import {Request, Response} from 'express';
import models from '../../../models';
import { iFranchiseAttributes,iFranchiseInstance } from '../../../models/franchise';
import { sendResponse, successResponse } from '../../utils/responses';

class FranchiseController {
   static create =async (req:Request,res:Response) => {
    try {
        const franchiseInstance: iFranchiseAttributes = await models.Franchise.create({...<iFranchiseAttributes>req.body});
        return successResponse(res,201,[franchiseInstance])
    } catch (error:any) {
        console.log(error.message)
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const franchiseInstance: iFranchiseInstance = await models.Franchise.findOne({where:{id:req.params.id}});

        if(!franchiseInstance){
            return sendResponse(res,404,'The Franchise does not exists')
        }

        return successResponse(res,200,[franchiseInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const franchiseInstance: Array<iFranchiseInstance> = await models.Franchise.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,franchiseInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const franchiseInstance = await models.Franchise.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!franchiseInstance){
            return sendResponse(res,404,'The Franchise does not exists')
        }

        franchiseInstance.update({...<iFranchiseAttributes>req.body});
        franchiseInstance.save();

        successResponse(res,200,[franchiseInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const franchiseInstance = await models.Franchise.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!franchiseInstance){
            return sendResponse(res,404,'The Franchise trying to delete does not exists')
        }

        franchiseInstance.update({status: false});
        franchiseInstance.save();

        successResponse(res, 200, [franchiseInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default FranchiseController;