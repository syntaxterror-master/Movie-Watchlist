
🎬 Movie Watchlist App

This is a simple movie search and watchlist app built using HTML, CSS, and Vanilla JavaScript, powered by the OMDb API.
Users can search for movies, view detailed info, and add them to a watchlist stored in localStorage.

🔧 Features

🔍 Search for any movie using OMDb API

📄 See detailed info: poster, title, rating, genre, runtime, and description

➕ Add movies to your personal watchlist

🗑️ Remove movies from your watchlist

💾 Watchlist stored locally using localStorage

📱 Responsive design – works well on all screen sizes

🛠️ Technologies Used

HTML5 & CSS3

JavaScript (ES6+)

OMDb API

localStorage

Git & GitHub

📁 Project Structure


├── index.html

├── watchlist.html

├── style.css

├── script.js

├── watchlist.js

├── config.js (🔐 ignored via .gitignore)

├── images/

└── README.md


⚙️ How to Run

Clone the repo:

git clone https://github.com/your-username/movie-watchlist.git


Create a config.js file in the root directory:

export const API_KEY = 'your_omdb_api_key'

Run with Live Server or open index.html in your browser.

🔐 Notes

The config.js file is ignored using .gitignore to keep the API key secure.

You can get a free OMDb API key at omdbapi.com/apikey.aspx.

🤔 Lessons Learned

Practiced fetching data from an API

Used async/await and .map(), .forEach() effectively

Managed app state with localStorage

Improved understanding of DOM manipulation

Improved code organization between multiple files and pages

📸 Preview

💡 Future Improvements

🔎 Add loading state

💬 Show error messages on failed fetch

🔁 Sort watchlist or filter by genre

☁️ Store watchlist to Firebase for sync between devices

👨‍💻 Author

Created with ❤️ by SyntaxError
