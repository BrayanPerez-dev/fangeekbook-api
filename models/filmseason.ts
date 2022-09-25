import { Model, Sequelize } from "sequelize";
import { iImage } from "../src/interfaces/iImage";

export interface iFilmSeasonAttributes extends iImage{
  id?: number;
  filmId?:number;
  name?:string;
  description?:string;
  firstEmision?:Date;
  lastEmision?:Date;
}

export interface iFilmSeasonInstance extends iImage{
  id?: number;
  filmId?:number;
  name?:string;
  description?:string;
  firstEmision?:Date;
  lastEmision?:Date;
  createdAt: Date;
  updatedAt: Date;
}
module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmSeason extends Model<iFilmSeasonAttributes,iFilmSeasonInstance> implements iFilmSeasonAttributes {
    id!: number;
    filmId!: number;
    name!: string;
    description!: string;
    firstEmision!: Date;
    lastEmision!: Date;
    url_image!: string;
    
    static associate(models:any) {
      FilmSeason.hasMany(models.FilmSeasonEpisode, {foreignKey: {name: 'film_season_id', allowNull: false}});
      FilmSeason.belongsTo(models.Film, {foreignKey: {name: 'film_id', allowNull: false}});
    }
  }
  FilmSeason.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filmId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    description:{
      type: DataTypes.STRING(150),
      allowNull: false
    },
    firstEmision: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lastEmision: {
      type: DataTypes.DATE,
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'FilmSeason',
    freezeTableName: true,
    tableName: 'film_season',
    underscored: true
  });
  return FilmSeason;
};