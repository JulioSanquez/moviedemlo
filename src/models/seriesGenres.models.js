const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const SerieGenres = db.define("seriesGenres", {
  id:{
    type: DataTypes.UUID,
    primaryKey: true
  },
  seriesId:{
    type: DataTypes.UUID,
    allowNull: false
  },
  genreId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = SerieGenres