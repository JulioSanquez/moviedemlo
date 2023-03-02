const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Episodes = db.define("episodes", {
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
  seasonId:{
    type: DataTypes.UUID,
    allowNull: false
  },
  episodeNumber:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  duration:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  episodeUrl:{
    type: DataTypes.STRING,
    allowNull: false
  },
  coverUrl:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Episodes