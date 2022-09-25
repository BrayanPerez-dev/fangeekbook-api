import { Request, Response } from 'express';
import models from '../../../models';
import { iFilmAttributes,iFilmInstance} from '../../../models/film'
import { sendResponse, successResponse } from '../../utils/responses';

class FilmController {
    static create = async (req: Request, res: Response) => {
        try {
            const filmInstance: iFilmInstance = await models.Film.create({...<iFilmAttributes>req.body});
            return successResponse(res, 201, [filmInstance]);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const filmInstance: iFilmInstance = await models.Film.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmInstance) {
                return sendResponse(res, 404, 'The Film does not exists');
            }

            return successResponse(res, 200, [filmInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const filmInstance: Array<iFilmInstance> = await models.Film.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, filmInstance);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const filmInstance = await models.Film.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmInstance) {
                return sendResponse(res, 404, 'The Film does not exists');
            }

            filmInstance.update({...<iFilmAttributes>req.body});
            filmInstance.save();

            successResponse(res, 200, [filmInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const filmInstance = await models.Film.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmInstance) {
                return sendResponse(res, 404, 'The Film trying to delete does not exists');
            }

            filmInstance.update({status: false});
            filmInstance.save();

            successResponse(res, 200, [filmInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default FilmController;

// Create Read Update Delete
