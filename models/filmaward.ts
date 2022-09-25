import { Model, Sequelize } from "sequelize";

export interface iAttributesFilmAward{
  id?:number;
  film_id?:number;
  award_type_id?:number;
  award_category_id?:number;
  winner?:boolean;
}

export interface iInstanceFilmAward{
  id?:number;
  film_id?:number;
  award_type_id?:number;
  award_category_id?:number;
  winner?:boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmAward extends Model<iAttributesFilmAward,iInstanceFilmAward> implements  iAttributesFilmAward{
    id!: number;
    film_id!: number;
    award_type_id?:number;
    award_category_id?:number;
    winner!: boolean;
   
    static associate(models:any) {
    }
  }
  FilmAward.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id',
      references: {
        model: 'Film', 
        key: 'id'
      }
    },
    award_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'award_type_id',
      references: {
        model: 'award_type', 
        key: 'id'
      }
    },
    award_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'award_category_id',
      references: {
        model: 'award_category', 
        key: 'id'
      }
    },
    winner:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'FilmAward',
    freezeTableName:true,
    tableName:'film_award',
    underscored:true
  });
  return FilmAward;
};