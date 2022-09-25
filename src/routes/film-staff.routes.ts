import { Router } from "express";
import MiddlewareValidator from "../utils/validators";
import FilmStaffController from "../controllers/film-staff/film-staff.controller";
import filmStaffValidator from "../utils/film-staff-validator";

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          FilmStaff:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: represents the ID of the Film Staff
 *                  filmId:
 *                      type: string
 *                      description: Describes the id of the Film 
 *                  staffId:
 *                      type: boolean
 *                      description: Describe the id  of the staff
 *              required:
 *                  - filmId
 *                  - staffId
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
 * /film-staffs:
 *  post:
 *      summary: Service to create a new Film Staff
 *      tags: [FilmStaff]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FilmStaff'
 *      responses:
 *          '201':
 *              description: Film Staff  Created
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/FilmStaff'
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
 *              description: The Film Staff  already exists
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'  
 *                                  
 */


router.post(
  "/",
  filmStaffValidator.checkCreate(),
  MiddlewareValidator.handleValidationError,
  FilmStaffController.create
);


/**
* @swagger
* /film-staffs/{name}:
*  get:
*      summary: Service that provides a Film Staff  available
*      tags: [FilmStaff]
*      parameters:
*       - in : path
*         name: id
*         description: id of film staff 
*         schema:
*           type: integer
*         required: true
*      responses:
*          '200':
*              description: Film Staff got
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
*                                      $ref: '#/components/schemas/FilmStaff'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/

router.get(
    "/:name",
    filmStaffValidator.checkGet(),
    MiddlewareValidator.handleValidationError,
    FilmStaffController.getFilmStaff
  );

export default router;
