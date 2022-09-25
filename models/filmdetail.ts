import { Model, Sequelize } from "sequelize";

export interface iFilmDetailAttributes{
  id?: number;
  filmId?:number;
  totalSeasons?:number;
  totalEpisodes?:number;
  endDate?:Date;    
}


export interface iFilmDetailInstance{
  id?: number;
  filmId?:number;
  totalSeasons?:number;
  totalEpisodes?:number;
  endDate?:Date;    
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmDetail extends Model<iFilmDetailAttributes,iFilmDetailInstance> implements iFilmDetailAttributes {
    id!: number;
    filmId!: number;
    totalSeasons!: number;
    totalEpisodes!: number;
    endDate!: Date;
    
    static associate(models:any) {
      FilmDetail.belongsTo(models.Film, {foreignKey: {name: 'film_id', allowNull: false}});
    }
  }
  FilmDetail.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id'
    },
    totalSeasons:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalEpisodes:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endDate:{
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'FilmDetail',
    freezeTableName: true,
    tableName: 'film_detail',
    underscored: true
  });
  return FilmDetail;
};