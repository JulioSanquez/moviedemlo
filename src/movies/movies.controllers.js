const {Op} = require('sequelize')
const { Movies, MovieGenres, Genres } = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4

const findAllMovies = async ( limit, offset ) => {
    // limit -> Cuantos quiero mostrar
    // offset -> Donde empiezo a mostrar
    // const queryOptions = {
    //     limit: limit || 20,
    //     offset: offset || 0
    // }

    // if( limit && offset ){
    //     queryOptions.limit = limit,
    //     queryOptions.offset = offset
    // }

    const data = await Movies.findAndCountAll()

    return data
}

const createMovie = async (movieObj) => {
    const newMovie = {
        id: uuid(),
        title: movieObj.title,
        synopsis : movieObj.synopsis,
        releaseYear: movieObj.releaseYear,
        director: movieObj.director,
        duration: movieObj.duration,
        thrillerUrl: movieObj.thrillerUrl,
        coverUrl: movieObj.coverUrl,
        movieUrl: movieObj.movieUrl,
        classification: movieObj.classification,
        rating: movieObj.rating
    }
    const data = await Movies.create(newMovie)
    
    return data
}

const createMovieGenres = async ( movieGenreObj  ) => {
    movieGenreObj.id = uuid()
    console.log(movieGenreObj)
    const data = await MovieGenres.create(movieGenreObj)

    return data
}

const findAllMoviesById = async ( genreId ) => {
    const data = await Movies.findAll({
        include:{
            model:Genres,
            where:{
                id:{
                    [Op.notIn]:[6, 1]
                }
            }
        }
    })

    return data
}

module.exports = {
    findAllMovies,
    createMovie,
    createMovieGenres,
    findAllMoviesById
}