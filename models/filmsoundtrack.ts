import { Model, Sequelize } from "sequelize";


export interface iAttributesFilmSoundtrack{
  id?:number;
  filmId?:number;
  filmSongId?:number;
}

export interface iInstanceFilmSoundtrack{
  id?:number;
  filmId?:number;
  filmSongId?:number;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmSoundtrack extends Model<iAttributesFilmSoundtrack,iInstanceFilmSoundtrack> implements iAttributesFilmSoundtrack {
    id!: number;
    filmId!: number;
    filmSongId!: number;
    static associate(models:any) {
      // define association here
    }
  }
  FilmSoundtrack.init({
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
    filmSongId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_song_id',
      references: {
        model: 'FilmSong', 
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'FilmSoundtrack',
    freezeTableName:true,
    tableName:'film_soundtrack',
    underscored:true
  });
  return FilmSoundtrack;
};