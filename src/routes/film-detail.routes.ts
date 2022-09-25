import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmdDetailController from "../controllers/film-detail/film-detail.controller";
import filmDetailValidator from "../utils/film-detail-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmDetail:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Detail
 *                  filmId:
 *                      type: number
 *                      description: Describes the film id of the Film Detail
 *                  totalSeasons:
 *                      type: number
 *                      description: Describes the total seasons of the Film Detail
 *                  totalEpisodes:
 *                      type: number
 *                      description: Describes the total episodes of the Film Detail
 *                  endDate:
 *                      type: date
 *                      description: Describes the end date of the Film Detail
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Detail
 *              required:
 *                  - filmId
 *                  - totalSeasons
 *                  - totalEpisodes
 *                  - endDate
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
 * /film-details:
 *  post:
 *      summary: Service to create a new Film Detail
 *      tags: [FilmDetail]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmDetail'
 *      responses:
 *          '201':
 *              description: Film Detail Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmDetail'
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
 *              description: The Film Detail already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */


router.post(
  "/",
  filmDetailValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  FilmdDetailController.create
);


/**
* @swagger
* /film-details/{id}:
*  get:
*      summary: Service that provides a Film Detail available
*      tags: [FilmDetail]
*      parameters:
*       - in : path
*         name: id
*         description: id of film detail
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Detail got
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
*                                      $ref: '#/components/schemas/FilmDetail'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
  "/:id",
  filmDetailValidator.checkGet(),
  MiddlewareValidator.handleValidationError,
  FilmdDetailController.get
);

/**
* @swagger
* /film-details:
*  get:
*      summary: Service that provides the list of Film Details available
*      tags: [FilmDetail]
*      responses:
*          '200':
*              description: List of films details
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
*                                      $ref: '#/components/schemas/FilmDetail'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get("/", FilmdDetailController.getAll);


/**
* @swagger
* /film-details/{id}:
*  put:
*      summary: Service to update a Film Details
*      tags: [FilmDetail]
*      parameters:
*       - in : path
*         name: id
*         description: film detail id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmDetail'
*      responses:
*          '200':
*              description: Film Detail updated
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
*                                      $ref: '#/components/schemas/FilmDetail'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
  "/:id",
  filmDetailValidator.checkUpdate(),
  MiddlewareValidator.handleValidationError,
  FilmdDetailController.update
);



/**
* @swagger
* /film-details/{id}:
*  delete:
*      summary: Service to delete a Film Detail
*      tags: [FilmDetail]
*      parameters:
*       - in : path
*         name: id
*         description: film detail id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film detail deleted
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
*                                      $ref: '#/components/schemas/FilmDetail'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.delete(
  "/:id",
  filmDetailValidator.checkDelete(),
  MiddlewareValidator.handleValidationError,
  FilmdDetailController.delete
);

export default router;
