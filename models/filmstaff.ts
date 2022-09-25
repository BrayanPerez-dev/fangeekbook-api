import { Model, Sequelize } from "sequelize";

export interface iAttributesFilmStaff{
  id?:number;
  filmId?:number;
  staffId?:number;
}

export interface iInstanceFilmStaff{
  id?:number;
  filmId?:number;
  staffId?:number;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmStaff extends Model<iAttributesFilmStaff,iInstanceFilmStaff> implements iAttributesFilmStaff {
    id?: number;
    filmId?: number;
    staffId?: number;
    
    static associate(models:any) {
      // define association here
    }
  }
  FilmStaff.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filmId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id',
      references: {
        model: 'Film', 
        key: 'id'
      }
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'staff_id',
      references: {
        model: 'Staff', 
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'FilmStaff',
    freezeTableName: true,
    tableName: 'film_staff',
    underscored: true
  });
  return FilmStaff;
};