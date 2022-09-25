import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import UserController from "../controllers/user/user.controller";
import userValidator from "../utils/user-validator";

const router = Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the User
 *                  userType:
 *                      type: number
 *                      description: represents the user type id of the User
 *                  fullName:
 *                      type: string
 *                      description: Describes the full name of the User
 *                  nickName:
 *                      type: string
 *                      description: Describes the nick name of the User
 *                  email:
 *                      type: string
 *                      description: Describes the email of the User
 *                  picture:
 *                      type: string
 *                      description: Describes the picture of the User
 *                  hash:
 *                      type: string
 *                      description: Describes the hash of the User
 *                  salt:
 *                      type: string
 *                      description: Describes the salt of the User
 *                  status:
 *                      type: boolean
 *                      description: Describe the status of the User 
 *              required:
 *                  - fullName
 *                  - nickName
 *                  - email
 *                  - picture
 *                  - hash
 *                  - salt
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
 * /users:
 *  post:
 *      summary: Service to create a new User
 *      tags: [User]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          '201':
 *              description: User Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/User'
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
 *              description: The User already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */

router.post(
  "/",
  userValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  UserController.create
);


/**
* @swagger
* /users/{id}:
*  get:
*      summary: Service that provides a User  available
*      tags: [User]
*      parameters:
*       - in : path
*         name: id
*         description: id of user
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: User got
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
*                                      $ref: '#/components/schemas/User'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
  "/:id",
  userValidator.checkGet(),
  MiddlewareValidator.handleValidationError,
  UserController.get
);



/**
* @swagger
* /users:
*  get:
*      summary: Service that provides the list of Users available
*      tags: [User]
*      responses:
*          '200':
*              description: List of users
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
*                                      $ref: '#/components/schemas/User'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.get("/", UserController.getAll);


/**
* @swagger
* /users/{id}:
*  put:
*      summary: Service to update a User
*      tags: [User]
*      parameters:
*       - in : path
*         name: id
*         description: user  id
*         schema:
*           type: integer
*         required: true
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/User'
*      responses:
*          '200':
*              description: User updated
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
*                                      $ref: '#/components/schemas/User'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.put(
  "/:id",
  userValidator.checkUpdate(),
  MiddlewareValidator.handleValidationError,
  UserController.update
);



/**
* @swagger
* /users/{id}:
*  delete:
*      summary: Service to delete a User 
*      tags: [User]
*      parameters:
*       - in : path
*         name: id
*         description: user id
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: User deleted
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
*                                      $ref: '#/components/schemas/User'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/


router.delete(
  "/:id",
  userValidator.checkDelete(),
  MiddlewareValidator.handleValidationError,
  UserController.delete
);

export default router;
