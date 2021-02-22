import React, { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [place, setPlace] = useState("San Francisco");

  useEffect(() => {
    const mqResult = window.matchMedia("(prefers-color-scheme: dark)");
    mqResult.addEventListener("change", onPreferenceChanged);
    return () => {
      mqResult.removeEventListener("change", onPreferenceChanged);
    };
  }, []);

  const onPreferenceChanged = () => {
    if (localStorage.theme === "auto") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };
  const setTheme = (e) => {
    switch (e.target.id) {
      case "visual-mode-auto":
        localStorage.theme = "auto";
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        break;
      case "visual-mode-dark":
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        break;
      case "visual-mode-light":
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        break;
      default:
        throw new Error("unknown button");
    }
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
              <div className="flex inline-flex flex-row-reverse">
                <div className="mr-4">
                  <button id="visual-mode-auto" onClick={setTheme}>
                    Auto
                  </button>
                </div>
                <div className="mr-4">
                  <button id="visual-mode-dark" onClick={setTheme}>
                    Dark
                  </button>
                </div>
                <div className="mr-4">
                  <button id="visual-mode-light" onClick={setTheme}>
                    Light
                  </button>
                </div>
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
