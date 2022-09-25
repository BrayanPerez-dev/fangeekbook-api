import { Request, Response } from 'express';
import models from '../../../models';
import { iAttributesStaff,iInstanceStaff} from '../../../models/staff'
import { sendResponse, successResponse } from '../../utils/responses';

class StaffController {
    static create = async (req: Request, res: Response) => {
        try {
            const staffInstance: iInstanceStaff = await models.Staff.create({...<iAttributesStaff>req.body});
            return successResponse(res, 201, [staffInstance]);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const staffInstance: iInstanceStaff = await models.Staff.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!staffInstance) {
                return sendResponse(res, 404, 'The Staff does not exists');
            }

            return successResponse(res, 200, [staffInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const staffInstance: Array<iInstanceStaff> = await models.Staff.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, staffInstance);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const staffInstance = await models.Staff.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!staffInstance) {
                return sendResponse(res, 404, 'The Staff does not exists');
            }

            staffInstance.update({...<iAttributesStaff>req.body});
            staffInstance.save();

            successResponse(res, 200, [staffInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const staffInstance = await models.Staff.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!staffInstance) {
                return sendResponse(res, 404, 'The Staff trying to delete does not exists');
            }

            staffInstance.update({status: false});
            staffInstance.save();

            successResponse(res, 200, [staffInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default StaffController;

// Create Read Update Delete
