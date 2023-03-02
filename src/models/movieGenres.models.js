const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const MovieGenres = db.define("movieGenres", {
    id:{
      type: DataTypes.UUID,
      primaryKey: true
    },
    movieId:{
      type: DataTypes.UUID,
      allowNull: false
    },
    genreId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
});

module.exports = MovieGenres