import React from "react";

const MovieInfo = ({ movie }) => {
    return (
        <>
            <div className="flex flex-col gap-8">
                <h1 className="text-white text-5xl font-bold">
                    {movie.movie_title}
                </h1>
                <div className="flex flex-col gap-5 text-white">
                    <h4 className="font-semibold">4k ratings</h4>
                    <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
                    <h4>{movie.overview}</h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Rent ₹ 149.99
                    </button>
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Buy ₹ 499.99
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;
