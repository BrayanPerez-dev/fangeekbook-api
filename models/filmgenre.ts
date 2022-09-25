import { Model,Sequelize } from "sequelize";

export interface iAttributesFilmGenre{
  id?:number;
  film_id?:number;
  film_genre_type_id?:number;
}

export interface iInstanceFilmGenre{
  id?:number;
  film_id?:number;
  filmGenreTypeId?:number;
  createdAt: Date;
  updatedAt: Date;
}


module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmGenre extends Model<iAttributesFilmGenre,iInstanceFilmGenre> implements iAttributesFilmGenre {
    id!: number;
    film_id!: number;
    film_genre_type_id!: number;
    static associate(models:any) {
      FilmGenre.belongsTo(models.FilmGenreType, {foreignKey: {name:'film_genre_type_id', allowNull: false}});
      FilmGenre.belongsTo(models.Film, {foreignKey: {name:'film_id', allowNull: false}});
    }
  }
  FilmGenre.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    film_id:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id'
    },
    film_genre_type_id:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_genre_type_id'
    },
  }, {
    sequelize,
    modelName: 'FilmGenre',
    freezeTableName: true,
    tableName: 'film_genre',
    underscored: true
  });
  return FilmGenre;
};