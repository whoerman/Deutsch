console.log("load regular verb model within models folder via index.js");

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
