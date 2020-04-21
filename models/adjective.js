console.log("load adjective model within models folder via index.js");

//Define an Adjective model, representing a table in the database via sequelize.define

module.exports = function(sequelize, DataTypes) {
    var Adjective = sequelize.define("Adjective", {
        germanadjective: DataTypes.STRING,
        englishdefinition: DataTypes.STRING,
        athome: DataTypes.BOOLEAN,
        atwork: DataTypes.BOOLEAN,
        dining: DataTypes.BOOLEAN,
        hotel: DataTypes.BOOLEAN,
        travel: DataTypes.BOOLEAN,
        people: DataTypes.BOOLEAN,
        events: DataTypes.BOOLEAN,
        shopping: DataTypes.BOOLEAN
    });

    return Adjective; 
  };
