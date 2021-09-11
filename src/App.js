import React from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Higher Order Components
import DefaultHOC from "./HOC/Default.HOC";
import MoviesHOC from "./HOC/Movies.HOC";

//Pages
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";

function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
            <MoviesHOC path="/movie/:id" exact component={MoviePage} />
        </>
    );
}

export default App;
