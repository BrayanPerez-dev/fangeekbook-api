import { body, param } from "express-validator";


class FilmDetail{
    checkCreate(){
        return[
            body('filmId')
               .isEmpty()
               .withMessage('The film id is mandatory'),
            body('totalSeasons')
               .isEmpty()
               .withMessage('The total seasons is mandatory'),
            body('totalEpisodes')
               .isEmpty()
               .withMessage('The total episodes is mandatory'),
            body('endDate')
               .isEmpty()
               .withMessage('The end date is mandatory'),
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
            body('filmId')
               .isEmpty()
               .withMessage('The film id is mandatory'),
            body('totalSeasons')
               .isEmpty()
               .withMessage('The total seasons is mandatory'),
            body('totalEpisodes')
               .isEmpty()
               .withMessage('The total episodes is mandatory'),
            body('endDate')
               .isEmpty()
               .withMessage('The end date is mandatory'),
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

export default new FilmDetail()