import React, { Component } from "react";
import ItemPokemon from "./ItemPokemon";
import axios from "axios";

class PokeList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
        <button
              className="submit-button"
            >
              pick
            </button>
        </label>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <ItemPokemon
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading pokemons</h1>
        )}
      </React.Fragment>
    );
  }
}

export default PokeList;
