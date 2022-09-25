import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmFormat from "../controllers/film-format/film-format.controller";
import filmFormatValidator from "../utils/film-format-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmFormat:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Format
 *                  filmId:
 *                      type: string
 *                      description: Describes the id of the Film
 *                  filmFormatTypeId:
 *                      type: boolean
 *                      description: Describe the status of the Film Format Type
 *                  releaseDate:
 *                      type: boolean
 *                      description: Describe the status of the Film Format
 *              required:
 *                  - filmId
 *                  - filmFormatTypeId
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
 * /film-formats:
 *  post:
 *      summary: Service to create a new Film Format
 *      tags: [FilmFormat]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmFormat'
 *      responses:
 *          '201':
 *              description: Film Format  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmFormat'
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
 *              description: The Film Format  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
  "/",
  filmFormatValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  FilmFormat.create
);


/**
* @swagger
* /film-formats/{id}:
*  get:
*      summary: Service that provides a Film Format  available
*      tags: [FilmFormat]
*      parameters:
*       - in : path
*         name: id
*         description: id of film format 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Format  got
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
*                                      $ref: '#/components/schemas/FilmFormat'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
  "/:id",
  filmFormatValidator.checkGet(),
  MiddlewareValidator.handleValidationError,
  FilmFormat.get
);


/**
* @swagger
* /film-formats/film/{filmId}:
*  get:
*      summary: Service that provides a Film , Film Format and the film format type  available
*      tags: [FilmFormat]
*      parameters:
*       - in : path
*         name: id
*         description: id of film 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Format got
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
*                                      $ref: '#/components/schemas/FilmFormat'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    "/film/:filmId",
    filmFormatValidator.checkGetFromFilmAndFilmFormatType(),
    MiddlewareValidator.handleValidationError,
    FilmFormat.getFromFilmAndFilmFormatType
  );

export default router;
