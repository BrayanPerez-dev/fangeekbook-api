import { body,param } from "express-validator";


class CelebrityValidator{
      
    checkCreate(){
       return[
            body('fullName')
               .notEmpty()
               .withMessage('The full name mandatory'),
            body('nickName')
               .notEmpty()
               .withMessage('The nick name mandatory'),
            body('birthDate')
               .notEmpty()
               .withMessage('The birth date mandatory'),
            body('birth_country')
               .notEmpty()
               .withMessage('The birth country mandatory'),
            body('birthPlace')
               .notEmpty()
               .withMessage('The birth place mandatory'),
            body('bio')
               .notEmpty()
               .withMessage('The bio mandatory'),
            body('gender')
               .notEmpty()
               .withMessage('The gender mandatory')
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
            body('fullName')
               .isEmpty()
               .withMessage('The full name mandatory'),
            body('nickName')
               .isEmpty()
               .withMessage('The nick name mandatory'),
            body('birthDate')
               .isEmpty()
               .withMessage('The birth date mandatory'),
            body('birthCountry')
               .isEmpty()
               .withMessage('The birth country mandatory'),
            body('birthPlace')
               .isEmpty()
               .withMessage('The birth place mandatory'),
            body('bio')
               .isEmpty()
               .withMessage('The bio mandatory'),
            body('gender')
               .isEmpty()
               .withMessage('The gender mandatory')
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

export default new CelebrityValidator()