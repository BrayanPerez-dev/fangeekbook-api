import { body,param } from "express-validator";

class FilmGenreValidator{
    checkCreate(){
        return [
            body("film_id")
                .notEmpty()
                .withMessage("The film Id is mandatory"),
            body("film_genre_type_id")
                .notEmpty()
                .withMessage("The film genre Id is mandatory")
      ]
    }
    checkGet(){
        return [
            param("film_id")
                .notEmpty()
                .withMessage("The film Id is mandatory"),
            param("film_genre_type_id")
                .notEmpty()
                .withMessage("The film genre Id is mandatory")
      ]
    }
}

export default new FilmGenreValidator()