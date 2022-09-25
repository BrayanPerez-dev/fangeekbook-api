import { body, param } from "express-validator";

class FilmValidator{
      checkCreate(){
        return [
        body('category') 
           .notEmpty()
           .withMessage("The category id is mandatory"), 
        body('genre_type') 
           .notEmpty()
           .withMessage("The genre type id is mandatory"),
        body('original_language') 
           .notEmpty()
           .withMessage("The original language id is mandatory"),
        body('recording_country') 
           .notEmpty()
           .withMessage("The recording country id is mandatory"),
        body('rating_id') 
           .notEmpty()
           .withMessage("The rating id is mandatory"),
        body('distributor_id') 
           .notEmpty()
           .withMessage("The distributor id is mandatory"),
        body('runtime') 
           .notEmpty()
           .withMessage("The runtime is mandatory"), 
        body('budget') 
           .notEmpty()
           .withMessage("The budget is mandatory"),
        body('sinopsis') 
           .notEmpty()
           .withMessage("The sinopsis is mandatory"),
        body('boxOffice') 
           .notEmpty()
           .withMessage("The box office is mandatory"),
        body('rate') 
           .notEmpty()
           .withMessage("The rate is mandatory"),
        body('trailerUrl') 
           .notEmpty()
           .withMessage("The trailer url  is mandatory"),
        body('releaseDate') 
           .notEmpty()
           .withMessage("The release date  is mandatory")]
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

    
    checkUpdate() {
        return [
            body('category') 
               .notEmpty()
               .withMessage("The category is mandatory"), 
            body('genreType') 
               .notEmpty()
               .withMessage("The genre type is mandatory"),
            body('originalLanguage') 
               .notEmpty()
               .withMessage("The original language is mandatory"),
            body('recordingCountry') 
               .notEmpty()
               .withMessage("The recording country is mandatory"),
            body('ratingId') 
               .notEmpty()
               .withMessage("The rating id is mandatory"),
            body('distributorId') 
               .notEmpty()
               .withMessage("The distributor id is mandatory"),
            body('runtime') 
               .notEmpty()
               .withMessage("The runtime is mandatory"), 
            body('budget') 
               .notEmpty()
               .withMessage("The budget is mandatory"),
            body('sinopsis') 
               .notEmpty()
               .withMessage("The sinopsis is mandatory"),
            body('boxOffice') 
               .notEmpty()
               .withMessage("The box office is mandatory"),
            body('rate') 
               .notEmpty()
               .withMessage("The rate is mandatory"),
            body('trailerUrl') 
               .notEmpty()
               .withMessage("The trailer url  is mandatory"),
            body('releaseDate') 
               .notEmpty()
               .withMessage("The release date  is mandatory")]
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

export default new FilmValidator();