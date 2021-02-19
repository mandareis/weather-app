import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";

function App() {
  const [place, setPlace] = useState("San Francisco");
  return (
    <div className="m-12 container mx-auto lg:grid grid-rows-2 rounded-xl bg-gradient-to-r from-indigo-100 to-indigo-200 min-w-0  px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
      <Searchbar place={place} setPlace={setPlace} />
      <Weather place={place} />
    </div>
  );
}

export default App;
