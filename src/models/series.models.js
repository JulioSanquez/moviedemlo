const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Series = db.define("series", {
  id:{
    type: DataTypes.UUID,
    primaryKey: true
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false
  } ,
  synopsis:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  release_year:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  director:{
    type: DataTypes.STRING,
    allowNull: false
  },
  clasification:{
    type: DataTypes.STRING,
    allowNull: false
  },
  rating:{
    type: DataTypes.DECIMAL
  }
});

module.exports = Series