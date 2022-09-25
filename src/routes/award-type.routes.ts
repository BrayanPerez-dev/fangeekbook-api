import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import AwardType from '../controllers/award-type/award-type.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          AwardType:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Award Type
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Award  Type
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Award Type
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
 * /award-types:
 *  post:
 *      summary: Service to create a new Award Type
 *      tags: [AwardType]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AwardType'
 *      responses:
 *          '201':
 *              description: Award Type Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/AwardType'
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
 *              description: The Award Type already exists
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
    AwardType.create
)


/**
* @swagger
* /award-types/{id}:
*  get:
*      summary: Service that provides a Award Type available
*      tags: [AwardType]
*      parameters:
*       - in : path
*         name: id
*         description: id of award type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Award Type got
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
*                                      $ref: '#/components/schemas/AwardType'
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
    AwardType.get
)

/**
* @swagger
* /award-types:
*  get:
*      summary: Service that provides the list of Award Types available
*      tags: [AwardType]
*      responses:
*          '200':
*              description: List of award types
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
*                                      $ref: '#/components/schemas/AwardType'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/
router.get(
    '/',
    AwardType.getAll
)



/**
* @swagger
* /award-types/{id}:
*  put:
*      summary: Service to update a Award Type
*      tags: [AwardType]
*      parameters:
*       - in : path
*         name: id
*         description: award type id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/AwardType'
*      responses:
*          '200':
*              description: Award Type updated
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
*                                      $ref: '#/components/schemas/AwardType'
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
    AwardType.update
)


/**
* @swagger
* /award-types/{id}:
*  delete:
*      summary: Service to delete a Award Type
*      tags: [AwardType]
*      parameters:
*       - in : path
*         name: id
*         description: award type id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Award Type deleted
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
*                                      $ref: '#/components/schemas/AwardType'
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
    AwardType.delete
)

export default router;