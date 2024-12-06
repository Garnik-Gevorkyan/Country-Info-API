import "./styles.css";
import Entry from "./Entry.js";
import Info from "./Info.js";
import Title from "./Title.js";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null); // Set initial state to null

  useEffect(() => {
    if (name) {
      const countryName = encodeURIComponent(name.toLowerCase());
      const url = `https://restcountries.com/v3.1/name/${countryName}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => setData(data[0]))
        .catch((error) => setData({ error: error.message })); // Store error as an object for better handling
    }
  }, [name]);

  return (
    <div className="App">
      <Title title="Country Info" />
      <Entry action={setName} />
      <Info data={data} />
    </div>
  );
}
