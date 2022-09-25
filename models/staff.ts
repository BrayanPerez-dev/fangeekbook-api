import { Model, Sequelize } from "sequelize";

export interface iAttributesStaff{
  id?: number;
  staff_type?: number;
  name?:string;
  birthDate?: Date;
  gender?:boolean;
  bio?:string;
  status?: boolean;
}

export interface iInstanceStaff{
  id?: number;
  staff_type?: number;
  name?:string;
  birthDate?: Date;
  gender?:boolean;
  bio?:string;
  status?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class Staff extends Model<iAttributesStaff,iInstanceStaff> implements iAttributesStaff {
    id!: number;
    staff_type!: number;
    name!: string;
    birthDate!: Date;
    gender!: boolean;
    bio!: string;
    status!: boolean;

    static associate(models:any) {
      Staff.belongsTo(models.StaffType, {foreignKey: {name:'staff_type', allowNull: false}});
      Staff.belongsToMany(models.Film, {through: models.FilmStaff})
    }
  }
  Staff.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    staff_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'staff_type'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    birthDate:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bio:{
      type: DataTypes.STRING(1500),
      allowNull: false
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Staff',
    freezeTableName: true,
    tableName: 'staff',
    underscored: true
  });
  return Staff;
};