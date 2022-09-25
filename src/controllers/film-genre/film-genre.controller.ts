import { Request,Response } from "express";
import models from "../../../models";
import { iAttributesFilmGenre,iInstanceFilmGenre } from '../../../models/filmgenre';
import { sendResponse,successResponse } from '../../utils/responses';

class FilmGenreController{
     static create  = async(req:Request,res:Response) => {
        try {
            const filmGenreInstance : iAttributesFilmGenre = await models.FilmGenre.create({...<iAttributesFilmGenre>req.body})
             successResponse(res,201,[filmGenreInstance])
        } catch (error:any) {
             sendResponse(res,500,"",error.errors[0])
        }
     
     }
     static get = async (req:Request,res:Response) => {
        try {
            const filmGenreInstance = await models.FilmGenre.findOne({
                include: [{
                    model: models.Film,
                    where: {
                        id: req.params.film_id
                      }
                  },
                 {
                    model: models.FilmGenreType,
                      where: {
                        id: req.params.film_genre_type_id
                      },
                 }
                ]
            })
            if(!filmGenreInstance){
                return sendResponse(res,404,"The film genre does not exist")
            }
            successResponse(res,200,[filmGenreInstance])
        } catch (error:any) {
            sendResponse(res,500,"",error.errors[0])
        }
     }   

     static getAll = async (req:Request,res:Response) => {
        try {
            const filmGenreInstance = await models.FilmGenre.findAll({
                include: [{
                    model: models.Film,
                    include: [{
                      model: models.FilmGenreType,
                    }]
                  }]
            })
            if(!filmGenreInstance){
                return sendResponse(res,404,"The film genre does not exist")
            }
            successResponse(res,200,[filmGenreInstance])
        } catch (error:any) {
            sendResponse(res,500,"",error.errors[0])
        }
     }    
}

export default FilmGenreController