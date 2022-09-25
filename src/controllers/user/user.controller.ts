import { Request, Response } from 'express';
import models from '../../../models';
import { iAttributesUser,iInstanceUser} from '../../../models/user'
import { sendResponse, successResponse } from '../../utils/responses';

class UserController {
    static create = async (req: Request, res: Response) => {
        try {
            const userInstance: iInstanceUser = await models.User.create({...<iAttributesUser>req.body});
            return successResponse(res, 201, [userInstance]);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const userInstance: iInstanceUser = await models.User.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!userInstance) {
                return sendResponse(res, 404, 'The User does not exists');
            }

            return successResponse(res, 200, [userInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const userInstance: Array<iInstanceUser> = await models.User.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, userInstance);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const userInstance = await models.User.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!userInstance) {
                return sendResponse(res, 404, 'The User does not exists');
            }

            userInstance.update({...<iAttributesUser>req.body});
            userInstance.save();

            successResponse(res, 200, [userInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const userInstance = await models.User.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!userInstance) {
                return sendResponse(res, 404, 'The User trying to delete does not exists');
            }

            userInstance.update({status: false});
            userInstance.save();

            successResponse(res, 200, [userInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default UserController;

// Create Read Update Delete
