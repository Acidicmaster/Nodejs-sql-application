'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,like}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId', as: 'user' })
      this.hasMany(like, { foreignKey: 'userId', as: 'likes' })
    }
    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined }
    }
  }
  Post.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    isliked:{
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
   
  });
  return Post;
};