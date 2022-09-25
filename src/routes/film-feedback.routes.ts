import { Router } from "express";
import MiddlewareValidator from '../utils/validators';
import filmFeedbackValidator from "../utils/film-feedback-validator";
import FilmFeebackController from "../controllers/film-feedback/film-feedback.controller";

const router = Router()




/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmFeedback:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the film picture
 *                  filmId:
 *                      type: number
 *                      description: Describes the id of the film 
 *                  userId:
 *                      type: string
 *                      description: Describe the id of the user
 *                  feedback:
 *                      type: string
 *                      description: Describe the feedback of the film 
 *                  rate:
 *                      type: string
 *                      description: Describe the rate of the film 
 *              required:
 *                  - filmId
 *                  - userId
 *                  - feedback
 *                  - rate
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
 * /film-feedbacks:
 *  post:
 *      summary: Service to create a new Film Feedback
 *      tags: [FilmFeedback]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmFeedback'
 *      responses:
 *          '201':
 *              description: Film Feedback Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmFeedback'
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
 *              description: The Film Feedback  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post('/',filmFeedbackValidator.checkCreate(),MiddlewareValidator.handleValidationError,FilmFeebackController.create)


/**
* @swagger
* /film-feedbacks/{id}:
*  get:
*      summary: Service that provides a Film Feedback available
*      tags: [FilmFeedback]
*      parameters:
*       - in : path
*         name: id
*         description: id of film feedback 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Feedback got
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
*                                      $ref: '#/components/schemas/FilmFeedback'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get('/:id',filmFeedbackValidator.checkGet(),MiddlewareValidator.handleValidationError,FilmFeebackController.get)

export default router