import { Model, Sequelize } from "sequelize";


export interface iAttributesSaga{
  id?:number;
  franchiseId?:number;
  filmId?:number;
}

export interface iInstanceSaga{
  id?:number;
  franchiseId?:number;
  filmId?:number;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class Saga extends Model<iAttributesSaga,iInstanceSaga> implements iAttributesSaga {
    id!: number;
    franchiseId!: number;
    filmId!: number;
    static associate(models:any) {
      // define association here
    }
  }
  Saga.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    franchiseId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Franchise', 
        key: 'id'
      }
    },
    filmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Film', 
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Saga',
    freezeTableName:true,
    tableName:'saga',
    underscored:true
  });
  return Saga;
};