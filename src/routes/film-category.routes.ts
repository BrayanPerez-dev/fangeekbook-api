import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import FilmCategory from '../controllers/film-category/film-category.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmCategory:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Category
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Film  Category
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Film Category
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
 * /film-categories:
 *  post:
 *      summary: Service to create a new Film Category
 *      tags: [FilmCategory]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmCategory'
 *      responses:
 *          '201':
 *              description: Film Category Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmCategory'
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
 *              description: The Film Category already exists
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
    FilmCategory.create
)



/**
* @swagger
* /film-categories/{id}:
*  get:
*      summary: Service that provides a Film Category available
*      tags: [FilmCategory]
*      parameters:
*       - in : path
*         name: id
*         description: id of film category
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Category got
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
*                                      $ref: '#/components/schemas/FilmCategory'
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
    FilmCategory.get
)

/**
* @swagger
* /film-categories:
*  get:
*      summary: Service that provides the list of Film Category available
*      tags: [FilmCategory]
*      responses:
*          '200':
*              description: List of film categories
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
*                                      $ref: '#/components/schemas/FilmCategory'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    FilmCategory.getAll
)


/**
* @swagger
* /film-categories/{id}:
*  put:
*      summary: Service to update a Film Category
*      tags: [FilmCategory]
*      parameters:
*       - in : path
*         name: id
*         description:  id of film category
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/FilmCategory'
*      responses:
*          '200':
*              description: Film Category updated
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
*                                      $ref: '#/components/schemas/FilmCategory'
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
    FilmCategory.update
)

/**
* @swagger
* /film-categories/{id}:
*  delete:
*      summary: Service to delete a Film Category
*      tags: [FilmCategory]
*      parameters:
*       - in : path
*         name: id
*         description: film category id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Category deleted
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
*                                      $ref: '#/components/schemas/FilmCategory'
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
    FilmCategory.delete
)

export default router;