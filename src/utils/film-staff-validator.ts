import {body,param} from "express-validator";

class FilmStaffValidator{
    checkCreate(){
        return [
            body('filmId')
            .notEmpty()
            .withMessage("The film id is mandatory"),
            body('staffId')
            .notEmpty()
            .withMessage("The film staff is mandatory")
        ]
    }

    checkGet(){
        return [
            param("name")
                .notEmpty()
                .withMessage("The name is require")
                .isString()
                .withMessage("The name must be a string")
        ];
    }

}

export default new FilmStaffValidator()