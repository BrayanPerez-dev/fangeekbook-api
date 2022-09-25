import { Response,Request } from "express";
import models from '../../../models/index';
import {iAttributesFilmStaff,iInstanceFilmStaff} from '../../../models/filmstaff';
import { successResponse,sendResponse } from "../../utils/responses";


class FilmStaffController{
    
    static async create(req:Request,res:Response){
        try {
            const filmStaffInstance : iAttributesFilmStaff
             = await models.FilmStaff.create(<iAttributesFilmStaff>req.body)
            
            return  successResponse(res,201,[filmStaffInstance])
        } catch (error:any) {
            return sendResponse(res,500,"",error.errors[0])
        }
    }

    static async getFilmStaff(req:Request,res:Response){

         try {
            const filmStaff = await models.Film.findAll({
                include: [
                    {
                      model: models.Staff,
                      where: {
                        name: req.params.name,
                      },
                    },
                  ],
            })

            if(!filmStaff){
                return sendResponse(res,404,"The film staff does not exist")
            }

           return  successResponse(res,200,[filmStaff])
         } catch (error:any) {
            return sendResponse(res,500,"",error.errors[0])
         }
    }
}


export default FilmStaffController