import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import StaffType from '../controllers/staff-type/staff-type.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          StaffType:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Staff Type
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Staff  Type
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Staff Type
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
 * /staff-types:
 *  post:
 *      summary: Service to create a new Staff Type
 *      tags: [StaffType]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/StaffType'
 *      responses:
 *          '201':
 *              description: Staff Type Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/StaffType'
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
 *              description: The Staff Type already exists
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
    StaffType.create
)


/**
* @swagger
* /staff-types/{id}:
*  get:
*      summary: Service that provides a Staff Type available
*      tags: [StaffType]
*      parameters:
*       - in : path
*         name: id
*         description: id of staff type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Staff Type got
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
*                                      $ref: '#/components/schemas/StaffType'
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
    StaffType.get
)

/**
* @swagger
* /staff-types:
*  get:
*      summary: Service that provides the list of Staff Types available
*      tags: [StaffType]
*      responses:
*          '200':
*              description: List of staff types
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
*                                      $ref: '#/components/schemas/StaffType'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    StaffType.getAll
)


/**
* @swagger
* /staff-types/{id}:
*  put:
*      summary: Service to update a Staff Type
*      tags: [StaffType]
*      parameters:
*       - in : path
*         name: id
*         description: staff type id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/StaffType'
*      responses:
*          '200':
*              description: Staff Type updated
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
*                                      $ref: '#/components/schemas/StaffType'
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
    StaffType.update
)



/**
* @swagger
* /staff-types/{id}:
*  delete:
*      summary: Service to delete a Staff Type
*      tags: [StaffType]
*      parameters:
*       - in : path
*         name: id
*         description: staff type id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Staff Type deleted
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
*                                      $ref: '#/components/schemas/StaffType'
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
    StaffType.delete
)

export default router