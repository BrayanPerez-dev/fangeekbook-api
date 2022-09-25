import { Model, Sequelize } from "sequelize";

export interface iCelebrityAttributes{
  id?: number;
  fullName?:string,
  nickName?:string,
  birthDate?:Date,
  birth_country?:number;
  birthPlace?:string;
  bio?:string;
  gender?:boolean;
  status?: boolean;
}


export interface iCelebrityInstance{
  id?: number;
  fullName?:string,
  nickName?:string,
  birthDate?:Date,
  birth_country?:number;
  birthPlace?:string;
  bio?:string;
  gender?:boolean;
  status?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class Celebrity extends Model<iCelebrityAttributes,iCelebrityInstance> implements iCelebrityAttributes {
    id!: number;
    fullName!: string;
    nickName!: string;
    birthDate!: Date;
    birth_country?:number;
    birthPlace!: string;
    bio!: string;
    gender!: boolean;
    status!: boolean;
    
    static associate(models:any) {
      Celebrity.hasMany(models.CelebrityType,{foreignKey:{name:'celebrity_id',allowNull:false}})
      Celebrity.hasMany(models.CelebrityPicture,{foreignKey:{name:'celebrity_id',allowNull:false}})
      Celebrity.belongsTo(models.Country, {foreignKey: {name:'birth_country', allowNull: false}});
      Celebrity.belongsToMany(models.Film, {through: models.FilmCasting})
      Celebrity.belongsToMany(models.CelebrityRole, {through: models.FilmCasting})
      Celebrity.belongsToMany(models.AwardType, {through: models.CelebrityAward})
      Celebrity.belongsToMany(models.AwardCategory, {through: models.CelebrityAward})
      Celebrity.belongsToMany(models.PerformanceType, {through: models.FilmCasting})

    }
  }
  Celebrity.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    nickName:  {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    birth_country: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    birthPlace: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bio:{
      type: DataTypes.STRING(1500),
      allowNull: false
    },
    gender:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Celebrity',
    freezeTableName: true,
    tableName: 'celebrity',
    underscored: true
  });
  return Celebrity;
};