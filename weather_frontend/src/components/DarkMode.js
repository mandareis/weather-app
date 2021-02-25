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
    <div className="flex justify-center sm:justify-end">
      <div className="mb-8 md:mb-4 grid grid-cols-3 divide-x max-w-xs divide-indigo-800 dark:divide-gray-400 ">
        <div className="mr-4">
          <button
            className="text-center font-semibold text-lg text-blue-700 dark:text-gray-200 px-6 focus:outline-none"
            id="visual-mode-auto"
            onClick={setTheme}
          >
            Auto
          </button>
        </div>
        <div className="mr-4  ">
          <button
            className=" text-center font-semibold text-lg text-blue-800 dark:text-gray-300 px-6 focus:outline-none"
            id="visual-mode-dark"
            onClick={setTheme}
          >
            Dark
          </button>
        </div>
        <div className="mr-4">
          <button
            className="text-center font-semibold text-lg text-blue-900 dark:text-gray-400 px-6 focus:outline-none"
            id="visual-mode-light"
            onClick={setTheme}
          >
            Light
          </button>
        </div>
      </div>
    </div>
  );
}

export default DarkMode;
