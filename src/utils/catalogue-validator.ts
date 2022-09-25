import { body, param } from "express-validator";

class CatalogueValidator {
    checkCreate() {
        return [
            body("description")
                .notEmpty()
                .withMessage("The description is mandatory"),
        ];
    }
  
    checkCreateForUrlImage() {
        return [
            body("url_image")
                .notEmpty()
                .withMessage("The url image is mandatory"),
        ];
    }

    checkCreateForFilmSong() {
        return [
            body("songName")
                .notEmpty()
                .withMessage("The song name is mandatory"),
            body("songPerformer")
                .notEmpty()
                .withMessage("The song performer is mandatory"),
            body("songDuration")
                .notEmpty()
                .withMessage("The song duration is mandatory"),
            body("songAlbum")
                .notEmpty()
                .withMessage("The song album is mandatory"),
            body("songVideo")
                .notEmpty()
                .withMessage("The song video is mandatory"),
        ];
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
            param("id")
                .notEmpty()
                .withMessage("The id must be a number")
                .isInt()
                .withMessage("The ID must be a number"),
            body("description")
                .notEmpty()
                .withMessage("The description is mandatory"),
        ];
    }
    
    checkUpdateForUrlImage() {
        return [
            body("url_image")
                .notEmpty()
                .withMessage("The url image is mandatory"),
        ];
    }

    checkUpdateForFilmSong() {
        return [
            body("songName")
                .notEmpty()
                .withMessage("The song name is mandatory"),
            body("songPerformer")
                .notEmpty()
                .withMessage("The song performer is mandatory"),
            body("songDuration")
                .notEmpty()
                .withMessage("The song duration is mandatory"),
            body("songAlbum")
                .notEmpty()
                .withMessage("The song album is mandatory"),
            body("songVideo")
                .notEmpty()
                .withMessage("The song video is mandatory"),
        ];
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

export default new CatalogueValidator();
