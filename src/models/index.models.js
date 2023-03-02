const Episodes = require("./episodes.models")
const Genres = require("./genres.models")
const MovieGenres = require("./movieGenres.models")
const Movies = require("./movies.models")
const Seasons = require("./seasons.models")
const SeriesGenres = require("./seriesGenres.models")
const Series = require("./series.models")
const Users = require("./users.models")

const initModels = () => {
    Users

    // Genres.hasMany( MovieGenres, { sourceKey: 'id', foreignKey: 'genreId' } )
    // MovieGenres.belongsTo( Genres, { targetKey: 'id', foreignKey: 'genreId' } )

    // Movies.hasMany( MovieGenres, { sourceKey: 'id', foreignKey: 'movieId' } )
    // MovieGenres.belongsTo( Movies, { targetKey: 'id', foreignKey: 'movieId' } )

    // Genres.hasMany( SeriesGenres, { sourceKey: 'id', foreignKey: 'genreId' } )
    // SeriesGenres.belongsTo( Genres, { targetKey: 'id', foreignKey: 'genreId' } )

    // Series.hasMany( SeriesGenres, { sourceKey: 'id', foreignKey: 'serieId' } )
    // SeriesGenres.belongsTo( Series, { targetKey: 'id', foreignKey: 'serieId' } )

    Movies.belongsToMany( Genres, { through: MovieGenres, foreignKey: 'movieId', sourceKey: 'id', targetKey: 'id' } )
    Genres.belongsToMany( Movies, { through: MovieGenres, foreignKey: 'genreId', sourceKey: 'id', targetKey: 'id' } )


    Series.belongsToMany( Genres, {through: SeriesGenres, foreignKey: 'seriesId', sourceKey: 'id', targetKey: 'id' } )
    Genres.belongsToMany( Series, {through: SeriesGenres, foreignKey: 'genreId', sourceKey: 'id', targetKey: 'id' } )

    Series.hasMany( Seasons, { sourceKey: 'id', foreignKey: 'seriesId' } )
    Seasons.belongsTo( Series, { targetKey: 'id', foreignKey: 'seriesId' } )

    Seasons.hasMany( Episodes, { sourceKey: 'id', foreignKey: 'seasonId' } )
    Episodes.belongsTo( Seasons, { targetKey: 'id', foreignKey: 'seasonId' } )
}

module.exports = {
    Episodes,
    Genres,
    MovieGenres,
    Movies,
    Seasons,
    SeriesGenres,
    Series,
    Users,
    initModels
}