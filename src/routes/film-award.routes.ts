import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmAwardController from "../controllers/film-award/film-award.controller";
import filmAwardValidator from "../utils/film-award-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmAward:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Award
 *                  filmId:
 *                      type: number
 *                      description: Describes the id of the Film 
 *                  awardTypeId:
 *                      type: number
 *                      description: Describe the type id  of the award
 *                  awardCategoryId:
 *                      type: number
 *                      description: Describe the  category id  of the award
 *                  winner:
 *                      type: boolean
 *                      description: Describe the film award winner
 *              required:
 *                  - filmId
 *                  - awardTypeId
 *                  - awardCategoryId
 *                  - winner
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
 * /film-awards:
 *  post:
 *      summary: Service to create a new Film Award
 *      tags: [FilmAward]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmAward'
 *      responses:
 *          '201':
 *              description: Film Staff  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmAward'
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
 *              description: The Film Award  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    "/",
    filmAwardValidator.checkCreate(),
    MiddlewareValidator.handleValidationError,
    FilmAwardController.create
  );

  
/**
* @swagger
* /film-awards/{id}:
*  get:
*      summary: Service that provides a Film Award  available
*      tags: [FilmAwards]
*      parameters:
*       - in : path
*         name: id
*         description: id of film award 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Award got
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
*                                      $ref: '#/components/schemas/FilmAward'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


  
router.get(
    "/:id",
    filmAwardValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    FilmAwardController.get
  );

  export default router