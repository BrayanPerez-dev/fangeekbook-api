import { Router } from 'express';
import MiddlewareValidator from '../utils/validators';
import Country from '../controllers/country/country';
import CatalogueValidator from '../utils/catalogue-validator';

const router = Router();
/**
 * @swagger
 *  components:
 *      schemas:
 *          Country:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Country
 *                  description:
 *                      type: string
 *                      description: Describes the name of the Country
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the Country
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
 * /countries:
 *  post:
 *      summary: Service to create a new Country
 *      tags: [Country]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Country'
 *      responses:
 *          '201':
 *              description: Country Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Country'
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
 *              description: The Country already exists
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
    Country.create
)


/**
* @swagger
* /countries/{id}:
*  get:
*      summary: Service that provides a Country available
*      tags: [Country]
*      parameters:
*       - in : path
*         name: id
*         description: id of country
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Country got
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
*                                      $ref: '#/components/schemas/Country'
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
    Country.get
)

/**
* @swagger
* /countries:
*  get:
*      summary: Service that provides the list of country available
*      tags: [Country]
*      responses:
*          '200':
*              description: List of countries
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
*                                      $ref: '#/components/schemas/Country'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    '/',
    Country.getAll
)


/**
* @swagger
* /countries/{id}:
*  put:
*      summary: Service to update a Country
*      tags: [Country]
*      parameters:
*       - in : path
*         name: id
*         description: country id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Country'
*      responses:
*          '200':
*              description: Country updated
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
*                                      $ref: '#/components/schemas/Country'
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
    Country.update
)



/**
* @swagger
* /contries/{id}:
*  delete:
*      summary: Service to delete a Country
*      tags: [Country]
*      parameters:
*       - in : path
*         name: id
*         description: country id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Country deleted
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
*                                      $ref: '#/components/schemas/Country'
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
    Country.delete
)

export default router;