import { body,param } from "express-validator";

class FilmSoundtrack{
     checkCreate(){
        return[
            body('filmId')
               .notEmpty()
               .withMessage('The film id is mandatory'),
            body('filmSongId')
               .notEmpty()
               .withMessage('The song id is mandatory'),
        ]
     }

     checkGet(){
        return[
            param('id')
            .notEmpty()
            .withMessage("The id is require")
            .isInt()
            .withMessage("The ID must be a number"),
        ]
     }
}

export default new FilmSoundtrack()