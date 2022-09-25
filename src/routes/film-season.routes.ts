import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmSeasonController from "../controllers/film-season/film-season.controller";
import filmSeasonValidator from "../utils/film-season-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmSeason:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Season
 *                  filmId:
 *                      type: number
 *                      description: Describes the film id of the Film Season
 *                  name:
 *                      type: number
 *                      description: Describes the name of the Film Season
 *                  description:
 *                      type: string
 *                      description: Describes the description of the Film Season
 *                  firstEmision:
 *                      type: date
 *                      description: Describes the first emision date of the Film Season
 *                  lastEmision:
 *                      type: date
 *                      description: Describes the last emision date of the Film Season
 *                  urlImage:
 *                      type: string
 *                      description: Describes the url image of the Film Season
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Season
 *              required:
 *                  - filmId
 *                  - name
 *                  - description
 *                  - firstEmision
 *                  - lastEmision
 *                  - urlImage
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
 * /film-seasons:
 *  post:
 *      summary: Service to create a new Film Season
 *      tags: [FilmSeason]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmSeason'
 *      responses:
 *          '201':
 *              description: Film Season Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmSeason'
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
 *              description: The Film Season already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */


router.post(
  "/",
  filmSeasonValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  FilmSeasonController.create
);


/**
* @swagger
* /film-seasons/{id}:
*  get:
*      summary: Service that provides a Film Season available
*      tags: [FilmSeason]
*      parameters:
*       - in : path
*         name: id
*         description: id of film season
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Season got
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
*                                      $ref: '#/components/schemas/FilmSeason'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
  "/:id",
  filmSeasonValidator.checkGet(),
  MiddlewareValidator.handleValidationError,
  FilmSeasonController.get
);

/**
* @swagger
* /film-seasons:
*  get:
*      summary: Service that provides the list of Film Seasons available
*      tags: [FilmSeason]
*      responses:
*          '200':
*              description: List of films seasons
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
*                                      $ref: '#/components/schemas/FilmSeason'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get("/", FilmSeasonController.getAll);


/**
* @swagger
* /film-seasons/{id}:
*  put:
*      summary: Service to update a Film Season
*      tags: [FilmSeason]
*      parameters:
*       - in : path
*         name: id
*         description: film season id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmSeason'
*      responses:
*          '200':
*              description: Film Season updated
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
*                                      $ref: '#/components/schemas/FilmSeason'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
  "/:id",
  filmSeasonValidator.checkUpdate(),
  MiddlewareValidator.handleValidationError,
  FilmSeasonController.update
);



/**
* @swagger
* /film-seasons/{id}:
*  delete:
*      summary: Service to delete a Film Season
*      tags: [FilmSeason]
*      parameters:
*       - in : path
*         name: id
*         description: film season id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Season deleted
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
*                                      $ref: '#/components/schemas/FilmSeason'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.delete(
  "/:id",
  filmSeasonValidator.checkDelete(),
  MiddlewareValidator.handleValidationError,
  FilmSeasonController.delete
);

export default router;
