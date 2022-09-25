import { Request, Response } from "express";
import models from "../../../models";
import {
  iFilmFormatAttributes,
  iFilmInstance,
} from "../../../models/filmformat";
import { sendResponse, successResponse } from "../../utils/responses";

class FilmFormatController {
  static async create(req: Request, res: Response) {
    try {
      const filmFormatInstance: iFilmFormatAttributes =
        await models.FilmFormat.create(<iFilmFormatAttributes>req.body);
      successResponse(res, 201, [filmFormatInstance]);
    } catch (error: any) {
      sendResponse(res, 500, "", error.errors[0]);
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const filmFormatInstance: iFilmInstance = await models.FilmFormat.findOne(
        { where: { id: req.params.id } }
      );

      if (!filmFormatInstance) {
        return sendResponse(res, 404, "The film format does not exist");
      }
      successResponse(res, 201, [filmFormatInstance]);
    } catch (error: any) {
      sendResponse(res, 500, "", error.errors[0]);
    }
  }

  static async getFromFilmAndFilmFormatType(req: Request, res: Response) {
    try {
      const filmFormatInstance = await models.Film.findOne({
        include: [
          {
            model: models.FilmFormatType,
            where: {
              id: req.params.filmId,
            },
          },
        ],
      });
      if (!filmFormatInstance) {
        return sendResponse(res, 404, "The film format does not exist");
      }
      successResponse(res, 201, [filmFormatInstance]);
    } catch (error: any) {
      sendResponse(res, 500, "", error.errors[0]);
    }
  }

}

export default FilmFormatController;
