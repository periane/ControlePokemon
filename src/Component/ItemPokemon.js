import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";

const Show = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;
class ItemPokemon extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    detail: "",
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name,detail, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl,detail, pokemonIndex,
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5 container-movie">
        <Link to={`pokemon/${this.state.pokemonIndex}/${this.state.name}/${this.state.detail}`}>
          <div className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            <Show
              className="card-img-top rounded mx-auto mt-2"
              src={this.state.imageUrl}
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequests: true })}
              style={
                this.state.toManyRequests
                  ? { display: "none" }
                  : this.state.imageLoading
                  ? null
                  : { display: "block" }
              }
            />
            {this.state.toManyRequests ? (
              <h6 className="mx-auto">
                <span className="badge badge-danger mt-2">
                  To Many Requests
                </span>
              </h6>
            ) : null}
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ItemPokemon;
