import { Model, Sequelize } from "sequelize";


export interface iAttributesFilmFeedback{
  id?:number;
  film_id?:number;
  user_id?:number;
  feedback?:string;
  rate?:number;
}

export interface iInstanceFilmFeedback{
  id?:number;
  film_id?:number;
  user_id?:number;
  feedback?:string;
  rate?:number;
  createdAt: Date;
  updatedAt: Date;
}


module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmFeedback extends Model<iAttributesFilmFeedback,iInstanceFilmFeedback> implements iAttributesFilmFeedback{
    id!: number;
    film_id!: number;
    user_id!: number;
    feedback!: string;
    rate!: number;
    static associate(models:any) {
      FilmFeedback.belongsTo(models.User, {foreignKey: {name:'user_id', allowNull: false}});
      FilmFeedback.belongsTo(models.Film, {foreignKey: {name:'film_id', allowNull: false}});
    }
  }
  FilmFeedback.init({
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'user_id'
    },
    feedback: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    rate:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'FilmFeedback',
    freezeTableName: true,
    tableName: 'film_feedback',
    underscored: true
  });
  return FilmFeedback;
};