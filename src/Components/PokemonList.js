import PokemonView from "./PokemonView";
import {
  Route,
  Link
} from "react-router-dom";

const PokemonList = ({ pms }) => {
  const pmList = pms.map((pm) => (
    <div className="pm_info" id={`pm${pm.id}`}>
      <Link to={`/pokemon/${pm.id}`}>
      <img
        src={pm.sprites.front_default}
        alt={pm.species.name}
      ></img>
      <p>
        <em class="iconfont">&#xe625;</em>
        {pm.id}
      </p>
       {pm.name}
      </Link>
    </div>
  ));

  return (
  <div className="pokemon_list">
    <Route path="/pokemon/:pm_id" children={
      <PokemonView/>
    }></Route>
    {pmList}
  </div>
  );
};

export default PokemonList;
