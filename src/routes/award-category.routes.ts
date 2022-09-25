import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import AwardCategory from '../controllers/award-category/award-category.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          AwardCategory:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Award Category
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Award  Category
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Award Category
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
 * /award-categories:
 *  post:
 *      summary: Service to create a new Award Category
 *      tags: [AwardCategory]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AwardCategory'
 *      responses:
 *          '201':
 *              description: Award Category Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/AwardCategory'
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
 *              description: The Award Category already exists
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
    AwardCategory.create
)


/**
* @swagger
* /award-categories/{id}:
*  get:
*      summary: Service that provides a Award Category available
*      tags: [AwardCategory]
*      parameters:
*       - in : path
*         name: id
*         description: id of award category
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Award Category got
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
*                                      $ref: '#/components/schemas/AwardCategory'
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
    AwardCategory.get
)

/**
* @swagger
* /award-categories:
*  get:
*      summary: Service that provides the list of Award Category available
*      tags: [AwardCategory]
*      responses:
*          '200':
*              description: List of award categories
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
*                                      $ref: '#/components/schemas/AwardCategory'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/
router.get(
    '/',
    AwardCategory.getAll
)


/**
* @swagger
* /award-categories/{id}:
*  put:
*      summary: Service to update a Award Category
*      tags: [AwardCategory]
*      parameters:
*       - in : path
*         name: id
*         description:  id of award category
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/AwardCategory'
*      responses:
*          '200':
*              description: Award Category updated
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
*                                      $ref: '#/components/schemas/AwardCategory'
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
    AwardCategory.update
)


/**
* @swagger
* /award-categories/{id}:
*  delete:
*      summary: Service to delete a Award Category
*      tags: [AwardCategory]
*      parameters:
*       - in : path
*         name: id
*         description: award category id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Award Category deleted
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
*                                      $ref: '#/components/schemas/AwardCategory'
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
    AwardCategory.delete
)

export default router;