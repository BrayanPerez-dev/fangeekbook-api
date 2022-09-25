import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import FilmSong from '../controllers/film-song/film-song.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmSong:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Song
 *                  songName:
 *                      type: string
 *                      description: Describes the name of the Film Song
 *                  songPerformer:
 *                      type: string
 *                      description: Describes the performer of the Film Song
 *                  songDuration:
 *                      type: string
 *                      description: Describes the duration of the Film Song
 *                  songAlbum:
 *                      type: string
 *                      description: Describes the album of the Film Song
 *                  songVideo:
 *                      type: string
 *                      description: Describes the video of the Film Song
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Song
 *              required:
 *                  - songName
 *                  - songPerformer
 *                  - songDuration
 *                  - songAlbum
 *                  - songVideo
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
 * /film-songs:
 *  post:
 *      summary: Service to create a new Film Song
 *      tags: [FilmSong]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmSong'
 *      responses:
 *          '201':
 *              description: Film Song Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmSong'
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
 *              description: The Film Song already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    '/',
    CatalogueValidator.checkCreateForFilmSong(), 
    MiddlewareValidator.handleValidationError,
    FilmSong.create
)

/**
* @swagger
* /film-songs/{id}:
*  get:
*      summary: Service that provides a Film Song available
*      tags: [FilmSong]
*      parameters:
*       - in : path
*         name: id
*         description: id of film song
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Song got
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
*                                      $ref: '#/components/schemas/FilmSong'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/:id',
    CatalogueValidator.checkGet(), 
    MiddlewareValidator.handleValidationError,
    FilmSong.get
)

/**
* @swagger
* /film-songs:
*  get:
*      summary: Service that provides the list of Film Songs available
*      tags: [FilmSong]
*      responses:
*          '200':
*              description: List of film songs
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
*                                      $ref: '#/components/schemas/FilmSong'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    FilmSong.getAll
)



/**
* @swagger
* /film-songs/{id}:
*  put:
*      summary: Service to update a Film Song
*      tags: [FilmSong]
*      parameters:
*       - in : path
*         name: id
*         description: film song id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmSong'
*      responses:
*          '200':
*              description: Film Song updated
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
*                                      $ref: '#/components/schemas/FilmSong'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
    '/:id',
    CatalogueValidator.checkUpdateForFilmSong(), 
    MiddlewareValidator.handleValidationError,
    FilmSong.update
)

/**
* @swagger
* /film-songs/{id}:
*  delete:
*      summary: Service to delete a Film Song
*      tags: [FilmSong]
*      parameters:
*       - in : path
*         name: id
*         description: film song id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Song deleted
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
*                                      $ref: '#/components/schemas/FilmSong'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.delete(
    '/:id',
    CatalogueValidator.checkDelete(), 
    MiddlewareValidator.handleValidationError,
    FilmSong.delete
)

export default router