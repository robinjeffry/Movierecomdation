import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      <MovieRecommendation />
      {showLogin && <Login closeModal={() => setShowLogin(false)} />}
      {showSignup && <Signup closeModal={() => setShowSignup(false)} />}
    </>
  );
};

const MovieRecommendation = () => {
  const [genre, setGenre] = useState("");

  const movieData = {
    action: [
      "Mad Max: Fury Road", "John Wick", "Gladiator", "Avengers: Endgame", "The Dark Knight",
      "Die Hard", "Mission: Impossible - Fallout", "Terminator 2: Judgment Day", "The Raid", "Taken",
      "Lethal Weapon", "Casino Royale", "Black Panther", "Logan", "Kill Bill: Volume 1",
      "The Bourne Ultimatum", "300", "Spider-Man: No Way Home", "Captain America: The Winter Soldier", "Edge of Tomorrow",
      "Atomic Blonde", "Deadpool", "The Equalizer", "The Expendables", "Fast & Furious 7"
    ],
    comedy: [
      "Superbad", "Step Brothers", "Dumb and Dumber", "The Hangover", "21 Jump Street",
      "Anchorman", "Zombieland", "Monty Python and the Holy Grail", "The Big Lebowski", "Tropic Thunder",
      "Bridesmaids", "Ferris Bueller's Day Off", "Groundhog Day", "Napoleon Dynamite", "Office Space",
      "Shaun of the Dead", "Hot Fuzz", "Meet the Parents", "School of Rock", "The Mask",
      "Wayne's World", "Super Troopers", "Airplane!", "Borat", "Dr. Strangelove"
    ],
    drama: [
      "The Shawshank Redemption", "Forrest Gump", "Fight Club", "The Godfather", "A Beautiful Mind",
      "The Green Mile", "Schindler's List", "Good Will Hunting", "The Pursuit of Happyness", "12 Years a Slave",
      "There Will Be Blood", "The Departed", "Requiem for a Dream", "Whiplash", "Joker",
      "Birdman", "The Social Network", "The Revenant", "Manchester by the Sea", "Moonlight",
      "A Star is Born", "American Beauty", "Cast Away", "The Irishman", "Little Women"
    ],
    sciFi: [
      "Interstellar", "Inception", "The Matrix", "Blade Runner 2049", "Star Wars",
      "2001: A Space Odyssey", "The Terminator", "Arrival", "Dune", "Guardians of the Galaxy",
      "Gravity", "The Fifth Element", "A Quiet Place", "Looper", "Ex Machina",
      "Minority Report", "The Martian", "Annihilation", "E.T.", "Back to the Future",
      "Total Recall", "The Prestige", "Tenet", "Alita: Battle Angel", "District 9"
    ],
  };

  return (
    <div className="app">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Movie Recommendation App 🎬
      </motion.h1>
      <motion.select onChange={(e) => setGenre(e.target.value)} value={genre}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <option value="">Select a genre</option>
        {Object.keys(movieData).map((key) => (
          <option key={key} value={key}>{key.toUpperCase()}</option>
        ))}
      </motion.select>
      <div className="movie-list">
        {movieData[genre]?.map((movie, index) => (
          <motion.div key={index} className="movie-item"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            🎥 {movie}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      