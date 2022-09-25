import FilmSoundtrackController from "../controllers/film-soundtrack/film-soundtrack.controller";
import { Router } from "express";
import MiddlewareValidator from '../utils/validators';
import filmSoundtrackValidator from "../utils/film-soundtrack-validator";


const router = Router()



/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmSoundtrack:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Soundtrack
 *                  filmId:
 *                      type: string
 *                      description: Describes the id of the Film 
 *                  filmSongId:
 *                      type: boolean
 *                      description: Describe the id  of the Film Song
 *              required:
 *                  - filmId
 *                  - filmSongId
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
 * /film-soundtracks:
 *  post:
 *      summary: Service to create a new Film Soundtrack
 *      tags: [FilmSoundtrack]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmSoundtrack'
 *      responses:
 *          '201':
 *              description: Film Soundtrack  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmSoundtrack'
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
 *              description: The Film Soundtrack  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */


router.post('/',filmSoundtrackValidator.checkCreate(),MiddlewareValidator.handleValidationError,FilmSoundtrackController.create)


/**
* @swagger
* /film-soundtracks/{id}:
*  get:
*      summary: Service that provides a Film Soundtrack  available
*      tags: [FilmSoundtrack]
*      parameters:
*       - in : path
*         name: id
*         description: id of film soundtrack 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Soundtrack got
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
*                                      $ref: '#/components/schemas/FilmSoundtrack'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get('/:id',filmSoundtrackValidator.checkGet(),MiddlewareValidator.handleValidationError,FilmSoundtrackController.get)

export default router