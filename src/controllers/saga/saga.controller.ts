import models from "../../../models";
import {
  iAttributesSaga,
  iInstanceSaga,
} from "../../../models/saga";
import { successResponse, sendResponse } from "../../utils/responses";
import { Request, Response } from "express";

class SagaController {
  static create = async (req: Request, res: Response) => {
    try {
      const sagaInstance: iAttributesSaga =
        await models.Saga.create({
          ...(<iAttributesSaga>req.body),
        });
      successResponse(res, 201, [sagaInstance]);
    } catch (error: any) {
      sendResponse(res, 500, "", error.errors[0]);
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const sagaInstance = await models.Franchise.findAll({
        where: {
          id: req.params.id,
        },
        require: false,
        include: [
          {
            model: models.Film,
          },
        ],
      });
      if (!sagaInstance) {
        return sendResponse(res, 404, "The saga does not exist", [
            sagaInstance,
        ]);
      }
      successResponse(res, 200, [sagaInstance]);
    } catch (error: any) {
      sendResponse(res, 501, "", error.errors[0]);
    }
  };
}

export default SagaController;
