import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import StaffController from "../controllers/staff/staff.controller";
import staffValidator from "../utils/staff-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          Staff:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Staff
 *                  staffType:
 *                      type: number
 *                      description: Describes the staff id of the Staff
 *                  name:
 *                      type: string
 *                      description: Describes the name of the Staff
 *                  birthDate:
 *                      type: date
 *                      description: Describes the birth date of the Staff
 *                  gender:
 *                      type: boolean
 *                      description: Describes the gender of the Staff
 *                  bio:
 *                      type: string
 *                      description: Describes the bio of the Staff
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Staff 
 *              required:
 *                  - staffType
 *                  - name
 *                  - birthDate
 *                  - gender
 *                  - bio
 *          Error:
 *              type: object
 *              properties:
 *                  status:
 *                      type: number
 *                  level:
 *                      type: string
 *                      description: The level could be ERROR o INFO
 *                  description:
 *                      type: string
 *                  error:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              value:
 *                                  type: string
 *                              msg:
 *                                  type: string
 *                              param:
 *                                  type: string
 *                              location:
 *                                  type: string
 */



/**
 * @swagger
 * /staffs:
 *  post:
 *      summary: Service to create a new Staff
 *      tags: [Staff]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Staff'
 *      responses:
 *          '201':
 *              description: Staff Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Staff'
 *          '500':
 *              description: Internal Error Server
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error' 
 *          '400':
 *              description: Error within the payload
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 *          '401':
 *              description: Unauthorized to do this action
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error' 
 *          '409':
 *              description: The Staff already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    "/",
    staffValidator.checkCreate(),
    MiddlewareValidator.handleValidationError,
    StaffController.create
  );

  
/**
* @swagger
* /staffs/{id}:
*  get:
*      summary: Service that provides a Staff  available
*      tags: [Staff]
*      parameters:
*       - in : path
*         name: id
*         description: id of staff type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Staff got
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          properties:
*                              status:
*                                  type: integer
*                              records:
*                                  type: array
*                                  items:
*                                      type: object
*                                      $ref: '#/components/schemas/Staff'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.get(
    "/:id",
    staffValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    StaffController.get
  );


/**
* @swagger
* /staffs:
*  get:
*      summary: Service that provides the list of Staff available
*      tags: [Staff]
*      responses:
*          '200':
*              description: List of staffs
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          properties:
*                              status:
*                                  type: integer
*                              records:
*                                  type: array
*                                  items:
*                                      type: object
*                                      $ref: '#/components/schemas/Staff'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.get(
    "/",
    StaffController.getAll
);
  



/**
* @swagger
* /staffs/{id}:
*  put:
*      summary: Service to update a Staff
*      tags: [Staff]
*      parameters:
*       - in : path
*         name: id
*         description: staff  id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Staff'
*      responses:
*          '200':
*              description: Staff updated
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          properties:
*                              status:
*                                  type: integer
*                              records:
*                                  type: array
*                                  items:
*                                      type: object
*                                      $ref: '#/components/schemas/Staff'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.put(
    "/:id",
    staffValidator.checkUpdate(),
    MiddlewareValidator.handleValidationError,
    StaffController.update
  );



/**
* @swagger
* /staffs/{id}:
*  delete:
*      summary: Service to delete a Staff 
*      tags: [Staff]
*      parameters:
*       - in : path
*         name: id
*         description: staff  id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Staff  deleted
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          properties:
*                              status:
*                                  type: integer
*                              records:
*                                  type: array
*                                  items:
*                                      type: object
*                                      $ref: '#/components/schemas/Staff'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.delete(
    "/:id",
    staffValidator.checkDelete,
    MiddlewareValidator.handleValidationError,
    StaffController.delete
  );
  
  
export default router