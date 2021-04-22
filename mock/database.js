const database = {
    users: [],
    movies: []
}


database.movies = [
    {
        id: 1,
        title: 'Deu tae-ro ra-i-beu ',
        text: 'A newsman discovers he has been rigged with a bomb after he has an exclusive interview with a terrorist who blew up a bridge',
        thumbnail: 'https://www.imdb.com/title/tt2990738/mediaviewer/rm4270349824/',
        director: 'Byung-woo Kim',
        year: 2007,
        isClassic: false,
        rating: 6.5
    },
    {
        id: 2,
        title: 'Godzilla vs. Kong',
        text: ' The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.',
        thumbnail: 'https://www.imdb.com/title/tt5034838/mediaviewer/rm4176402177/',
        author: 'Adam Wingard',
        year: 2021,
        isClassic: false,
        rating: 6.5
    },
];

database.users = [
    {
        id: 1,
        username: "Temo",
        password: "1234",
        age: 19

    },
    {
        id: 2,
        username: "Nika",
        password: "4444",
        age: 19

    }
]


module.exports = database