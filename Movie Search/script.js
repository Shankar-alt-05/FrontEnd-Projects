const apiKey = 'a64b2421'; // Replace with your OMDB API key

function searchMovies() {
    const searchInput = document.getElementById('search').value;
    if (!searchInput) {
        alert('Please enter a movie name');
        return;
    }

    fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.Search);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayResults(movies) {
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (!movies || movies.length === 0) {
        results.innerHTML = '<p>No movies found</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie', 'clearfix');

        const movieImage = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';

        movieElement.innerHTML = `
            <img src="${movieImage}" alt="${movie.Title}">
            <div>
                <h2>${movie.Title}</h2>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
            </div>
        `;

        results.appendChild(movieElement);
    });
}
