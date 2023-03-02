const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Movies = db.define("movies", {
  id:{
    type: DataTypes.UUID,
    primaryKey: true
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false
  },
  synopsis:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  releaseYear:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  director:{
    type: DataTypes.STRING,
    allowNull: false
  },
  duration:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  thrillerUrl:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  coverUrl:{
    type: DataTypes.STRING,
    allowNull: false
  },
  movieUrl:{
    type: DataTypes.STRING,
     allowNull: false
  },
  classification:{
    type: DataTypes.STRING,
    allowNull: false
  },
  rating:{
    type: DataTypes.DECIMAL,
    defaultValue: 0.0
  }
});

module.exports = Movies