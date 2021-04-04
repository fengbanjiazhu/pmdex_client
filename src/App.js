import "./App.css";

import { useState, useEffect } from "react";
import Pokeball from "./Components/Pokeball";
import PokemonList from "./Components/PokemonList";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();
const nationalPMDexCount = 21;

const App = () => {
  // const [pmName, setPmName] = useState(null);
  // const [pmID, setPmID] = useState(null);
  // const [pmSpritesURL, setPmSpritesURL] = useState(null);
  const [pms, setPMs] = useState([]);

  useEffect(() => {
    // const interval = {
    //   offset: 0,
    //   limit: 2,
    // };

    async function fetchPokemon() {
      let indexArr = [...Array(nationalPMDexCount).keys()].map((i) => i + 1);
      try {
        // P.getPokemonByName(array_of_ids), it returns a Promise.all(),
        // which is all or nothing. It resolves once all promises in the array resolve,
        // or reject as soon as one of them rejects.
        return await P.getPokemonByName(indexArr);
      } catch (e) {
        console.error(e);
      } finally {
        console.log("balabalbalbala");
      }
      return "Error!!!!!!";
    }

    async function run() {
      let response = await fetchPokemon();
      console.log(response);
      setPMs(response);
    }
    run();
  }, []); // <-- Have to pass in [] here!

  return (
    <div className="App">
      <Pokeball />
      <h3> Pokemon lists from #1 - #151</h3>
      {/* <PokemonItem pm_name={pmName} pm_sprite_url={pmSpritesURL} pm_id={pmID}></PokemonItem> */}
      {pms.length === 0 && <p>Loading</p>}
      {pms.length > 0 && <PokemonList pms={pms}></PokemonList>}
    </div>
  );
};

export default App;
