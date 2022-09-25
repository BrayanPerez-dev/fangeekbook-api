import { Request,Response } from 'express';
import models from '../../../models';
import {iAttributesFilmSoundtrack,iInstanceFilmSoundtrack} from '../../../models/filmsoundtrack';
import { successResponse,sendResponse } from '../../utils/responses';

class FilmSoundtrackController{
  
    static create = async (req:Request,res:Response) => {
        try {
            const filmSoundTrackInstance : iAttributesFilmSoundtrack = await models.FilmSoundtrack.create({...<iAttributesFilmSoundtrack>req.body})
            successResponse(res,201,[filmSoundTrackInstance])
        } catch (error:any) {
            sendResponse(res,500,"",error.errors[0])
        }
    }

    static get = async (req:Request,res:Response) => {
        try {
            const filmSoundTrackInstance = await models.Film.findAll({
                    where: {
                        id: req.params.id,
                      },
                      required: false,
                include: [
                    {
                      model: models.FilmSong,
                    }
                    
                ]
                
            })
            if(!filmSoundTrackInstance){
                return sendResponse(res,404,"There is no song for this film")
            }
            successResponse(res,200,[filmSoundTrackInstance])
        } catch (error:any) {
            console.log(error.message)
            sendResponse(res,500,"",error.errors[0])
        }
    }
}

export default FilmSoundtrackController