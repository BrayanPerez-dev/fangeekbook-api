import { Model, Sequelize } from "sequelize";

export interface iAttributesFilmPicture{
  id?:number;
  film_id?:number;
  url?:string;
  description?:string;
  type?:string;
}

export interface iInstanceFilmPicture{
  id?:number;
  film_id?:number;
  url?:string;
  description?:string;
  type?:string;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmPicture extends Model<iAttributesFilmPicture,iInstanceFilmPicture> implements iAttributesFilmPicture {
    id!: number;
    film_id!: number;
    url!: string;
    description!: string;
    type!: string;
    static associate(models:any) {
    FilmPicture.belongsTo(models.Film, {foreignKey: {name: 'film_id', allowNull: false}});
    }
  }
  FilmPicture.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id'
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    type: {
      type: DataTypes.CHAR(5),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'FilmPicture',
    freezeTableName:true,
    tableName:'film_picture',
    underscored:true
  });
  return FilmPicture;
};