console.log("load preposition model within models folder via index.js");

module.exports = function(sequelize, DataTypes) {
    var Preposition = sequelize.define("Preposition", {
        preposition: DataTypes.STRING,
        englishdefinition: DataTypes.STRING,
        prepositiontype: DataTypes.STRING,
        athome: DataTypes.BOOLEAN,
        atwork: DataTypes.BOOLEAN,
        dining: DataTypes.BOOLEAN,
        hotel: DataTypes.BOOLEAN,
        travel: DataTypes.BOOLEAN,
        people: DataTypes.BOOLEAN,
        events: DataTypes.BOOLEAN,
        shopping: DataTypes.BOOLEAN
    });

  
    return Preposition;
  };
