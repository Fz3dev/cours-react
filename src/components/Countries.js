import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function Countries() {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState([]);
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}> {continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          {" "}
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          // function js pour filtrer les pays en fonction de l'input radio selectionné
          .filter((country) => country.continents[0].includes(selectedRadio))
          //function js pour trier les pays par population décroissante
          .sort((a, b) => b.population - a.population)
          // function pour afficher le nombre de pays en fonction de l'input type range
          .slice(0, rangeValue)
          // function pour faire une boucle sur la const data, qui va nous donner autant de country qu'il y'a dans la database
          .map((country, index) => (
            // on appelle notre composant card autant de fois quil sera mappé
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
}

export default Countries;
