import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import CelebrityType from '../controllers/celebrity-type/celebrity-type.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          CelebrityType:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Celebrity Type
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Celebrity  Type
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Celebrity Type
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
 * /celebrity-types:
 *  post:
 *      summary: Service to create a new Celebrity Type
 *      tags: [CelebrityType]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CelebrityType'
 *      responses:
 *          '201':
 *              description: Celebrity Type Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/CelebrityType'
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
 *              description: The Celebrity Type already exists
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
    CelebrityType.create
)


/**
* @swagger
* /celebrity-types/{id}:
*  get:
*      summary: Service that provides a Celebrity Type available
*      tags: [CelebrityType]
*      parameters:
*       - in : path
*         name: id
*         description: id of celebrity type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity Type got
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
*                                      $ref: '#/components/schemas/CelebrityType'
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
    CelebrityType.get
)
/**
* @swagger
* /celebrity-types:
*  get:
*      summary: Service that provides the list of Celebrity Types available
*      tags: [CelebrityType]
*      responses:
*          '200':
*              description: List of celebrity types
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
*                                      $ref: '#/components/schemas/CelebrityType'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    CelebrityType.getAll
)


/**
* @swagger
* /celebrity-types/{id}:
*  put:
*      summary: Service to update a Celebrity Type
*      tags: [CelebrityType]
*      parameters:
*       - in : path
*         name: id
*         description: celebrity type id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/CelebrityType'
*      responses:
*          '200':
*              description: Celebrity Type updated
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
*                                      $ref: '#/components/schemas/CelebrityType'
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
    CelebrityType.update
)



/**
* @swagger
* /celebrity-types/{id}:
*  delete:
*      summary: Service to delete a Celebrity Type
*      tags: [CelebrityType]
*      parameters:
*       - in : path
*         name: id
*         description: celebrity type id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity Type deleted
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
*                                      $ref: '#/components/schemas/CelebrityType'
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
    CelebrityType.delete
)
export default router;