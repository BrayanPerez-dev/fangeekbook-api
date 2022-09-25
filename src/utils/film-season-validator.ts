import { body, param } from "express-validator";

class FilmSeasonValidator{

    checkCreate(){
        return[
            body('filmId')
               .isEmpty()
               .withMessage('The film id is mandatory'),
            body('name')
               .isEmpty()
               .withMessage('The name is mandatory'),
            body('description')
               .isEmpty()
               .withMessage('The description is mandatory'),
            body('firstEmision')
               .isEmpty()
               .withMessage('The first emision is mandatory'),
            body('lastEmision')
               .isEmpty()
               .withMessage('The last emision  is mandatory'),
            body('url_image')
               .isEmpty()
               .withMessage('The url image is mandatory'),
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
            body('name')
               .isEmpty()
               .withMessage('The name is mandatory'),
            body('description')
               .isEmpty()
               .withMessage('The description is mandatory'),
            body('firstEmision')
               .isEmpty()
               .withMessage('The first emision is mandatory'),
            body('lastEmision')
               .isEmpty()
               .withMessage('The last emision  is mandatory'),
            body('urlImage')
               .isEmpty()
               .withMessage('The url image is mandatory'),
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

export default new FilmSeasonValidator()