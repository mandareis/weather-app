import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
import DarkMode from "./components/DarkMode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [place, setPlace] = useState("San Francisco");
  //fix background color when on mobile
  return (
    <div
      style={{ padding: "1rem" }}
      className="bg-white dark:bg-black bg-max-h-screen sm:h-screen"
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="mt-2 font-sans container mx-auto dark:text-white grid-rows-2 dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-700 rounded-xl bg-gradient-to-r from-indigo-100 to-indigo-200  xl:px-8 pt-10 min-w-0 pb-10 px-4 lg:pb-16">
              {/* figure out margin bottom  */}
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
