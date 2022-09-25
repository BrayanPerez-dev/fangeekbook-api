import { Router } from "express";
import FilmGenreController from "../controllers/film-genre/film-genre.controller";
import filmGenreValidator from "../utils/film-genre-validator";
import MiddlewareValidator from "../utils/validators";


const router = Router()


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmGenre:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Genre
 *                  film_id:
 *                      type: string
 *                      description: Describes the id of the Film 
 *                  film_genre_type_id:
 *                      type: boolean
 *                      description: Describe the id  of the film Genre Type
 *              required:
 *                  - film_id
 *                  - film_genre_type_id
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
 * /film-genres:
 *  post:
 *      summary: Service to create a new Film Genre
 *      tags: [FilmGenre]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmGenre'
 *      responses:
 *          '201':
 *              description: Film Genre  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmGenre'
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
 *              description: The Film Genre  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */


router.post('/',filmGenreValidator.checkCreate(),MiddlewareValidator.handleValidationError,FilmGenreController.create)



/**
* @swagger
* /film-genres:
*  get:
*      summary: Service that provides a Film Genre  available
*      tags: [FilmGenre]
*      responses:
*          '200':
*              description: Film Genre got
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
*                                      $ref: '#/components/schemas/FilmGenre'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get('/',FilmGenreController.getAll)


/**
* @swagger
* /film-genres/{film_id}/{film_genre_type_id}:
*  get:
*      summary: Service that provides a Film Genre available
*      tags: [FilmGenre]
*      parameters:
*       - in : path
*         name: film_id
*         description: id of film
*         schema:
*           type: integer
*         required: true
*       - in : path
*         name: film_genre_type_id
*         description: id of film genre type  
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Genre got
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
*                                      $ref: '#/components/schemas/FilmGenre'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get('/:film_id/:film_genre_type_id',filmGenreValidator.checkGet(),MiddlewareValidator.handleValidationError,FilmGenreController.get)

export default router