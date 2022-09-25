import { body,param } from "express-validator";


class CelebrityAwardValidator{
    
    checkCreate(){
        return [
            body('filmId')
            .notEmpty()
            .withMessage("The film id is mandatory"),
            body('celebrityId')
            .notEmpty()
            .withMessage("The celebrity id is mandatory"),
            body('awardType')
            .notEmpty()
            .withMessage("The award type id is mandatory"),
            body('awardCategory')
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

export default new CelebrityAwardValidator()