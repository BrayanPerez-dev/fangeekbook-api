import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import Franchise from '../controllers/franchise/franchise.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();
/**
 * @swagger
 *  components:
 *      schemas:
 *          Franchise:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Franchise
 *                  description:
 *                      type: string
 *                      description: Describes the saga of the Film 
 *                  url_image:
 *                      type: string
 *                      description: Describes the image of the Franchise
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Franchise
 *              required:
 *                  - description
 *                  - url_image
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
 * /franchises:
 *  post:
 *      summary: Service to create a new Franchise
 *      tags: [Franchise]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Franchise'
 *      responses:
 *          '201':
 *              description:  Franchise Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Franchise'
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
 *              description: The Franchise already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    '/',
    CatalogueValidator.checkCreate(), 
    CatalogueValidator.checkCreateForUrlImage(),
    MiddlewareValidator.handleValidationError,
    Franchise.create
)

/**
* @swagger
* /franchises/{id}:
*  get:
*      summary: Service that provides a Franchise  available
*      tags: [Franchise]
*      parameters:
*       - in : path
*         name: id
*         description: id of franchise type
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Franchise Type got
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
*                                      $ref: '#/components/schemas/Franchise'
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
    Franchise.get
)


/**
* @swagger
* /franchises:
*  get:
*      summary: Service that provides the list of Franchises available
*      tags: [Franchise]
*      responses:
*          '200':
*              description: List of franchises
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
*                                      $ref: '#/components/schemas/Franchise'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    Franchise.getAll
)


/**
* @swagger
* /franchises/{id}:
*  put:
*      summary: Service to update a Franchise
*      tags: [Franchise]
*      parameters:
*       - in : path
*         name: id
*         description: franchise  id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Franchise'
*      responses:
*          '200':
*              description: Franchise updated
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
*                                      $ref: '#/components/schemas/Franchise'
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
    CatalogueValidator.checkUpdateForUrlImage(),
    MiddlewareValidator.handleValidationError,
    Franchise.update
)



/**
* @swagger
* /franchises/{id}:
*  delete:
*      summary: Service to delete a Franchise 
*      tags: [Franchise]
*      parameters:
*       - in : path
*         name: id
*         description: franchise  id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Franchise  deleted
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
*                                      $ref: '#/components/schemas/Franchise'
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
    Franchise.delete
)

export default router