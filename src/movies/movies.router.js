const moviesRouter = require( 'express' ).Router()
const moviesServices = require( './movies.services' )
const upload = require( '../utils/multer' )

moviesRouter.route( '/' )
    .get( moviesServices.getAllMovies )
    .post( upload.single('movieVideo'), moviesServices.postMovie )
    // .post( upload.fields([ 
    //         { name: 'movieVideo', maxCount: 1 },
    //         { name: 'movieCover', maxCount: 1 },
    //         { name: 'movieThriller', maxCount: 1 }
    //      ]), 
    //      moviesServices.postMovie 
    // )

moviesRouter.post( '/:movie_id/genres/:genre_id', moviesServices.postMovieGenres)

moviesRouter.get( '/genres/:genre_id', moviesServices.getAllMoviesByGenre )

module.exports = moviesRouter