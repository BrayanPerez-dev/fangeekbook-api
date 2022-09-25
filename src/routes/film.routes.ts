import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmController from "../controllers/film/film.controller";
import filmValidator from "../utils/film-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          Film:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film
 *                  category:
 *                      type: number
 *                      description: Describes the category id of the Film
 *                  genreType:
 *                      type: number
 *                      description: Describes the genre type id of the Film
 *                  originalLanguage:
 *                      type: number
 *                      description: Describes the original language id of the Film
 *                  recordingCountry:
 *                      type: number
 *                      description: Describes the recording country id of the Film
 *                  distributorId:
 *                      type: number
 *                      description: Describes the distributor id of the Film
 *                  runtime:
 *                      type: number
 *                      description: Describes the run time of the Film
 *                  budget:
 *                      type: number
 *                      description: Describes the budget of the Film
 *                  sinopsis:
 *                      type: string
 *                      description: Describes the sinopsis of the Film
 *                  boxOffice:
 *                      type: number
 *                      description: Describes the box office of the Film
 *                  rate:
 *                      type: number
 *                      description: Describes the rate of the Film
 *                  trailerUrl:
 *                      type: string
 *                      description: Describes the trailer url of the Film
 *                  releaseDate:
 *                      type: date
 *                      description: Describes the release date of the Film
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film 
 *              required:
 *                  - category
 *                  - genreType
 *                  - originalLanguage
 *                  - recordingCountry
 *                  - ratingId
 *                  - distributorId
 *                  - runtime
 *                  - budget
 *                  - sinopsis
 *                  - boxOffice
 *                  - rate
 *                  - trailerUrl
 *                  - releaseDate
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
 * /films:
 *  post:
 *      summary: Service to create a new Film
 *      tags: [Film]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Film'
 *      responses:
 *          '201':
 *              description: Film Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Film'
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
  filmValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  FilmController.create
);


/**
* @swagger
* /films/{id}:
*  get:
*      summary: Service that provides a Film  available
*      tags: [Film]
*      parameters:
*       - in : path
*         name: id
*         description: id of film type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film  got
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
*                                      $ref: '#/components/schemas/Film'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    "/:id",
    filmValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    FilmController.get
  );
  

/**
* @swagger
* /films:
*  get:
*      summary: Service that provides the list of Films available
*      tags: [Film]
*      responses:
*          '200':
*              description: List of films
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
*                                      $ref: '#/components/schemas/Film'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    "/",
    FilmController.getAll
  );
  


/**
* @swagger
* /films/{id}:
*  put:
*      summary: Service to update a Film
*      tags: [Film]
*      parameters:
*       - in : path
*         name: id
*         description: film  id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Film'
*      responses:
*          '200':
*              description: Film updated
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
*                                      $ref: '#/components/schemas/Film'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
    "/:id",
    filmValidator.checkUpdate,
    MiddlewareValidator.handleValidationError,
    FilmController.update
);



/**
* @swagger
* /films/{id}:
*  delete:
*      summary: Service to delete a Film 
*      tags: [Film]
*      parameters:
*       - in : path
*         name: id
*         description: film  id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film  deleted
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
*                                      $ref: '#/components/schemas/Film'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.delete(
    "/:id",
    filmValidator.checkDelete,
    MiddlewareValidator.handleValidationError,
    FilmController.delete
  );
  

export default router;
