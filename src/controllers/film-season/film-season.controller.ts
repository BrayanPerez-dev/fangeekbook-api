import { Request, Response } from 'express';
import models from '../../../models';
import { iFilmSeasonAttributes,iFilmSeasonInstance} from '../../../models/filmseason';
import { sendResponse, successResponse } from '../../utils/responses';

class FilmSeasonController {
    static create = async (req: Request, res: Response) => {
        try {
            const filmSeasonInstance: iFilmSeasonInstance = await models.FilmSeason.create({...<iFilmSeasonAttributes>req.body});
            return successResponse(res, 201, [filmSeasonInstance]);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const filmSeasonInstance: iFilmSeasonInstance = await models.FilmSeason.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmSeasonInstance) {
                return sendResponse(res, 404, 'The Film Season does not exists');
            }

            return successResponse(res, 200, [filmSeasonInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const filmSeasonInstance: Array<iFilmSeasonInstance> = await models.FilmSeason.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, filmSeasonInstance);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const filmSeasonInstance = await models.FilmSeason.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmSeasonInstance) {
                return sendResponse(res, 404, 'The Film Season does not exists');
            }

            filmSeasonInstance.update({...<iFilmSeasonAttributes>req.body});
            filmSeasonInstance.save();

            successResponse(res, 200, [filmSeasonInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const filmSeasonInstance = await models.FilmSeason.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmSeasonInstance) {
                return sendResponse(res, 404, 'The Film Season trying to delete does not exists');
            }

            filmSeasonInstance.update({status: false});
            filmSeasonInstance.save();

            successResponse(res, 200, [filmSeasonInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default FilmSeasonController;

// Create Read Update Delete
