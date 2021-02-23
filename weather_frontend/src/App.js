import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
import DarkMode from "./components/DarkMode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [place, setPlace] = useState("San Francisco");

  return (
    <div
      style={{ height: "100vh", padding: "3rem" }}
      className="bg-white dark:bg-gray-900"
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="m-12 font-sans container mx-auto dark:text-white grid-rows-2 dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-700 rounded-xl bg-gradient-to-r from-indigo-100 to-indigo-200 sm:px-6 xl:px-8 pt-10 min-w-0  px-4  pb-24 lg:pb-16">
              <DarkMode />
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
