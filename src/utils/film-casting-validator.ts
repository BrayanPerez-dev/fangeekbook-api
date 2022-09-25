import { body,param } from "express-validator";


class FilmCastingValidator{
    
    checkCreate(){
        return [
            body('filmId')
            .notEmpty()
            .withMessage("The film id is mandatory"),
            body('celebrityId')
            .notEmpty()
            .withMessage("The celebrity id is mandatory"),
            body('celebrityRoleId')
            .notEmpty()
            .withMessage("The celebretity role is mandatory"),
            body('performanceTypeId')
            .notEmpty()
            .withMessage("The performace type id is mandatory")
        ]
    }

    checkGetCasting(){
        return [  
        param("id")
        .notEmpty()
        .withMessage("The id is require")
        .isInt()
        .withMessage("The ID must be a number"),]
    }
}

export default new FilmCastingValidator()