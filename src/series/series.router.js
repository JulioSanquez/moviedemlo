const seriesRouter = require( 'express' ).Router()
const seriesServices = require( './series.services' )
const upload = require( '../utils/multer' )

seriesRouter.route( '/' )
    .get( seriesServices.getAllSeries )
    .post( upload.single('seriesVideo'), seriesServices.postSeries )
    // .post( upload.fields([ 
    //         { name: 'seriesVideo', maxCount: 1 },
    //         { name: 'seriesCover', maxCount: 1 },
    //         { name: 'seriesThriller', maxCount: 1 }
    //      ]), 
    //      seriesServices.postSeries 
    // )

seriesRouter.post( '/:series_id/genres/:genre_id', seriesServices.postSeriesGenres)

seriesRouter.get( '/genres/:genre_id', seriesServices.getAllSeriesByGenre )

module.exports = seriesRouter