import { Request, Response } from 'express';
import models from '../../../models';
import { iCelebrityAttributes,iCelebrityInstance} from '../../../models/celebrity'
import { sendResponse, successResponse } from '../../utils/responses';

class CelebrityController {
    static create = async (req: Request, res: Response) => {
        try {
            const celebrityInstance: iCelebrityInstance = await models.Celebrity.create({...<iCelebrityAttributes>req.body});
            return successResponse(res, 201, [celebrityInstance]);
        } catch(error: any) {
            console.log(error.message)
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const celebrityInstance: iCelebrityInstance = await models.Celebrity.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!celebrityInstance) {
                return sendResponse(res, 404, 'The Celebrity does not exists');
            }

            return successResponse(res, 200, [celebrityInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const celebrityInstance: Array<iCelebrityInstance> = await models.Celebrity.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, celebrityInstance);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const celebrityInstance = await models.Celebrity.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!celebrityInstance) {
                return sendResponse(res, 404, 'The Celebrity does not exists');
            }

            celebrityInstance.update({...<iCelebrityAttributes>req.body});
            celebrityInstance.save();

            successResponse(res, 200, [celebrityInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const celebrityInstance = await models.Celebrity.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!celebrityInstance) {
                return sendResponse(res, 404, 'The Celebrity trying to delete does not exists');
            }

            celebrityInstance.update({status: false});
            celebrityInstance.save();

            successResponse(res, 200, [celebrityInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default CelebrityController;

// Create Read Update Delete
