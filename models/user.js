'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post,like,follow}) {
      // define association here
      this.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
      this.hasMany(like, { foreignKey: 'userId', as: 'likes' });
     // this.hasMany(follow, { foreignKey: 'userId', as: 'followerId' });
     // this.hasMany(follow, { foreignKey: 'userId', as: 'follows' });
    }
    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {isEmail: true}
    },
    password: {
      type: DataTypes.STRING,
      minlength: [8, "Password should be 8 character long"],
      required: [true, "Please add a password"],
      select: false,
    },
    fullname:{
      type: DataTypes.STRING,
      allowNull: false
     
    },
    profile_picture:{
      type: DataTypes.STRING,
     
    },
    bio:{
      type: DataTypes.STRING,
     
    },
    followed:{
      type: DataTypes.BOOLEAN,
     
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};