import { Model, Sequelize } from "sequelize";

export interface iAttributesUser{
  id?: number;
  user_type?:number;
  fullName?:string,
  nickName?:string,
  email?:string;
  picture?:string;
  hash?:string;
  salt?: string;
  status?: boolean;
}

export interface iInstanceUser{
  id?: number;
  user_type?:number;
  fullName?:string,
  nickName?:string,
  email?:string;
  picture?:string;
  hash?:string;
  salt?: string;
  status?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class User extends Model<iAttributesUser,iInstanceUser> implements iAttributesUser {
    id!: number;
    user_type!: number;
    fullName!: string;
    nickName!: string;
    email!: string;
    picture!: string;
    hash!: string;
    salt!: string;
    status!: boolean;
    
    static associate(models:any) {
      User.belongsTo(models.UserType, {foreignKey: {name:'user_type', allowNull: false}});
      User.hasMany(models.FilmFeedback, {foreignKey: {name:'user_id', allowNull: false}})
    }
  }
  
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'user_type'
    },
    fullName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nickName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
  }
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    tableName: 'user',
    underscored: true
  });
  return User;
};