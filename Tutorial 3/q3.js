const movies = [
    { title: "In Bruges", rating: 5, hasWatched: true },
    { title: "Frozen", rating: 4.5, hasWatched: false },
    { title: "Mad Max Fury Road", rating: 5, hasWatched: true },
    { title: "Les Miserables", rating: 3.5, hasWatched: false },
];

for (const movie of movies) {
    const watchedText = movie.hasWatched ? "have watched" : "have not seen";
    console.log(`You ${watchedText} "${movie.title}" - ${movie.rating} stars`);
}