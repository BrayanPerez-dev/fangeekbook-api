import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import CelebrityRole from '../controllers/celebrity-role/celebrity-role.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          CelebrityRole:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Celebrity Role
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Celebrity  Role
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Celebrity Role
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
 * /celebrity-roles:
 *  post:
 *      summary: Service to create a new Celebrity Role
 *      tags: [CelebrityRole]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CelebrityRole'
 *      responses:
 *          '201':
 *              description: Celebrity Role Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/CelebrityRole'
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
 *              description: The Celebrity Role already exists
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
    CelebrityRole.create
)


/**
* @swagger
* /celebrity-roles/{id}:
*  get:
*      summary: Service that provides a Celebrity Role available
*      tags: [CelebrityRole]
*      parameters:
*       - in : path
*         name: id
*         description: id of celebrity roles
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity Role got
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
*                                      $ref: '#/components/schemas/CelebrityRole'
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
    CelebrityRole.get
)
/**
* @swagger
* /celebrity-roles:
*  get:
*      summary: Service that provides the list of Celebrity Roles available
*      tags: [CelebrityRole]
*      responses:
*          '200':
*              description: List of celebrity roles
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
*                                      $ref: '#/components/schemas/CelebrityRole'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    CelebrityRole.getAll
)



/**
* @swagger
* /celebrity-roles/{id}:
*  put:
*      summary: Service to update a Celebrity Role
*      tags: [CelebrityRole]
*      parameters:
*       - in : path
*         name: id
*         description: celebrity role id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/CelebrityRole'
*      responses:
*          '200':
*              description: Celebrity Role updated
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
*                                      $ref: '#/components/schemas/CelebrityRole'
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
    CelebrityRole.update
)



/**
* @swagger
* /celebrity-roles/{id}:
*  delete:
*      summary: Service to delete a Celebrity Role
*      tags: [CelebrityRole]
*      parameters:
*       - in : path
*         name: id
*         description: celebrity role id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity Role deleted
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
*                                      $ref: '#/components/schemas/CelebrityRole'
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
    CelebrityRole.delete
)
export default router;