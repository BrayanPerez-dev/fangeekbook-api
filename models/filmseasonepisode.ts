import { Model, Sequelize } from "sequelize";

export interface iFilmSeasonEpisodeAttributes{
  id?: number;
  filmSeasonId?:number;
  name?:string;
  description?:string;
  runTime?:string
  releaseDate?:Date;
}


export interface iFilmSeasonEpisodeInstance{
  id?: number;
  filmSeasonId?:number;
  name?:string;
  description?:string;
  runTime?:string
  releaseDate?:Date;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmSeasonEpisode extends Model<iFilmSeasonEpisodeAttributes,iFilmSeasonEpisodeInstance> implements iFilmSeasonEpisodeAttributes {
    id!: number;
    filmSeasonId!: number;
    name!: string;
    description!: string;
    runTime!: string;
    releaseDate!: Date;
    static associate(models:any) {
    FilmSeasonEpisode.belongsTo(models.FilmSeason, {foreignKey: {name: 'film_season_id', allowNull: false}});
    }
  }
  FilmSeasonEpisode.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filmSeasonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_season_id'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    runTime: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    releaseDate: {
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'FilmSeasonEpisode',
    freezeTableName: true,
    tableName: 'film_season_episode',
    underscored: true
  });
  return FilmSeasonEpisode;
};