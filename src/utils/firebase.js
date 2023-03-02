const firebase = require( 'firebase/app' )
const { 
    getStorage, 
    uploadBytes, 
    ref,
    getDownloadURL,
} = require( 'firebase/storage' )

const config = require( '../../config' ).api.firebase

const firebaseApp = firebase.initializeApp( config )

const storage = getStorage(firebaseApp)

//? Peliculas
const addToMovieVideoFirebase = async (file) => {
    const movieRef = ref( storage, `movie-videos/${Date.now()}-${file.originalname}` )

    await uploadBytes( movieRef, file.buffer )
    const movieUrl = await getDownloadURL( movieRef )

    return movieUrl
}

//? cover pelicula
const addToMovieCoverFirebase = async (file) => {
    const movieRef = ref( storage, `movie-cover/${Date.now()}-${file.originalname}` )

    await uploadBytes( movieRef, file.buffer )
    const movieUrl = await getDownloadURL( movieRef )

    return movieUrl
}

//? Serie - Name - Temporada - Cover
//? Serie - Name - Temporada - Capitulo

module.exports = {
    addToMovieVideoFirebase,
    addToMovieCoverFirebase,
    
}