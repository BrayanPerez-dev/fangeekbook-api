import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmCastingController from "../controllers/film-casting/film-casting.controller";
import filmCastingValidator from "../utils/film-casting-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmCasting:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Casting
 *                  filmId:
 *                      type: number
 *                      description: Describes the id of the Film 
 *                  celebrityId:
 *                      type: number
 *                      description: Describe the id  of the celebrity
 *                  celebrityRoleId:
 *                      type: number
 *                      description: Describe the  role id  of the celebrity
 *                  character:
 *                      type: number
 *                      description: Describe the character
 *              required:
 *                  - filmId
 *                  - staffId
 *                  - celebrityId
 *                  - celebrityRoleId
 *                  - character
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
 * /film-castings:
 *  post:
 *      summary: Service to create a new Film Staff
 *      tags: [FilmCasting]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmCasting'
 *      responses:
 *          '201':
 *              description: Film Staff  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmCasting'
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
 *              description: The Film Casting  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
  "/",
  filmCastingValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  FilmCastingController.create
);

/**
* @swagger
* /film-castings/{id}:
*  get:
*      summary: Service that provides a Film Casting  available
*      tags: [FilmCasting]
*      parameters:
*       - in : path
*         name: id
*         description: id of film casting 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Casting got
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
*                                      $ref: '#/components/schemas/FilmCasting'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    "/:id",
    filmCastingValidator.checkGetCasting(),
    MiddlewareValidator.handleValidationError,
    FilmCastingController.get
  );
export default router;
