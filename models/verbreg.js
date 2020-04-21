console.log("load regular verb model within models folder via index.js");

//Define an Verbreg model, representing a table in the database via sequelize.define

module.exports = function(sequelize, DataTypes) {
    var Verbreg = sequelize.define("Verbreg", {
        germanverb: DataTypes.STRING,
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

    return Verbreg;
  };
