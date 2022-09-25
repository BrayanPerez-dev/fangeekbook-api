import { Router } from "express";
import MiddlewareValidator from '../utils/validators';
import filmPictureValidator from "../utils/film-picture-validator";
import FilmPictureController from "../controllers/film-picture/film-picture.controller";

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
 *                  filmId:
 *                      type: number
 *                      description: Describes the id of the film 
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
 *                  - filmId
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
 * /film-pictures:
 *  post:
 *      summary: Service to create a new Film Picture
 *      tags: [FilmPicture]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmPicture'
 *      responses:
 *          '201':
 *              description: Film Picture Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmPicture'
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
 *              description: The Film Picture  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post('/',filmPictureValidator.checkCreate(),MiddlewareValidator.handleValidationError,FilmPictureController.create)


/**
* @swagger
* /film-pictures/{id}:
*  get:
*      summary: Service that provides a Film Picture available
*      tags: [FilmPicture]
*      parameters:
*       - in : path
*         name: id
*         description: id of film picture 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Picture got
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
*                                      $ref: '#/components/schemas/FilmPicture'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get('/:id',filmPictureValidator.checkGet(),MiddlewareValidator.handleValidationError,FilmPictureController.get)

export default router