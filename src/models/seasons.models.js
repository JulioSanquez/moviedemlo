const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Seasons = db.define("seasons", {
    id:{
      type: DataTypes.UUID,
      primaryKey: true
    },
    seriesId:{
      type: DataTypes.UUID,
      allowNull: false
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false
    },
    seasonNumber:{
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    releaseYear:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coverUrl:{
      type: DataTypes.STRING,
      allowNull: false
    },
    traillerUrl:{
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Seasons