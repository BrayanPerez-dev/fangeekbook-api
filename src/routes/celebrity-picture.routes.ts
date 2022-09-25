import { Router } from "express";
import MiddlewareValidator from '../utils/validators';
import celebrityPictureValidator from "../utils/celebrity-picture-validator";
import CelebrityPictureController from "../controllers/celebrity-picture/celebrity-picture.controller";

const router = Router()



/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmPicture:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the film picture
 *                  celebrityId:
 *                      type: number
 *                      description: Describes the id of the celebrity picture
 *                  url:
 *                      type: string
 *                      description: Describe the url  of the film picture
 *                  description:
 *                      type: string
 *                      description: Describe the film picture
 *                  type:
 *                      type: string
 *                      description: Describe the type of the film picture
 *              required:
 *                  - celebrityId
 *                  - url
 *                  - description
 *                  - type
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
 * /celebrity-pictures:
 *  post:
 *      summary: Service to create a new Celebrity Picture
 *      tags: [CelebrityPicture]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CelebrityPicture'
 *      responses:
 *          '201':
 *              description: Celebrity Picture Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/CelebrityPicture'
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
 *              description: The Celebrity Picture  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post('/',celebrityPictureValidator.checkCreate(),MiddlewareValidator.handleValidationError,CelebrityPictureController.create)


/**
* @swagger
* /celebrity-pictures/{id}:
*  get:
*      summary: Service that provides a Celebrity Picture available
*      tags: [CelebrityPicture]
*      parameters:
*       - in : path
*         name: id
*         description: id of celebrity picture 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity Picture got
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
*                                      $ref: '#/components/schemas/CelebrityPicture'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.get('/:id',celebrityPictureValidator.checkGet(),MiddlewareValidator.handleValidationError,CelebrityPictureController.get)

export default router