import { body,param } from "express-validator";


class UserValidator{
      
    checkCreate(){
        return[
            body('user_type')
            .notEmpty()
            .withMessage('The user type id mandatory'),
            body('fullName')
               .notEmpty()
               .withMessage('The full name mandatory'),
            body('nickName')
               .notEmpty()
               .withMessage('The nick name mandatory'),
            body('email')
               .notEmpty()
               .withMessage('The email mandatory'),
            body('picture')
               .notEmpty()
               .withMessage('The picture mandatory')
           
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
            body('userType')
            .isEmpty()
            .withMessage('The user type id mandatory'),
            body('fullName')
               .isEmpty()
               .withMessage('The full name mandatory'),
            body('nickName')
               .isEmpty()
               .withMessage('The nick name mandatory'),
            body('email')
               .isEmpty()
               .withMessage('The email mandatory'),
            body('picture')
               .isEmpty()
               .withMessage('The picture mandatory')
           
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

export default new UserValidator()