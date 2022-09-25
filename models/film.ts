import {Sequelize, Model} from 'sequelize';

export interface iFilmAttributes {
  id?: number;
  category?: number;
  genre_type?: number;
  original_language?: number;
  recording_country?: number;
  rating_id?: number;
  distributor_id?: number;
  runtime?: number;
  budget?: number;
  sinopsis?: string;
  boxOffice?: number;
  rate?: number;
  trailerUrl?: string;
  releaseDate?: Date;
  status?: boolean
}

export interface iFilmInstance {
  id?: number;
  category?: number;
  genre_type?: number;
  original_language?: number;
  recording_country?: number;
  rating_id?: number;
  distributor_id?: number;
  runtime?: number;
  budget?: number;
  sinopsis?: string;
  boxOffice?: number;
  rate?: number;
  trailerUrl?: string;
  releaseDate?: Date;
  status?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Film extends Model<iFilmAttributes, iFilmInstance> implements iFilmAttributes{
    id!: number;
    category!: number;
    genre_type?: number;
    original_language?: number;
    recording_country?: number;
    rating_id?: number;
    distributor_id?: number;
    runtime!: number;
    budget!: number;
    sinopsis!: string;
    boxOffice!: number;
    rate!: number;
    trailerUrl!: string;
    releaseDate!: Date;
    status!: boolean

    static associate = (models: any) => {
      Film.belongsTo(models.FilmGenreType, {foreignKey: {name:'genre_type', allowNull: false}});
      Film.belongsTo(models.FilmCategory, {foreignKey: {name:'category', allowNull: false}});
      Film.belongsTo(models.Country, {foreignKey: {name:'recording_country', allowNull: false}});
      Film.belongsTo(models.FilmLanguage, {foreignKey: {name:'original_language', allowNull: false}});
      Film.belongsTo(models.FilmRating, {foreignKey: {name:'rating_id', allowNull: false}});
      Film.belongsTo(models.Distributor, {foreignKey: {name: 'distributor_id', allowNull: false}});
      Film.belongsToMany(models.FilmFormatType, {through: models.FilmFormat})
      Film.belongsToMany(models.FilmSong, {through: models.FilmSoundtrack})
      Film.belongsToMany(models.Franchise, {through: models.Saga})
      Film.belongsToMany(models.Staff, {through: models.FilmStaff})
      Film.belongsToMany(models.Celebrity, {through: models.FilmCasting})
      Film.hasMany(models.FilmDetail, {foreignKey: {name: 'film_id', allowNull: false}});
      Film.hasMany(models.FilmSeason, {foreignKey: {name: 'film_id', allowNull: false}});
      Film.hasMany(models.FilmPicture, {foreignKey: {name: 'film_id', allowNull: false}});
      Film.hasMany(models.FilmDubbing, {foreignKey: {name:'film_id', allowNull: false}})
      Film.hasMany(models.FilmFeedback, {foreignKey: {name:'film_id', allowNull: false}})
      Film.hasMany(models.CelebrityAward, {foreignKey: {name:'film_id', allowNull: false}})
      Film.belongsToMany(models.AwardCategory, {through: models.FilmAward})
      Film.belongsToMany(models.AwardType, {through: models.FilmAward})
    }
  }
  Film.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    category: {type: DataTypes.INTEGER, field: 'category', allowNull: false},
    genre_type: {type: DataTypes.INTEGER, field: 'genre_type', allowNull: false},
    original_language: {type: DataTypes.INTEGER, field: 'original_language', allowNull: false},
    recording_country: {type: DataTypes.INTEGER, field: 'recording_country', allowNull: false},
    rating_id: {type: DataTypes.INTEGER, field: 'rating_id', allowNull: false},
    distributor_id: {type: DataTypes.INTEGER, field: 'distributor_id', allowNull: false},
    runtime: {type: DataTypes.INTEGER, allowNull: true},
    budget: {type: DataTypes.DECIMAL(18,2), allowNull: true},
    sinopsis: {type: DataTypes.TEXT, allowNull: true},
    boxOffice: {type: DataTypes.DECIMAL(18,2), allowNull: true},
    rate: {type: DataTypes.INTEGER, allowNull: true},
    trailerUrl: {type: DataTypes.STRING(120), allowNull: true},
    releaseDate: {type: DataTypes.DATEONLY, allowNull: true},
    status: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: true}
  }, {
    sequelize,
    modelName: 'Film',
    freezeTableName: true,
    tableName: 'film',
    underscored: true
  });
  return Film;
};