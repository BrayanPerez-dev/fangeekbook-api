import { body,param } from "express-validator";

class StaffValidator{
       checkCreate(){
        return[
            body('staff_type')
              .notEmpty()
              .withMessage('the staff type id is mandatory'),
            body('name')
              .notEmpty()
              .withMessage('the name is mandatory'),
            body('birthDate')
              .notEmpty()
              .withMessage('the birth date is mandatory'),
            body('gender')
              .notEmpty()
              .withMessage('the gender is mandatory'),
            body('bio')
              .notEmpty()
              .withMessage('the bio is mandatory')
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
            body('staffType')
              .notEmpty()
              .withMessage('the staff type id is mandatory'),
            body('name')
              .notEmpty()
              .withMessage('the name is mandatory'),
            body('birthDate')
              .notEmpty()
              .withMessage('the birth date is mandatory'),
            body('gender')
              .notEmpty()
              .withMessage('the gender is mandatory'),
            body('bio')
              .notEmpty()
              .withMessage('the bio is mandatory')
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

export default new StaffValidator()