import React, { useEffect } from "react";

function DarkMode() {
  useEffect(() => {
    const mqResult = window.matchMedia("(prefers-color-scheme: dark)");
    mqResult.addEventListener("change", onPreferenceChanged);
    return () => {
      mqResult.removeEventListener("change", onPreferenceChanged);
    };
  }, []);
  //add styling to buttons
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
    <div className="container mx-auto flex justify-center h-auto sm:justify-end inline-flex  mb-4">
      <div className="mr-4 ">
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
  );
}

export default DarkMode;
