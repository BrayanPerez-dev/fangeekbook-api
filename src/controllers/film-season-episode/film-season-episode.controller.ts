import { Request, Response } from 'express';
import models from '../../../models';
import { iFilmSeasonEpisodeAttributes,iFilmSeasonEpisodeInstance} from '../../../models/filmseasonepisode'
import { sendResponse, successResponse } from '../../utils/responses';

class FilmSeasonEpisodeController {
    static create = async (req: Request, res: Response) => {
        try {
            const filmSeasonEpisodeInstance: iFilmSeasonEpisodeInstance = await models.FilmSeasonEpisode.create({...<iFilmSeasonEpisodeAttributes>req.body});
            return successResponse(res, 201, [filmSeasonEpisodeInstance]);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const filmSeasonEpisodeInstance: iFilmSeasonEpisodeInstance = await models.FilmSeasonEpisode.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmSeasonEpisodeInstance) {
                return sendResponse(res, 404, 'The Film Season Episode  does not exists');
            }

            return successResponse(res, 200, [filmSeasonEpisodeInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const filmSeasonEpisodeInstance: Array<iFilmSeasonEpisodeInstance> = await models.FilmSeasonEpisode.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, filmSeasonEpisodeInstance);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const filmSeasonEpisodeInstance = await models.FilmSeasonEpisode.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmSeasonEpisodeInstance) {
                return sendResponse(res, 404, 'The Film Season Episode  does not exists');
            }

            filmSeasonEpisodeInstance.update({...<iFilmSeasonEpisodeAttributes>req.body});
            filmSeasonEpisodeInstance.save();

            successResponse(res, 200, [filmSeasonEpisodeInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const filmSeasonEpisodeInstance = await models.FilmSeasonEpisode.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmSeasonEpisodeInstance) {
                return sendResponse(res, 404, 'The Film Season Episode trying to delete does not exists');
            }

            filmSeasonEpisodeInstance.update({status: false});
            filmSeasonEpisodeInstance.save();

            successResponse(res, 200, [filmSeasonEpisodeInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default FilmSeasonEpisodeController;

// Create Read Update Delete
