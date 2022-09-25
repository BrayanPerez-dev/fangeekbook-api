import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import PerformanceType from '../controllers/performance-type/performance-type.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          PerformanceType:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Performance Type
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Performance Type
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Performance Type
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
 * /performance-types:
 *  post:
 *      summary: Service to create a new Performance  Type
 *      tags: [PerformanceType]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/PerformanceType'
 *      responses:
 *          '201':
 *              description: Performance Type Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/PerformanceType'
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
 *              description: The Performance Type already exists
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
    PerformanceType.create
)

/**
* @swagger
* /performance-types/{id}:
*  get:
*      summary: Service that provides a Performance Type available
*      tags: [PerformanceType]
*      parameters:
*       - in : path
*         name: id
*         description: id of performance type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Performance Type got
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
*                                      $ref: '#/components/schemas/PerformanceType'
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
    PerformanceType.get
)

/**
* @swagger
* /performance-types:
*  get:
*      summary: Service that provides the list of Performance Types available
*      tags: [PerformanceType]
*      responses:
*          '200':
*              description: List of performance types
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
*                                      $ref: '#/components/schemas/PerformanceType'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    PerformanceType.getAll
)


/**
* @swagger
* /performance-types/{id}:
*  put:
*      summary: Service to update a Performance Type
*      tags: [PerformanceType]
*      parameters:
*       - in : path
*         name: id
*         description: performance type id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/PerformanceType'
*      responses:
*          '200':
*              description: Performance Type updated
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
*                                      $ref: '#/components/schemas/PerformanceType'
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
    PerformanceType.update
)



/**
* @swagger
* /performance-types/{id}:
*  delete:
*      summary: Service to delete a Performance Type
*      tags: [PerformanceType]
*      parameters:
*       - in : path
*         name: id
*         description: performance type id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Performance Type delete
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
*                                      $ref: '#/components/schemas/PerformanceType'
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
    PerformanceType.delete
)

export default router;