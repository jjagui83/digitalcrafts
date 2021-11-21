console.log("jose")
const input = document.querySelector(".item");
const searchButton = document.querySelector(".searchButton");
const posters = document.querySelector(".posters");


async function fetchMovies() {
    posters.innerHTML = '';
    const apiKey = "55be4e6";
    const getMovies = await fetch(`http://www.omdbapi.com/?apikey=55be4e6&s=${input.value}`);
    const jsonMovies = await getMovies.json();
    console.log(jsonMovies)
    


    for (const movie of jsonMovies.Search) {

        const movieImages = document.createElement("div");
        movieImages.className = "movieCards";
        const movieTitle = document.createElement("h2");
        const movieScreen = document.createElement("img");        
        movieTitle.innerHtml = movie.Title;
        movieScreen.src = movie.Poster;

        movieImages.append (movieScreen, movieTitle);
        posters.append(movieImages)
        
        
    }
  



}

searchButton.addEventListener("click", () => {
    fetchMovies()
    // input.value = ""
})
