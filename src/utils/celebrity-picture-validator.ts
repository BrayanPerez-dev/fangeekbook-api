import { body,param } from "express-validator";


class CelebrityPictureValidator{

    checkCreate(){
        return [
            body('celebrity_id')
            .notEmpty()
            .withMessage('celebrity id is mandatory'),
            body('url')
            .notEmpty()
            .withMessage('url is mandatory'),
            body('description')
            .notEmpty()
            .withMessage('description is mandatory'),
            body('type')
            .notEmpty()
            .withMessage('type is mandatory'),
        ]
    }

    checkGet(){
        return [
            param("id")
            .notEmpty()
            .withMessage("The  id is require")
            .isInt()
            .withMessage("The ID must be a number"),
        ]
    }
}


export default new CelebrityPictureValidator()