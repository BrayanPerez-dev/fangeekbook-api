import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import SagaController from "../controllers/saga/saga.controller";
import sagaValidator from "../utils/saga-validator";

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          Saga:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Saga
 *                  filmId:
 *                      type: number
 *                      description: Describes the id of the Film 
 *                  franchiseId:
 *                      type: number
 *                      description: Describe the id  of the celebrity
 *              required:
 *                  - filmId
 *                  - franchiseId
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
 * /sagas:
 *  post:
 *      summary: Service to create a new Saga
 *      tags: [Saga]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Saga'
 *      responses:
 *          '201':
 *              description: Saga  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Saga'
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
 *              description: The Saga  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    "/",
    sagaValidator.checkCreate(),
    MiddlewareValidator.handleValidationError,
    SagaController.create
  );





/**
* @swagger
* /sagas/{id}:
*  get:
*      summary: Service that provides a Saga  available
*      tags: [Saga]
*      parameters:
*       - in : path
*         name: id
*         description: id of saga 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Saga got
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
*                                      $ref: '#/components/schemas/Saga'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    "/:id",
    sagaValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    SagaController.get
  );

  export default router