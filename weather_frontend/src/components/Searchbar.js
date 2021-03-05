import React, { useEffect, useState, useRef } from "react";

function Searchbar(props) {
  const [search, setSearch] = useState(props.place);
  const cityRef = useRef(null);
  const autocompleteRef = useRef(null);

  const updatesSetPlace = (e) => {
    e.preventDefault();
    props.setPlace(search);
  };

  useEffect(() => {
    if (autocompleteRef.current) {
      return;
    }
    console.log("Initializing autocomplete");
    autocompleteRef.current = new google.maps.places.Autocomplete(
      cityRef.current,
      {
        types: ["(cities)"],
      }
    );
    autocompleteRef.current.addListener("place_changed", () => {
      let place = autocompleteRef.current.getPlace();
      if (!place) {
        return;
      }
      if (!place.formatted_address) {
        return;
      }
      let city = place.address_components.find((component) => {
        return component.types.includes("locality");
      });
      let country = place.address_components.find((component) => {
        return component.types.includes("country");
      });
      let location = `${city.long_name}, ${country.short_name}`;
      setSearch(location);
      props.setPlace(location);
    });
  }, [props]);

  /* global google */
  return (
    <div className="container  mb-8 ">
      <div className="text-center sm:text-left  mb-8 md:mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800 bg-opacity-50 dark:bg-gradient-to-r dark:from-gray-400 dark:to-gray-200 text-4xl sm:text-4xl font-extrabold">
          Weather App
        </span>
      </div>
      <form onSubmit={updatesSetPlace} className="flex justify-center">
        <input
          className="bg-transparent rounded-lg text-blue-800 text-center dark:text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 focus:outline-none ring-2 dark:ring-gray-400 dark:focus:ring-gray-200 focus:ring-blue-300 focus:border-transparent focus:shadow-md "
          type="search"
          style={{ marginRight: "1em" }}
          name="search"
          placeholder="Search by city or zipcode"
          ref={cityRef}
        />
        <button
          className="py-1.5 px-4 font-semibold rounded-lg shadow-md hover:bg-indigo-200 text-white bg-indigo-600 bg-opacity-25 dark:bg-gray-300 dark:bg-opacity-25 dark:hover:bg-gray-200 dark:hover:bg-opacity-25 active:bg-indigo-300 dark:active:bg-gray-300 focus:outline-none"
          type="submit"
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
