
const watchlistContainer = document.getElementById('watchlist-container')
const addMoviesContainer = document.getElementById('add-movies-container')


  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || []

  if(watchlist.length <= 0) {
     addMoviesContainer.style.display = "flex"
  } else {
 addMoviesContainer.style.display = "none"
  watchlistContainer.style.display = "flex"
  
   watchlist.forEach(movie => {
      watchlistContainer.innerHTML += `
      <div class="movie-main-container">
            <img class="movie-img" src="${movie.Poster}" alt="">
              <div class="movie-container">
                <div class="movie-header-container">
                  <h4>${movie.Title}</h4>
                  <i class="fa-solid fa-star"></i>
                  <p class="rating">${movie.imdbRating}</p>
                </div>
                <div class="about-movie-container">
                  <p>${movie.Runtime}</p>
                  <p>${movie.Genre}</p>
                  <div class="add-watchlist-btn">
                    <button class="plus" data-id="${movie.imdbID}">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  <p>Remove</p>
                  </div>
                </div>
                <div class="movie-description-container">
                  <p>
                    ${movie.Plot}
                  </p>
                </div>
              </div>
        </div> 
    `
   })
  }
 


  watchlistContainer.addEventListener('click', e => {
    const btn = e.target.closest('.plus')
      if (btn) {
        const movieId = btn.dataset.id
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []

        const updatedWatchlist = watchlist.filter(movie => movie.imdbID !== movieId)

        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))

        location.reload()
      }
  })


