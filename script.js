import { API_KEY } from "./config.js"

const searchInput = document.getElementById("search-bar")
const searchBtn = document.getElementById('search-btn')
const unableToFind = document.getElementById('unable-to-find')
const startExploring = document.getElementById('start-exploring-container')
const movieMainContainers = document.getElementById('movie-main-containers')

let watchlistMovies = []

searchBtn.addEventListener('click', renderMovieList)

async function findMovieList() {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput.value}`)
  const data = await res.json()

  if(data.Response === 'True'){
    return data.Search
  } else {
    startExploring.style.display = 'none'
    unableToFind.style.display = 'block'
  }
}

async function renderMovieList() {
  const movies = await findMovieList()
  movieMainContainers.innerHTML = ""
  watchlistMovies = []
  searchInput.value = ""

  for(let movie of movies){
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
    const fullMovie = await res.json()
    watchlistMovies.push(fullMovie)

    unableToFind.style.display = 'none'
    startExploring.style.display = 'none'
    movieMainContainers.style.display = 'flex'

    movieMainContainers.innerHTML += `<div class="movie-main-container">
            <img class="movie-img" src="${fullMovie.Poster}" alt="">
              <div class="movie-container">
                <div class="movie-header-container">
                  <h4>${fullMovie.Title}</h4>
                  <i class="fa-solid fa-star"></i>
                  <p class="rating">${fullMovie.imdbRating}</p>
                </div>
                <div class="about-movie-container">
                  <p>${fullMovie.Runtime}</p>
                  <p>${fullMovie.Genre}</p>
                  <div class="add-watchlist-btn">
                    <button data-id="${fullMovie.imdbID}" class="plus">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  <p>Watchlist</p>
                  </div>
                </div>
                <div class="movie-description-container">
                  <p>${fullMovie.Plot}</p>
                </div>
              </div>
          </div> 
          `
  }
}

movieMainContainers.addEventListener("click", e => {
  if(e.target.closest('.plus')) {
    const imdbID = e.target.closest('.plus').dataset.id
    const movieToSave = watchlistMovies.find(movie => movie.imdbID === imdbID)

    if(movieToSave){
      let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
      watchlist.push(movieToSave)
      localStorage.setItem('watchlist', JSON.stringify(watchlist))
      console.log(movieToSave, "Is added to watchlist")
    }
  }
})
