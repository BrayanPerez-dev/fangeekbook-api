import { body, param } from "express-validator";

class FilmSeasonEpisodeValidator{
     
     checkCreate(){
        return[
            body('filmSeasonId')
               .isEmpty()
               .withMessage('The film season id is mandatory'),
            body('name')
               .isEmpty()
               .withMessage('The name is mandatory'),
            body('description')
               .isEmpty()
               .withMessage('The description is mandatory'),
            body('runTime')
               .isEmpty()
               .withMessage('The run time is mandatory'),
            body('releaseDate')
               .isEmpty()
               .withMessage('The release date is mandatory'),
        ]
     }
     
      
    checkGet() {
        return [
            param("id")
                .notEmpty()
                .withMessage("The id is require")
                .isInt()
                .withMessage("The ID must be a number"),
        ];
    }


     checkUpdate(){
        return[
            body('filmSeasonId')
               .isEmpty()
               .withMessage('The film season id is mandatory'),
            body('name')
               .isEmpty()
               .withMessage('The name is mandatory'),
            body('description')
               .isEmpty()
               .withMessage('The description is mandatory'),
            body('runTime')
               .isEmpty()
               .withMessage('The run time is mandatory'),
            body('releaseDate')
               .isEmpty()
               .withMessage('The release date is mandatory'),
        ]
     }

     
    checkDelete() {
        return [
            param("id")
                .notEmpty()
                .withMessage("The id is require")
                .isInt()
                .withMessage("The ID must be a number"),
        ];
    }
}

export default new FilmSeasonEpisodeValidator()