import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  const movieData = {
    action: ["Mad Max: Fury Road", "John Wick", "Die Hard"],
    comedy: ["Superbad", "Step Brothers", "Dumb and Dumber"],
    drama: ["The Shawshank Redemption", "Forrest Gump", "Fight Club"],
    sciFi: ["Interstellar", "Inception", "The Matrix"],
  };

  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);
    setMovies(movieData[selectedGenre] || []);
  };

  return (
    <>
      <Navbar />
      <div className="app">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Movie Recommendation App
        </motion.h1>
        <select onChange={handleGenreChange} value={genre}>
          <option value="">Select a genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="sciFi">Sci-Fi</option>
        </select>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <motion.div
              key={index}
              className="movie-item"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {movie}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
