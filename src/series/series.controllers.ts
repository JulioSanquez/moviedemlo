const {Op} = require('sequelize')
const { Series, SeriesGenres, Genres } = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4

const findAllSeries = async ( limit, offset ) => {
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

    const data = await Series.findAndCountAll()

    return data
}

const createSeries = async (seriesObj) => {
    const newSeries = {
        id: uuid(),
        title: seriesObj.title,
        synopsis : seriesObj.synopsis,
        releaseYear: seriesObj.releaseYear,
        director: seriesObj.director,
        duration: seriesObj.duration,
        thrillerUrl: seriesObj.thrillerUrl,
        coverUrl: seriesObj.coverUrl,
        seriesUrl: seriesObj.seriesUrl,
        classification: seriesObj.classification,
        rating: seriesObj.rating
    }
    const data = await Series.create(newSeries)
    
    return data
}

const createSeriesGenres = async ( seriesGenreObj  ) => {
    seriesGenreObj.id = uuid()
    console.log(seriesGenreObj)
    const data = await SeriesGenres.create(seriesGenreObj)

    return data
}

const findAllSeriesById = async ( genreId ) => {
    const data = await Series.findAll({
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
    findAllSeries,
    createSeries,
    createSeriesGenres,
    findAllSeriesById
}