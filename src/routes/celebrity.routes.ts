import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import CelebrityController from "../controllers/celebrity/celebrity.controller";
import celebrityValidator from "../utils/celebrity-validator";

const router = Router()

/**
 * @swagger
 *  components:
 *      schemas:
 *          Celebrity:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Celebrity
 *                  fullName:
 *                      type: string
 *                      description: Describes the full name of the Celebrity
 *                  nickName:
 *                      type: string
 *                      description: Describes the nick name of the Celebrity
 *                  birthDate:
 *                      type: date
 *                      description: Describes the birth date of the Celebrity
 *                  birthCountry:
 *                      type: number
 *                      description: Describes the birth country of the Celebrity
 *                  birthPlace:
 *                      type: string
 *                      description: Describes the birth place of the Celebrity
 *                  bio:
 *                      type: string
 *                      description: Describes the bio of the Celebrity
 *                  gender:
 *                      type: boolean
 *                      description: Describes the gender of the Celebrity
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Celebrity 
 *              required:
 *                  - fullName
 *                  - nickName
 *                  - birthDate
 *                  - birthCountry
 *                  - birthPlace
 *                  - bio
 *                  - gender
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
 * /celebrities:
 *  post:
 *      summary: Service to create a new Celebrity
 *      tags: [Celebrity]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Celebrity'
 *      responses:
 *          '201':
 *              description: Celebrity Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Celebrity'
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
 *              description: The Film already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */


 router.post(
    "/",
    celebrityValidator.checkCreate(),
    MiddlewareValidator.handleValidationError,
    CelebrityController.create
  );
  


/**
* @swagger
* /celebrities/{id}:
*  get:
*      summary: Service that provides a Celebrity  available
*      tags: [Celebrity]
*      parameters:
*       - in : path
*         name: id
*         description: id of celebrity 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity got
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
*                                      $ref: '#/components/schemas/Celebrity'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.get(
    "/:id",
    celebrityValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    CelebrityController.get
  );
  

/**
* @swagger
* /celebrities:
*  get:
*      summary: Service that provides the list of Celebrities available
*      tags: [Celebrity]
*      responses:
*          '200':
*              description: List of celebrities
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
*                                      $ref: '#/components/schemas/Celebrity'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/



router.get(
    "/",
    CelebrityController.getAll
  );
  

/**
* @swagger
* /celebrities/{id}:
*  put:
*      summary: Service to update a Celebrity
*      tags: [Celebrity]
*      parameters:
*       - in : path
*         name: id
*         description: celebrity  id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Celebrity'
*      responses:
*          '200':
*              description: Celebrity updated
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
*                                      $ref: '#/components/schemas/Celebrity'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
    "/:id",
    celebrityValidator.checkUpdate,
    MiddlewareValidator.handleValidationError,
    CelebrityController.update
);


/**
* @swagger
* /celebrities/{id}:
*  delete:
*      summary: Service to delete a Celebrity 
*      tags: [Celebrity]
*      parameters:
*       - in : path
*         name: id
*         description: celebrity  id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity deleted
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
*                                      $ref: '#/components/schemas/Celebrity'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.delete(
    "/:id",
    celebrityValidator.checkDelete,
    MiddlewareValidator.handleValidationError,
    CelebrityController.delete
  );
  

export default router