import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmDubbingController from "../controllers/film-dubbing/film-dubbing.controller";
import filmDubbingValidator from "../utils/film-dubbing-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmDubbing:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Dubbing
 *                  filmId:
 *                      type: number
 *                      description: Describes the id of the Film 
 *                  languageId:
 *                      type: number
 *                      description: Describe the id  of the language
 *                  countryId:
 *                      type: number
 *                      description: Describe the  id  of the country
 *              required:
 *                  - filmId
 *                  - languageId
 *                  - countryId
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
 * /film-dubbings:
 *  post:
 *      summary: Service to create a new Film Dubbing
 *      tags: [FilmDubbing]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmDubbing'
 *      responses:
 *          '201':
 *              description: Film Dubbing Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmDubbing'
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
 *              description: The Film Dubbing  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    "/",
    filmDubbingValidator.checkCreate(),
    MiddlewareValidator.handleValidationError,
    FilmDubbingController.create
  );

    
/**
* @swagger
* /film-dubbings/{id}:
*  get:
*      summary: Service that provides a Film Dubbing  available
*      tags: [FilmDubbing]
*      parameters:
*       - in : path
*         name: id
*         description: id of film dubbing 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Dubbing got
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
*                                      $ref: '#/components/schemas/FilmDubbing'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


  
router.get(
    "/:id",
    filmDubbingValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    FilmDubbingController.get
  );

  export default router