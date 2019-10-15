import React, { Component } from "react";
import axios from "axios";
import "./style.css";
  
  const PokemonDetail = () => {
    return (
      <section className="detail-view">
        <img className='sprite-image'/>
        <div className='data-wrapper'>
          <h1 className='data-name'></h1>
          <p className='data-char'></p>
          <p className='data-char'></p>
        </div>
      </section>
    )
  }

export default PokemonDetail;
