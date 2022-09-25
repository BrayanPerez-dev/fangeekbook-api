import models from "../../../models";
import {
  iAttributesFilmDubbing,
  iInstanceFilmDubbing,
} from "../../../models/filmdubbing";
import { successResponse, sendResponse } from "../../utils/responses";
import { Request, Response } from "express";

class FilmDubbingController {
  static create = async (req: Request, res: Response) => {
    try {
      const filmDubbingInstance: iAttributesFilmDubbing =
        await models.FilmDubbing.create({
          ...(<iAttributesFilmDubbing>req.body),
        });
      successResponse(res, 201, [filmDubbingInstance]);
    } catch (error: any) {
      sendResponse(res, 500, "", error.errors[0]);
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const filmDubbingInstance = await models.Film.findAll({
        where: {
          id: req.params.id,
        },
        require: false,
        include: [
          {
            model: models.FilmDubbing,
          },
          {
            model: models.Country,
          },
          {
            model: models.FilmLanguage,
          },
        ],
      });
      if (!filmDubbingInstance) {
        return sendResponse(res, 404, "The film dubbing does not exist", [
            filmDubbingInstance,
        ]);
      }
      successResponse(res, 200, [filmDubbingInstance]);
    } catch (error: any) {
      sendResponse(res, 501, "", error.errors[0]);
    }
  };
}

export default FilmDubbingController;
