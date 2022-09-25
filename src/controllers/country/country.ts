import {Request, Response} from 'express';
import models from '../../../models';
import { iCatalogueAttributes,iCatalogueInstance } from '../../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../../utils/responses';

class CountryController {
   static create =async (req:Request,res:Response) => {
    try {
        const countryInstance: iCatalogueAttributes = await models.Country.create({...<iCatalogueAttributes>req.body});
        return successResponse(res,201,[countryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const countryInstance: iCatalogueInstance = await models.Country.findOne({where:{id:req.params.id}});

        if(!countryInstance){
            return sendResponse(res,404,'The Country does not exists')
        }

        return successResponse(res,200,[countryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const countryInstance: Array<iCatalogueInstance> = await models.Country.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,countryInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const countryInstance = await models.Country.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!countryInstance){
            return sendResponse(res,404,'The Country Type does not exists')
        }

        countryInstance.update({...<iCatalogueAttributes>req.body});
        countryInstance.save();

        successResponse(res,200,[countryInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const countryInstance = await models.Country.findOne({
            where:{
                id:req.params.id
            }
        })

        if(!countryInstance){
            return sendResponse(res,404,'The Country Type trying to delete does not exists')
        }
        countryInstance.update({status: false});
        countryInstance.save();

        successResponse(res, 200, [countryInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default CountryController;