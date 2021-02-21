import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //add state for dark mode switch
  // add logic for it respecting os preference
  const [place, setPlace] = useState("San Francisco");
  // const [theme, setTheme] = useState(localStorage.theme);

  const setTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      delete localStorage.theme;
      throw new Error(`unknown theme: ${localStorage.theme}`);
    }
    console.log(localStorage);
  };

  return (
    <div
      style={{ height: "100vh", padding: "3rem" }}
      className="bg-white dark:bg-gray-800"
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="m-12 font-sans container mx-auto lg:grid grid-rows-2 rounded-xl bg-gradient-to-r from-indigo-100 to-indigo-200 sm:px-6 xl:px-8 pt-10 min-w-0  px-4  pb-24 lg:pb-16">
              <div className="">
                <button onClick={setTheme}>Auto</button>
                <button>Dark</button>
                <button>Light</button>
              </div>
              <Searchbar place={place} setPlace={setPlace} />
              <Weather place={place} />
            </div>
          </Route>
          <Route>
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
