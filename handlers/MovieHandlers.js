const database = require('../mock/database.js')

exports.allMoviesHandler = (req, res) => {
    res.json({
        status: 'success',
        data: database.movies
    })

}

exports.newMovieHandler = (req, res) => {
    /* JSON მაგალათი postman-ისთვის:
    {
    "id":1,
    "title":"Deu tae-ro ra-i-beu ",
    "text":"A newsman discovers he has been rigged with a bomb after he has an exclusive interview with a terrorist who blew up a bridge",
    "thumbnail":"https://www.imdb.com/title/tt2990738/mediaviewer/rm4270349824/",
    "director":"Byung-woo Kim",
    "year":2007,
    "rating":6.5
    }
*/


    if (req.body != null && req.body.title != null && req.body.text != null && req.body.thumbnail != null && req.body.director != null && req.body.year != null && req.body.rating != null) {
        const newMovie = {
            id: database.movies[database.movies.length - 1].id + 1,
            title: req.body.title,
            text: req.body.text,
            thumbnail: req.body.thumbnail,
            director: req.body.director,
            year: req.body.year,
            rating: req.body.rating,
        }
        if (Number(newMovie.rating) > 8 && Number(newMovie.year < 1990)) {
            newMovie["isClassic"] = true
        } else {
            newMovie["isClassic"] = false
        }
        database.movies.push(newMovie)
        res.end("added successfully")
    } else {
        res.end("happend something wrong")
    }


}

exports.directorMoveiHandler = (req, res) => {
    let directorMovies = []
    for (let movies of database.movies) {
        if (movies.director === req.params.director) {
            directorMovies.push(movies)
        }
    }
    if (directorMovies.length > 0) {
        res.json({
            status: 'success',
            data: directorMovies
        })
    } else {
        res.json({
            status: "error",
            message: "cant find movie"
        })
    }
}
exports.directorAndYearMoveiHandler = (req, res) => {
    let directorMovies = []
    for (let movies of database.movies) {
        if (movies.director === req.params.director && movies.year === Number(req.params.year)) {
            directorMovies.push(movies)
        }
    }
    if (directorMovies.length > 0) {
        res.json({
            status: 'success',
            data: directorMovies
        })
    } else {
        res.json({
            status: "error",
            message: "cant find movie"
        })
    }
}

exports.oneMovieHandler = (req, res) => {
    for (let elems of database.movies) {
        if (elems.id === Number(req.params.id)) {
            res.json({
                status: 'success',
                data: elems
            })
            return
        }
    }
    res.json({
        status: "error",
        message: "cant find movie"
    })
}
exports.deleteMovieHandler = (req, res) => {
    let find = false
    for (let i = 0; i < database.movies.length; i++) {
        if (database.movies[i].id === Number(req.params.id)) {
            database.movies.splice(i, 1);
            find = true

        }
    }

    res.end(find ? "successfully removed" : "cant find in database")
}
exports.patchHandler = (req, res) => {
    let index = 0
    for (let elems of database.movies) {
        if (elems.id === Number(req.params.id)) {
            elems = {
                ...elems,
                ...req.body
            }
            database.movies[index] = elems
            res.json({
                status: 'success',
                message: "patch successed"
            })
            return
        }

        index++
    }
    res.json({
        status: "error",
        message: "cant find movie for patch"
    })

}


exports.putHandler = (req, res) => {
    let index = 0
    for (let elems of database.movies) {
        if (elems.id === Number(req.params.id)) {
            database.movies[index] = req.body
            res.json({
                status: 'success',
                message: "put successed"
            })
            return
        }

        index++
    }
    res.json({
        status: "error",
        message: "cant find movie for put"
    })

}