const movieControllers = require( './movies.controllers' )
const { error, success } = require( '../utils/handleResponses' )
const {addToMovieVideoFirebase} = require( '../utils/firebase' )
const { async } = require('@firebase/util')

const getAllMovies = ( req, res ) => {
    movieControllers.findAllMovies()
        .then( data => success({
            res,
            status: 200,
            data,
            message: 'Getting all movies'
        }) )
        .catch( err => error({
            res,
            data: err,
            message: 'Something bad getting all movies',
            status: 400
        }) )
}

const postMovie = async ( req, res ) => {
    const movieObj = req.body
    const movieVideoFlie = req.file
    // const movieVideoFlie = req.files.movieVideo[0]
    // const movieCoverFlie = req.files.movieCover[0]
    // const movieThrillerFlie = req.files.movieThriller[0]
    
    try {
        const movieUrl = await addToMovieVideoFirebase( movieVideoFlie ) 
        const data  = await movieControllers.createMovie( { ...movieObj, movieUrl} )
        success({
            res,
            status: 201,
            data,
            message: 'Movie Created! :D'
        })
    } catch (err) {
        error({
            res,
            data: err.stack,
            message: err.message,
            status: 400,
            fields: {
                title: 'string',
                synopsis : 'string',
                releaseYear: 2020,
                director: 'string',
                duration: 180,
                trillerUrl: 'a',
                coverUrl: 'a',
                classification: 'string',
                rating: 0.0
            }
        })
    }
}

const postMovieGenres = ( req, res ) => {
    console.log(req.params)
    const {  movie_id, genre_id} = req.params
    const movieGenreObj = {
        movieId: movie_id,
        genreId: genre_id
    }
    console.log(movieGenreObj)
    
    movieControllers.createMovieGenres( movieGenreObj )
        .then( data => success({
            res,
            data,
            status: 201,
            message: 'Movie-Genre created',
        }) )
        .catch( err => error({
            res,
            data: err.stack,
            message: err.message,
            status: 400,
            fields:{
                movieId: 'UUID',
                genreId: 'Number'
            }
        }) )
}


const getAllMoviesByGenre = ( req, res ) => {
    const genreId = req.params.genre_id
    movieControllers.findAllMoviesById(genreId)
        .then( data => success({
            res,
            status: 200,
            data,
            message: 'Getting all movies'
        }) )
        .catch( err => error({
            res,
            data: err,
            message: 'Something bad getting all movies',
            status: 400
        }) )
}

module.exports = {
    getAllMovies,
    postMovie,
    postMovieGenres,
    getAllMoviesByGenre
}