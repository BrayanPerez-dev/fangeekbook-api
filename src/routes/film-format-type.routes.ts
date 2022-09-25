import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import FilmFormatType from '../controllers/film-format-type/film-format-type.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmFormatType:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Format Type
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Film Format Type
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Format Type
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
 * /film-format-types:
 *  post:
 *      summary: Service to create a new Film Format Type
 *      tags: [FilmFormatType]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmFormatType'
 *      responses:
 *          '201':
 *              description: Film Format Type Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmFormatType'
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
 *              description: The Film Format Type already exists
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
    FilmFormatType.create
)


/**
* @swagger
* /film-format-types/{id}:
*  get:
*      summary: Service that provides a Film Format Type available
*      tags: [FilmFormatType]
*      parameters:
*       - in : path
*         name: id
*         description: id of film format type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Format Type got
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
*                                      $ref: '#/components/schemas/FilmFormatType'
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
    FilmFormatType.get
)

/**
* @swagger
* /film-format-types:
*  get:
*      summary: Service that provides the list of Film Format Types available
*      tags: [FilmFormatType]
*      responses:
*          '200':
*              description: List of film format types
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
*                                      $ref: '#/components/schemas/FilmFormatType'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/
router.get(
    '/',
    FilmFormatType.getAll
)



/**
* @swagger
* /film-format-types/{id}:
*  put:
*      summary: Service to update a Film Format Type
*      tags: [FilmFormatType]
*      parameters:
*       - in : path
*         name: id
*         description: Film Format Type id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmFormatType'
*      responses:
*          '200':
*              description: Film Format Type updated
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
*                                      $ref: '#/components/schemas/FilmFormatType'
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
    FilmFormatType.update
)


/**
* @swagger
* /film-format-types/{id}:
*  delete:
*      summary: Service to delete a Film Format Type
*      tags: [FilmFormatType]
*      parameters:
*       - in : path
*         name: id
*         description: film format type id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Format Type deleted
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
*                                      $ref: '#/components/schemas/FilmFormatType'
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
    FilmFormatType.delete
)

export default router