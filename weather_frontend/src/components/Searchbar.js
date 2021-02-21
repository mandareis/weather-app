import React, { useState } from "react";

// figure out gap between input and Go button => DONE
//style the X in the input field ??
//@media for the searchbar when on smaller screens =? DONE
//change text color to blue DONE
function Searchbar(props) {
  const [search, setSearch] = useState(props.place);
  const updatesSetPlace = (e) => {
    e.preventDefault();
    props.setPlace(search);
  };
  return (
    <div className="container mb-4 ">
      <div className="text-center sm:text-left mb-4 ">
        <span className="bg-clip-text  text-transparent bg-gradient-to-r from-blue-400 to-blue-800 bg-opacity-50 text-4xl sm:text-4xl font-extrabold">
          Weather App
        </span>
      </div>
      <form onSubmit={updatesSetPlace} className="flex justify-center gap-2">
        <input
          className="bg-transparent rounded-lg text-blue-800 text-center w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 focus:outline-none ring-2 focus:ring-blue-300 focus:border-transparent focus:shadow-md "
          type="search"
          style={{ marginRight: "2em" }}
          name="search"
          autoComplete="off"
          placeholder="Search by city or zipcode"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md hover:bg-indigo-200  text-white bg-indigo-600 bg-opacity-25 active:bg-indigo-300 focus:outline-none"
          type="submit"
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
