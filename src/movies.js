// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
const dirAll = moviesArray.map(currentMovie => currentMovie.director)
return dirAll
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter ( movies => {
        return movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    })
    return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) 
    {
        return 0;
    }

    let average = 0;
    const movieScores = moviesArray.reduce((accumulator, currentValue) => {
        if (currentValue.score !== undefined)
        {
            return accumulator + currentValue.score
        }
        else 
        {
            return accumulator;
        }
    }, 0)

    average = movieScores / moviesArray.length;

    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let scoreDrama = moviesArray.filter ( movies => {
        return movies.genre.includes("Drama");
    })

    if (scoreDrama.length === 0)
    {
        return 0
    }
    
    const dramaScores = scoreDrama.reduce ((accumulator, currentValue) => {
        if (currentValue.score !== undefined)
        {
            return accumulator + currentValue.score
        }
        else
        {
            return accumulator
        }
    }, 0)
    
    let averageDrama = 0;
    averageDrama = dramaScores / dramaScores.length

    return Number(averageDrama.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
