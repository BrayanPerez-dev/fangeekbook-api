import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import FilmGenreType from '../controllers/film-genre-type/film-genre-type.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmGenreType:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Genre Type
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Film Genre Type
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Genre Type
 *              required:
 *                  - description
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
 * /film-genre-types:
 *  post:
 *      summary: Service to create a new Film Genre Type
 *      tags: [FilmGenreType]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmGenreType'
 *      responses:
 *          '201':
 *              description: Film Genre  Type Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmGenreType'
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
 *              description: The Film Genre Type already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    '/',
    CatalogueValidator.checkCreate(), 
    MiddlewareValidator.handleValidationError,
    FilmGenreType.create
)


/**
* @swagger
* /film-genre-types/{id}:
*  get:
*      summary: Service that provides a Film Genre Type available
*      tags: [FilmGenreType]
*      parameters:
*       - in : path
*         name: id
*         description: id of film genre type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Genre Type got
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
*                                      $ref: '#/components/schemas/FilmGenreType'
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
    FilmGenreType.get
)

/**
* @swagger
* /film-genre-types:
*  get:
*      summary: Service that provides the list of Film Genre Types available
*      tags: [FilmGenreType]
*      responses:
*          '200':
*              description: List of film genre types
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
*                                      $ref: '#/components/schemas/FilmGenreType'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/
router.get(
    '/',
    FilmGenreType.getAll
)


/**
* @swagger
* /film-genre-types/{id}:
*  put:
*      summary: Service to update a Film Genre Type
*      tags: [FilmGenreType]
*      parameters:
*       - in : path
*         name: id
*         description: film genre type id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmGenreType'
*      responses:
*          '200':
*              description: Film Genre Type updated
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
*                                      $ref: '#/components/schemas/FilmGenreType'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
    '/:id',
    CatalogueValidator.checkUpdate(), 
    MiddlewareValidator.handleValidationError,
    FilmGenreType.update
)



/**
* @swagger
* /film-genre-types/{id}:
*  delete:
*      summary: Service to delete a Film Genre Type
*      tags: [FilmGenreType]
*      parameters:
*       - in : path
*         name: id
*         description: film genre type id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Genre Type deleted
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
*                                      $ref: '#/components/schemas/FilmGenreType'
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
    FilmGenreType.delete
)

export default router