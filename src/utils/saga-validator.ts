import { body,param } from "express-validator";


class SagaValidator{
    
    checkCreate(){
        return [
            body('filmId')
            .notEmpty()
            .withMessage("The film id is mandatory"),
            body('franchiseId')
            .notEmpty()
            .withMessage("The film id is mandatory"),
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