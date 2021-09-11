import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MoviesLayout = (props) => {
    return (
        <main>
            <MovieNavbar />
            {props.children}
            <footer>Footer</footer>
        </main>
    );
};

export default MoviesLayout;
