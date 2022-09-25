import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import FilmLanguage from '../controllers/film-language/film-language.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmLanguage:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Language
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Film Language
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Language
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
 * /film-languages:
 *  post:
 *      summary: Service to create a new Film Language 
 *      tags: [FilmLanguage]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmLanguage'
 *      responses:
 *          '201':
 *              description: Film Language Type Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmLanguage'
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
 *              description: The Film Language already exists
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
    FilmLanguage.create
)


/**
* @swagger
* /film-languages/{id}:
*  get:
*      summary: Service that provides a Film Language available
*      tags: [FilmLanguage]
*      parameters:
*       - in : path
*         name: id
*         description: id of film language
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Language got
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
*                                      $ref: '#/components/schemas/FilmLanguage'
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
    FilmLanguage.get
)


/**
* @swagger
* /film-languages:
*  get:
*      summary: Service that provides the list of Film Languages available
*      tags: [FilmLanguage]
*      responses:
*          '200':
*              description: List of film languages
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
*                                      $ref: '#/components/schemas/FilmLanguage'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/
router.get(
    '/',
    FilmLanguage.getAll
)

/**
* @swagger
* /film-languages/{id}:
*  put:
*      summary: Service to update a Film Language
*      tags: [FilmLanguage]
*      parameters:
*       - in : path
*         name: id
*         description: film language id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmLanguage'
*      responses:
*          '200':
*              description: Film Language updated
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
*                                      $ref: '#/components/schemas/UserType'
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
    FilmLanguage.update
)


/**
* @swagger
* /film-languages/{id}:
*  delete:
*      summary: Service to delete a Film Language
*      tags: [FilmLanguage]
*      parameters:
*       - in : path
*         name: id
*         description: film language id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Language deleted
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
*                                      $ref: '#/components/schemas/FilmLanguage'
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
    FilmLanguage.delete
)

export default router