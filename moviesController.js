const connection = require('./database/connection')

const index = (req, res) => {
    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: 'Errore' })
        res.json(results)
    })
}

const show = (req, res, next) => {
    const id = Number(req.params.id);
    const sqlMovies = "SELECT * FROM movies WHERE id = ?";
    const sqlReviews = "SELECT id, movie_id, name, vote, text FROM reviews WHERE movie_id = ?";
    connection.query(sqlMovies, [id], (err, res, next) => {
        if (err) {
            console.error("Errore");
            return next(err);
        }


        if (movieResults.length === 0) {
            res.status(404);
            const error = new Error(`Film non trovato: ${id}`);
            return next(error);
        }

        const movie = movieResults[0];

        connection.query(sqlReviews, [id], (errReviews) => {
            if (errReviews) {
                console.error("Errore recensione");
                return next(errReviews);
            }
        })
        movie.reviews = reviewsResults;
        res.status(200).json(movie);
    })
}


module.exports = { index, show }