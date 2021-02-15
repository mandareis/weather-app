import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      let response = await fetch("/api");
      let data = await response.json();

      setData(data.message);
    }
    getData();
  }, []);
  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
