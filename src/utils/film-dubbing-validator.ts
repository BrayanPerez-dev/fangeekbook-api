import { body,param } from "express-validator";


class SagaValidator{
    
    checkCreate(){
        return [
            body('film_id')
            .notEmpty()
            .withMessage("The film id is mandatory"),
            body('language_id')
            .notEmpty()
            .withMessage("The language id is mandatory"),
            body('country_id')
            .notEmpty()
            .withMessage("The country id is mandatory"),
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

export default new SagaValidator()