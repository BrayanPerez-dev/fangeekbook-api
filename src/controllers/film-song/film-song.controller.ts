import {Request, Response} from 'express';
import models from '../../../models';
import { iFilmSongAttributes,iFilmSongInstance } from '../../../models/filmsong';
import { sendResponse, successResponse } from '../../utils/responses';

class FilmSongController {
   static create =async (req:Request,res:Response) => {
    try {
        const filmSongInstance: iFilmSongAttributes = await models.FilmSong.create({...<iFilmSongAttributes>req.body});
        return successResponse(res,201,[filmSongInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static get =async (req:Request,res:Response) => {
    try {
        const filmSongInstance: iFilmSongInstance = await models.FilmSong.findOne({where:{id:req.params.id}});

        if(!filmSongInstance){
            return sendResponse(res,404,'The Film Song does not exists')
        }

        return successResponse(res,200,[filmSongInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0]);
    }
   }

   static getAll =async (req:Request,res:Response) => {
     try {
        const filmSongInstance: Array<iFilmSongInstance> = await models.FilmSong.findAll({
            where:{
                status:true
            }
        })
        return successResponse(res,200,filmSongInstance)
     } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
     }
   }

   static update =async (req:Request,res:Response) => {
    try {
        const filmSongInstance = await models.FilmSong.findOne({
            where:{
                id: req.params.id
            }
        })
        if(!filmSongInstance){
            return sendResponse(res,404,'The Film Songs does not exists')
        }

        filmSongInstance.update({...<iFilmSongAttributes>req.body});
        filmSongInstance.save();

        successResponse(res,200,[filmSongInstance])
    } catch (error:any) {
        return sendResponse(res,500,'',error.errors[0])
    }
   }

   static delete =async (req:Request,res:Response) => {
    try {
        const filmSongInstance = await models.FilmSong.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!filmSongInstance){
            return sendResponse(res,404,'The Film Song trying to delete does not exists')
        }

        filmSongInstance.update({status: false});
        filmSongInstance.save();

        successResponse(res, 200, [filmSongInstance]);
    } catch (error:any) {
        return sendResponse(res,500,'',error.error[0])
    }
   }
}

export default FilmSongController;