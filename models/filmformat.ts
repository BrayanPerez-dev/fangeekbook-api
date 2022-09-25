import { Model, Sequelize } from "sequelize";

export interface iFilmFormatAttributes {
  id?: number;
  filmId?:number;
  filmFormatTypeId?:number;
  releaseDate?:Date;
}

export interface iFilmInstance {
  id?: number;
  filmId?:number;
  filmFormatTypeId?:number;
  releaseDate?:Date;
  createdAt: Date;
  updatedAt: Date;
}
module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmFormat extends Model<iFilmFormatAttributes,iFilmInstance> implements iFilmFormatAttributes {
    id?: number;
    filmId?:number;
    filmFormatTypeId?:number;
    releaseDate?:Date;
    static associate(models:any) {
      // define association here
    }
  }
  FilmFormat.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id',
      references: {
        model: 'Film', 
        key: 'id'
      }
    },
    filmFormatTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_format_type_id',
      references: {
        model: 'FilmFormatType', 
        key: 'id'
      }

    },
    releaseDate:{
      type: DataTypes.DATE(),
      allowNull: false,
      field:'release_date'
    },
  }, {
    sequelize,
    modelName: 'FilmFormat',
    freezeTableName: true,
    tableName: 'film_format',
    underscored: true
  });
  return FilmFormat;
};