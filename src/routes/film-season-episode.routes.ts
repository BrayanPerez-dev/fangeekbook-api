import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmSeasonEpisodeController from "../controllers/film-season-episode/film-season-episode.controller";
import filmSeasonEpisodeValidator from "../utils/film-season-episode-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmSeasonEpisode:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Season Episode
 *                  filmSeasonId:
 *                      type: number
 *                      description: Describes the film season id of the Film Season Episode
 *                  name:
 *                      type: number
 *                      description: Describes the name of the Film Season Episode
 *                  description:
 *                      type: string
 *                      description: Describes the description of the Film Season Episode
 *                  runTime:
 *                      type: string
 *                      description: Describes the run time of the Film Season Episode
 *                  releaseDate:
 *                      type: number
 *                      description: Describes the release date of the Film Season Episode
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Season Episode
 *              required:
 *                  - filmSeasonId
 *                  - name
 *                  - description
 *                  - runTime
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
 * /film-season-episodes:
 *  post:
 *      summary: Service to create a new Film Season Episode
 *      tags: [FilmSeasonEpisode]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmSeasonEpisode'
 *      responses:
 *          '201':
 *              description: Film Season Episode Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmSeasonEpisode'
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
 *              description: The Film Season Episode already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
  "/",
  filmSeasonEpisodeValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  FilmSeasonEpisodeController.create
);


/**
* @swagger
* /film-season-episodes/{id}:
*  get:
*      summary: Service that provides a Film Season Episode available
*      tags: [FilmSeasonEpisode]
*      parameters:
*       - in : path
*         name: id
*         description: id of film season episode
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Season Episode got
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
*                                      $ref: '#/components/schemas/FilmSeasonEpisode'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
  "/:id",
  filmSeasonEpisodeValidator.checkGet(),
  MiddlewareValidator.handleValidationError,
  FilmSeasonEpisodeController.get
);


/**
* @swagger
* /film-season-episodes:
*  get:
*      summary: Service that provides the list of Film Season Episode available
*      tags: [FilmSeasonEpisode]
*      responses:
*          '200':
*              description: List of films season episode
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
*                                      $ref: '#/components/schemas/FilmSeasonEpisode'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.get("/", FilmSeasonEpisodeController.getAll);


/**
* @swagger
* /film-season-episodes/{id}:
*  put:
*      summary: Service to update a Film Season Episode
*      tags: [FilmSeasonEpisode]
*      parameters:
*       - in : path
*         name: id
*         description: film season episode id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmSeasonEpisode'
*      responses:
*          '200':
*              description: Film Season Episode updated
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
*                                      $ref: '#/components/schemas/FilmSeasonEpisode'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
  "/:id",
  filmSeasonEpisodeValidator.checkUpdate,
  MiddlewareValidator.handleValidationError,
  FilmSeasonEpisodeController.update
);


/**
* @swagger
* /film-season-episodes/{id}:
*  delete:
*      summary: Service to delete a Film Season Episode
*      tags: [FilmSeasonEpisode]
*      parameters:
*       - in : path
*         name: id
*         description: film season episode id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Season Episode deleted
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
*                                      $ref: '#/components/schemas/FilmSeasonEpisode'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.delete(
  "/:id",
  filmSeasonEpisodeValidator.checkDelete,
  MiddlewareValidator.handleValidationError,
  FilmSeasonEpisodeController.delete
);

export default router