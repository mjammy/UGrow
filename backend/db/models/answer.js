'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.STRING,
    private: DataTypes.BOOLEAN
  })

  Answer.associate = function(models) {
    models.Answer.belongsTo(models.Question, {
      onDelete: "CASCADE",
      forgeinKey: {
        allowNull: false
      }
    })
  }

  return Answer;
};