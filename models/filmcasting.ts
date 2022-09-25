import { Model, Sequelize } from "sequelize";


export interface iAttributesFilmCasting{
  id?:number;
  filmId?:number;
  celebrityId?:number;
  celebrityRoleId?:number;
  performanceTypeId?:number;
  character?:string;
}

export interface iInstanceFilmCasting{
  id?:number;
  filmId?:number;
  celebrityId?:number;
  celebrityRoleId?:number;
  performanceTypeId?:number;
  character?:string;
  createdAt: Date;
  updatedAt: Date;
}


module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class FilmCasting extends Model<iAttributesFilmCasting,iInstanceFilmCasting> implements iAttributesFilmCasting {
    id!: number;
    filmId!: number;
    celebrityId!: number;
    celebrityRoleId!: number;
    performanceTypeId!: number;
    character!: string;
    static associate(models:any) {
    }
  }
  FilmCasting.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filmId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id',
      references: {
        model: 'Film', 
        key: 'id'
      }
    },
    celebrityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'celebrity_id',
      references: {
        model: 'Celebrity', 
        key: 'id'
      }
    },
    celebrityRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'celebrity_role_id',
      references: {
        model: 'CelebrityRole', 
        key: 'id'
      }
    },
    performanceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'performance_type_id',
      references: {
        model: 'PerformanceType', 
        key: 'id'
      }
    },
    character: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'FilmCasting',
    freezeTableName: true,
    tableName: 'film_casting',
    underscored: true
  });
  return FilmCasting;
};