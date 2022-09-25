import { Request, Response } from 'express';
import models from '../../../models';
import { iFilmDetailAttributes,iFilmDetailInstance} from '../../../models/filmdetail'
import { sendResponse, successResponse } from '../../utils/responses';

class FilmdDetailController {
    static create = async (req: Request, res: Response) => {
        try {
            const filmDetailInstance: iFilmDetailInstance = await models.FilmDetail.create({...<iFilmDetailAttributes>req.body});
            return successResponse(res, 201, [filmDetailInstance]);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const filmDetailInstance: iFilmDetailInstance = await models.FilmDetail.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmDetailInstance) {
                return sendResponse(res, 404, 'The Film Detail does not exists');
            }

            return successResponse(res, 200, [filmDetailInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const filmDetailInstance: Array<iFilmDetailInstance> = await models.FilmDetail.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, filmDetailInstance);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const filmDetailInstance = await models.FilmDetail.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmDetailInstance) {
                return sendResponse(res, 404, 'The Film Detail does not exists');
            }

            filmDetailInstance.update({...<iFilmDetailAttributes>req.body});
            filmDetailInstance.save();

            successResponse(res, 200, [filmDetailInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const filmDetailInstance = await models.FilmDetail.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!filmDetailInstance) {
                return sendResponse(res, 404, 'The Film Detail trying to delete does not exists');
            }

            filmDetailInstance.update({status: false});
            filmDetailInstance.save();

            successResponse(res, 200, [filmDetailInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default FilmdDetailController;

// Create Read Update Delete
