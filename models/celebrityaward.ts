import { Model, Sequelize } from "sequelize";


export interface iCelebrityAwardAttributes{
  id?:number;
  celebrityId?:number;
  filmId?:number;
  awardType?:number;
  awardCategory?:number;
  winner?:boolean;
}

export interface iCelebrityAwardInstance{
  id?:number;
  celebrityId?:number;
  filmId?:number;
  awardType?:number;
  awardCategory?:number;
  winner?:boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class CelebrityAward extends Model<iCelebrityAwardAttributes,iCelebrityAwardInstance> implements iCelebrityAwardAttributes {
    id!: number;
    celebrityId!: number;
    filmId!: number;
    awardType!: number;
    awardCategory!: number;
    winner!: boolean;
    
    static associate(models:any) {
      CelebrityAward.belongsTo(models.Film, {foreignKey: {name:'film_id', allowNull: false}})
    }
  }
  CelebrityAward.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
    filmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'film_id',
    },
    awardType:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'award_type_id',
      references:{
        model:'award_type',
        key:'id'
      }
    },
    awardCategory:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'award_category_id',
      references:{
        model:'award_category',
        key:'id'
      }
    },
    winner:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'CelebrityAward',
    freezeTableName:true,
    tableName:'celibrity_award',
    underscored:true
  });
  return CelebrityAward;
};