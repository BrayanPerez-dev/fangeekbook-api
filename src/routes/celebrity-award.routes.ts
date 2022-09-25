import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import CelebrityAwardController from "../controllers/celebrity-award/celebrity-award.controller";
import celebrityAwardValidator from "../utils/celebrity-award-validator";

const router = Router();



/**
 * @swagger
 *  components:
 *      schemas:
 *          CelebrityAward:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Celebrity Award
 *                  filmId:
 *                      type: number
 *                      description: Describes the id of the Film 
 *                  celebrityId:
 *                      type: number
 *                      description: Describe the id  of the celebrity
 *                  celebrityRoleId:
 *                      type: number
 *                      description: Describe the  role id  of the celebrity
 *                  winner:
 *                      type: number
 *                      description: Describe the winner of celebrity award
 *              required:
 *                  - filmId
 *                  - staffId
 *                  - celebrityId
 *                  - celebrityRoleId
 *                  - winner
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
 * /celebrity-awards:
 *  post:
 *      summary: Service to create a new Celebrity Award
 *      tags: [CelebrityAward]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CelebrityAward'
 *      responses:
 *          '201':
 *              description: Film Staff  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/CelebrityAward'
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
 *              description: The Celebrity Award  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
    "/",
    celebrityAwardValidator.checkCreate(),
    MiddlewareValidator.handleValidationError,
    CelebrityAwardController.create
  );

  
/**
* @swagger
* /celebrity-awards/{id}:
*  get:
*      summary: Service that provides a Celebrity Award  available
*      tags: [CelebrityAward]
*      parameters:
*       - in : path
*         name: id
*         description: id of celebrity award 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Celebrity Award got
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
*                                      $ref: '#/components/schemas/CelebrityAward'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    "/:id",
    celebrityAwardValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    CelebrityAwardController.get
  );



export default router