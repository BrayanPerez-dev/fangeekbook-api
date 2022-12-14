import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue'
import { iImage } from '../src/interfaces/iImage';

export interface iFranchiseAttributes extends iCatalogueAttributes, iImage {}
export interface iFranchiseInstance extends iCatalogueInstance, iImage {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Franchise extends Model<iFranchiseAttributes, iFranchiseInstance> implements iFranchiseAttributes{
    id!: number;
    description!: string;
    status!: boolean;
    url_image!: string;

    static associate = (models: any) => {
      Franchise.belongsToMany(models.Film, {through: models.Saga})
    }
  }
  Franchise.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'url_image'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Franchise',
    freezeTableName: true,
    tableName: 'franchise',
    underscored: true
  });
  return Franchise;
};
