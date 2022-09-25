import { body,param } from "express-validator";

class FilmFomatValidator{
    checkCreate(){
        return [
            body('filmId')
            .notEmpty()
            .withMessage("The film id is mandatory"),
            body('filmFormatTypeId')
            .notEmpty()
            .withMessage("The film format type id is mandatory"),
            body('releaseDate')
            .notEmpty()
            .withMessage("The release date is mandatory")
     ]
    }

    checkGet(){
        return [
            param("id")
                .notEmpty()
                .withMessage("The id is require")
                .isInt()
                .withMessage("The ID must be a number"),
        ];
    }
    
    checkGetFromFilmAndFilmFormatType(){
        return [
            param("filmId")
                .notEmpty()
                .withMessage("The film id is require")
                .isInt()
                .withMessage("The film id must be a number")
        ];
    }

}

export default new FilmFomatValidator()