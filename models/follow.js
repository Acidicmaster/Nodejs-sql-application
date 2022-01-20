'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'followerId', as: 'user' });
      this.belongsTo(User, { foreignKey: 'followingId', as: 'user1' })
   

    }  toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  follow.init({
    createdAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'follow',
    tableName: 'follows'
  });
  return follow;
};