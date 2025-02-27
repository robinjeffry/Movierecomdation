import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Welcome to Movie Recommendation App 🎬
      </motion.h1>
      <motion.p initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        Discover the best movies across different genres. Select your favorite genre and get personalized movie suggestions instantly.
      </motion.p>
      <motion.p initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        Sign up to create your own watchlist and keep track of movies you've watched.
      </motion.p>
    </div>
  );
};

export default Home;
