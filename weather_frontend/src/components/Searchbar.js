import React, { useState } from "react";

function Searchbar(props) {
  const [search, setSearch] = useState(props.place);
  const updatesSetPlace = (e) => {
    e.preventDefault();
    props.setPlace(search);
  };

  return (
    <div>
      <form onSubmit={updatesSetPlace}>
        <input
          style={{ width: "200px", textAlign: "center" }}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search by city or zipcode"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default Searchbar;
