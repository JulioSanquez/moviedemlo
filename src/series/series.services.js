const seriesControllers = require( './series.controllers' )
const { error, success } = require( '../utils/handleResponses' )
const {addToSeriesVideoFirebase} = require( '../utils/firebase' )

const getAllSeries = ( req, res ) => {
    const limit =  Number(req.query.limit) || 10
    const offset = Number(req.query.offset) || 0

    
    seriesControllers.findAllSeries( limit, offset )
        .then( data =>{ 
                const nextPageUrl = (data.count - offset) < limit ? '' : null
                const prevPageUrl = offset - limit >= 0 ? '' : null
                success({
                res,
                status: 200,
                data,
                message: 'Getting all series'
            }) 
        })
        .catch( err => error({
            res,
            data: err,
            message: 'Something bad getting all series',
            status: 400
        }) )
}

const postSeries = async ( req, res ) => {
    const seriesObj = req.body
    const seriesVideoFlie = req.file
    // const seriesVideoFlie = req.files.seriesVideo[0]
    // const seriesCoverFlie = req.files.seriesCover[0]
    // const seriesThrillerFlie = req.files.seriesThriller[0]
    
    try {
        const seriesUrl = await addToSeriesVideoFirebase( seriesVideoFlie ) 
        const data  = await seriesControllers.createSeries( { ...seriesObj, seriesUrl} )
        success({
            res,
            status: 201,
            data,
            message: 'Series Created! :D'
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

const postSeriesGenres = ( req, res ) => {
    console.log(req.params)
    const {  series_id, genre_id} = req.params
    const seriesGenreObj = {
        seriesId: series_id,
        genreId: genre_id
    }
    console.log(seriesGenreObj)
    
    seriesControllers.createSeriesGenres( seriesGenreObj )
        .then( data => success({
            res,
            data,
            status: 201,
            message: 'Series-Genre created',
        }) )
        .catch( err => error({
            res,
            data: err.stack,
            message: err.message,
            status: 400,
            fields:{
                seriesId: 'UUID',
                genreId: 'Number'
            }
        }) )
}


const getAllSeriesByGenre = ( req, res ) => {
    const genreId = req.params.genre_id
    seriesControllers.findAllSeriesById(genreId)
        .then( data => success({
            res,
            status: 200,
            data,
            message: 'Getting all series'
        }) )
        .catch( err => error({
            res,
            data: err,
            message: 'Something bad getting all series',
            status: 400
        }) )
}

module.exports = {
    getAllSeries,
    postSeries,
    postSeriesGenres,
    getAllSeriesByGenre
}