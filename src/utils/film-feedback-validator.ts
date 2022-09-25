import { body,param } from "express-validator";


class FilmFeedbackValidator{

    checkCreate(){
        return [
            body('film_id')
            .notEmpty()
            .withMessage('film id is mandatory'),
            body('user_id')
            .notEmpty()
            .withMessage('user id is mandatory'),
            body('feedback')
            .notEmpty()
            .withMessage('feedback is mandatory'),
            body('rate')
            .notEmpty()
            .withMessage('rate is mandatory'),
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


export default new FilmFeedbackValidator()