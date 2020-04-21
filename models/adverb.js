console.log("load adverb model with models folder via index.js");

//Define an Adverb model, representing a table in the database via sequelize.define

module.exports = function(sequelize, DataTypes) {
    var Adverb = sequelize.define("Adverb", {
        germanadverb: DataTypes.STRING,
        englishdefinition: DataTypes.STRING,
        type: DataTypes.STRING,
        athome: DataTypes.BOOLEAN,
        atwork: DataTypes.BOOLEAN,
        dining: DataTypes.BOOLEAN,
        hotel: DataTypes.BOOLEAN,
        travel: DataTypes.BOOLEAN,
        people: DataTypes.BOOLEAN,
        events: DataTypes.BOOLEAN,
        shopping: DataTypes.BOOLEAN
    });

  
    return Adverb;
  };
