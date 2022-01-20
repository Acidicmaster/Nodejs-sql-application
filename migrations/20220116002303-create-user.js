'use strict';
module.exports = {
  async up(queryInterface,  DataTypes) {
    await queryInterface.createTable('Users', {
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
       
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface,  DataTypes) {
    await queryInterface.dropTable('Users');
  }
};