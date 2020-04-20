console.log("load noun model within models folder via index.js");

module.exports = function(sequelize, DataTypes) {
    var Noun = sequelize.define("Noun", {
        singular: DataTypes.STRING,
        plural: DataTypes.STRING,
        english: DataTypes.STRING,
        person: DataTypes.BOOLEAN,
        animal: DataTypes.BOOLEAN,
        thing: DataTypes.BOOLEAN,
        place: DataTypes.BOOLEAN,
        abstract: DataTypes.BOOLEAN,
        athome: DataTypes.BOOLEAN,
        atwork: DataTypes.BOOLEAN,
        dining: DataTypes.BOOLEAN,
        hotel: DataTypes.BOOLEAN,
        travel: DataTypes.BOOLEAN,
        people: DataTypes.BOOLEAN,
        events: DataTypes.BOOLEAN,
        shopping: DataTypes.BOOLEAN
    });

  
    return Noun;
  };
