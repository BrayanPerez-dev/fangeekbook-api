import models from "../../../models";
import {
  iCelebrityAwardAttributes,
  iCelebrityAwardInstance,
} from "../../../models/celebrityaward";
import { successResponse, sendResponse } from "../../utils/responses";
import { Request, Response } from "express";

class CelebrityAwardController {
  static create = async (req: Request, res: Response) => {
    try {
      const celebrityAwardInstance: iCelebrityAwardAttributes =
        await models.CelebrityAward.create({
          ...(<iCelebrityAwardAttributes>req.body),
        });
      successResponse(res, 201, [celebrityAwardInstance]);
    } catch (error: any) {
      sendResponse(res, 500, "", error.errors[0]);
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const celebrityAwardInstance = await models.Film.findAll({
        where: {
          id: req.params.id,
        },
        require: false,
        include: [
          {
            model: models.Celebrity,
          },
          {
            model: models.AwardType,
          },
          {
            model: models.AwardCategory,
          },
        ],
      });
      if (!celebrityAwardInstance) {
        return sendResponse(res, 404, "The celebrity award does not exist", [
          celebrityAwardInstance,
        ]);
      }
      successResponse(res, 200, [celebrityAwardInstance]);
    } catch (error: any) {
      sendResponse(res, 501, "", error.errors[0]);
    }
  };
}

export default CelebrityAwardController;
