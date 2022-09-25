import { Model, Sequelize } from "sequelize";

export interface iAttributesCelebrityPicture{
  id?:number;
  celebrity_id?:number;
  url?:string;
  description?:string;
  type?:string;
}

export interface iInstanceCelebrityPicture{
  id?:number;
  celebrity_id?:number;
  url?:string;
  description?:string;
  type?:string;
  createdAt: Date;
  updatedAt: Date;
}


module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class CelebrityPicture extends Model<iAttributesCelebrityPicture,iInstanceCelebrityPicture> implements iAttributesCelebrityPicture {
    id!: number;
    celebrity_id!: number;
    url!: string;
    description!: string;
    type!: string;
    static associate(models:any) {
      CelebrityPicture.belongsTo(models.Celebrity,{foreignKey:{name:'celebrity_id',allowNull:false}})
    }
  }
  CelebrityPicture.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    celebrity_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'celebrity_id'
    },
    url:{
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    type: {
      type: DataTypes.CHAR(5),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CelebrityPicture',
    freezeTableName:true,
    tableName:'celebrity_picture',
    underscored:true
  });
  return CelebrityPicture;
};