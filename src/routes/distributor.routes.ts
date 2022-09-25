import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import Distributor from '../controllers/distributor/distributor.controller';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();
/**
 * @swagger
 *  components:
 *      schemas:
 *          Distributor:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Distributor
 *                  description:
 *                      type: string
 *                      description: Describes the distributor of the Film 
 *                  url_image:
 *                      type: string
 *                      description: Describes the image of the Distributor
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Distributor
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
 * /distributors:
 *  post:
 *      summary: Service to create a new Distributor
 *      tags: [Distributor]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Distributor'
 *      responses:
 *          '201':
 *              description: Distributor Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Distributor'
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
    Distributor.create
)


/**
* @swagger
* /distributors/{id}:
*  get:
*      summary: Service that provides a Distributor available
*      tags: [Distributor]
*      parameters:
*       - in : path
*         name: id
*         description: id of distributor
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Distributor got
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
*                                      $ref: '#/components/schemas/Distributor'
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
    Distributor.get
)


/**
* @swagger
* /distributors:
*  get:
*      summary: Service that provides the list of Distributors available
*      tags: [Distributor]
*      responses:
*          '200':
*              description: List of distributors
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
*                                      $ref: '#/components/schemas/Distributor'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    Distributor.getAll
)



/**
* @swagger
* /distributors/{id}:
*  put:
*      summary: Service to update a Distributor
*      tags: [Distributor]
*      parameters:
*       - in : path
*         name: id
*         description: destributor id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Distributor'
*      responses:
*          '200':
*              description: Distributor updated
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
*                                      $ref: '#/components/schemas/Distributor'
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
    Distributor.update
)



/**
* @swagger
* /distributors/{id}:
*  delete:
*      summary: Service to delete a Distributor
*      tags: [Distributor]
*      parameters:
*       - in : path
*         name: id
*         description: distributor id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Distributor deleted
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
*                                      $ref: '#/components/schemas/Distributor'
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
    Distributor.delete
)

export default router