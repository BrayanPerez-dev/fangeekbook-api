import { body,param } from "express-validator";


class FilmAwardValidator{
    
    checkCreate(){
        return [
            body('film_id')
            .notEmpty()
            .withMessage("The film id is mandatory"),
            body('award_type_id')
            .notEmpty()
            .withMessage("The award type id is mandatory"),
            body('award_category_id')
            .notEmpty()
            .withMessage("The award category id is mandatory"),
            body('winner')
            .notEmpty()
            .withMessage("The award winner id is mandatory")
        ]
    }

    checkGet(){
        return [  
        param("id")
        .notEmpty()
        .withMessage("The id is require")
        .isInt()
        .withMessage("The ID must be a number"),]
    }
}

export default new FilmAwardValidator()