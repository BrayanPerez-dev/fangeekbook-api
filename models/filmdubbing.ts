import { Model, Sequelize } from "sequelize";


  
export interface iAttributesFilmDubbing{
  id:number;
  film_id:number;
  language_id:number;
  country_id:number;
  studioName:string;
}

export interface iInstanceFilmDubbing{
  id:number;
  film_id:number;
  language_id:number;
  country_id:number;
  studioName:string;
  createdAt: Date;
  updatedAt: Date;
}
module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmDubbing extends Model<iAttributesFilmDubbing,iInstanceFilmDubbing> implements iAttributesFilmDubbing {
    id!: number;
    film_id!: number;
    language_id!: number;
    country_id!: number;
    studioName!: string;
    static associate(models:any) {
      FilmDubbing.belongsTo(models.FilmLanguage, {foreignKey: {name: 'language_id', allowNull: false}});
      FilmDubbing.belongsTo(models.Country, {foreignKey: {name: 'country_id', allowNull: false}});
      FilmDubbing.belongsTo(models.Film, {foreignKey: {name: 'film_id', allowNull: false}});

    }
  }
  FilmDubbing.init({
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
    language_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'language_id'
    },
    country_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'country_id'
    },
    studioName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'FilmDubbing',
    freezeTableName:true,
    tableName:'film_dubbing',
    underscored:true
  });
  return FilmDubbing;
};