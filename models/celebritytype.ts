import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue'

export interface celebrity_type {
  celebrityId:number
}

export interface iCelebrityTypeAttributes extends iCatalogueAttributes{
  celebrityId?:number;

}
export interface iCelebrityTypeInstance  extends iCatalogueInstance{
  celebrityId?:number;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class CelebrityType extends Model<iCelebrityTypeAttributes, iCelebrityTypeInstance> implements iCelebrityTypeAttributes{
    id!: number;
    celebrityId!: number;
    description!: string;
    status!: boolean

    static associate = (models: any) => {
      CelebrityType.belongsTo(models.Celebrity,{foreignKey:{name:'celebrity_id',allowNull:false}})
    }
  }
  CelebrityType.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    celebrityId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'celebrity_id'
    },
    description: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'CelebrityType',
    freezeTableName: true,
    tableName: 'celebrity_type',
    underscored: true
  });
  return CelebrityType;
};
