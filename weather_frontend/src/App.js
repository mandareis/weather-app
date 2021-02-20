import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const [place, setPlace] = useState("San Francisco");
  return (
    <Router>
      <div className="m-12 font-sans container mx-auto lg:grid grid-rows-2 rounded-xl bg-gradient-to-r from-indigo-100 to-indigo-200 sm:px-6 xl:px-8 pt-10 min-w-0  px-4  pb-24 lg:pb-16">
        <Link to="/">
          <Searchbar place={place} setPlace={setPlace} />
          <Weather place={place} />
        </Link>
      </div>
    </Router>
  );
}

export default App;
