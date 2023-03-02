const { Genres } = require( '../models/index.models' )

const findAllGenres = async () => {
    const data = await Genres.findAll()
    return data
}

const createGenre = async ( name ) => {
    const data = await Genres.create( { name } )
    return data
}

module.exports = {
    findAllGenres,
    createGenre
}