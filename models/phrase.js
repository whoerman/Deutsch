console.log("load phrase model within models folder via index.js");

//Define an Phrase model, representing a table in the database via sequelize.define

module.exports = function(sequelize, DataTypes) {
    var Phrase = sequelize.define("Phrase", {
        germanphrase: DataTypes.STRING,
        englishphrase: DataTypes.STRING,
        englishphrase2: DataTypes.STRING,
        athome: DataTypes.BOOLEAN,
        atwork: DataTypes.BOOLEAN,
        dining: DataTypes.BOOLEAN,
        hotel: DataTypes.BOOLEAN,
        travel: DataTypes.BOOLEAN,
        people: DataTypes.BOOLEAN,
        events: DataTypes.BOOLEAN,
        shopping: DataTypes.BOOLEAN
    });
  
    return Phrase;
  };
